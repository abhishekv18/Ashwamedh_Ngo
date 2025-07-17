import { imageUploadUtil } from "../helpers/cloudinary.js";
import { Subscribed } from "../models/subscribed.model.js";

import nodemailer from "nodemailer";
import { Gallery } from "../models/gallery.model.js";

export const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = `data:${req.file.mimetype};base64,${b64}`;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("🔴 Upload Error:", error); // ✅ this shows exact issue in terminal

    res.status(500).json({
      success: false,
      message: error.message || "Some error occurred", // ✅ send actual error message
    });
  }
};


export const addImage = async (req, res) => {
  try {
    const { title, imageUrl,  description,category } = req.body;

    if (!title || !imageUrl || !description || !category) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
 const newImage = new Gallery({ title, imageUrl,description,category });
    await newImage.save();
   
    const subscribers = await Subscribed.find({});
    const emailList = subscribers.map((sub) => sub.email);

    // Configure nodemailer
   const transporter = nodemailer.createTransport({
             host: 'smtp.zoho.com', // Or smtp.zoho.com for global
             port: 465,
             secure: true,
             auth: {
                 user: 'admin@ashwamedhfoundation.org',
                   pass: '6Eye3vpq4rti',
             },
         });

const imageMail = {
  from: "admin@ashwamedhfoundation.org",
  to: emailList, // or use bcc: emailList for privacy
  subject: `📸 New Gallery Update: ${title}`,
  html: `
    <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50; text-align: center;">🖼️ New Gallery Image Uploaded</h2>
        <h3 style="text-align: center; margin: 10px 0 20px; color: #e67e22;">"${title}"</h3>

        <img src="${imageUrl}" alt="Gallery Image" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 6px;" />

        <p style="font-size: 15px; margin-top: 20px; line-height: 1.6;">
          ${description.slice(0, 180)}...
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ashwamedhfoundation.org/gallery" 
             style="background-color: #e67e22; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            View Full Gallery
          </a>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 13px; color: #777;">You're receiving this because you subscribed to Ashwamedh Foundation updates.</p>

        <div style="margin-top: 15px;">
          <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="margin-right: 10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" alt="Facebook" />
          </a>
          <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="margin-right: 10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" width="28" alt="Instagram" />
          </a>
          <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" width="28" alt="LinkedIn" />
          </a>
        </div>

        <p style="font-size: 12px; color: #aaa; margin-top: 25px;">
          Ashwamedh Foundation | <a href="mailto:contact@ashwamedhfoundation.org" style="color: #e67e22; text-decoration: none;">Contact Us</a>
        </p>
      </div>
    </div>
  `
};


const adminMail = {
  from: "admin@ashwamedhfoundation.org",
  to: "contact@ashwamedhfoundation.org",
  subject: `🔔 New Gallery Image Uploaded by Admin`,
  html: `
    <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #e67e22;">📢 Admin Notification</h2>

        <p><strong>📌 Title:</strong> ${title}</p>
        <p><strong>📂 Category:</strong> ${category}</p>
        <p><strong>🖼️ Image URL:</strong> <a href="${imageUrl}" target="_blank">${imageUrl}</a></p>

        <p style="margin-top: 10px;"><strong>📝 Description Preview:</strong></p>
        <p>${description.slice(0, 250)}...</p>

        <div style="margin: 25px 0;">
          <a href="https://ashwamedhfoundation.org/gallery" 
             style="background-color: #e67e22; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">
            View on Website
          </a>
        </div>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 13px; color: #777;">This is an automated message from the Ashwamedh Foundation system.</p>
      </div>
    </div>
  `
};

    // Send emails
    // to subscribers
    await transporter.sendMail(adminMail);  //

    // Send email
    await transporter.sendMail(imageMail);

    return res.status(201).json({
      message: "Image posted and subscribers notified",
      success: true,
      newImage,
    });
  } catch (error) {
    console.log("Error posting image or sending mail:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};






export const getImages = async (req, res) => {
    try {
        const images = await Gallery.find();
        return res.status(200).json({
            message: "Images fetched successfully",
            success: true,
            images
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteImage = async (req, res) => {
    try {
        const imageId = req.params.id;
        const image = await Gallery.findByIdAndDelete({ _id: imageId });
        if (!image) {
            return res.status(404).json({
                message: "Image not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Image deleted successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
