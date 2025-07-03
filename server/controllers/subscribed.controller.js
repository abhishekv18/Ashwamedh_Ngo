import { Subscribed } from "../models/subscribed.model.js";
import nodemailer from "nodemailer";
export const addSubscribed = async (req, res) => {
    try {
        const {    name, email } = req.body;

        // Validate input
        if (!name || !email ) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format",
                success: false
            });
        }
      
      const subscribedExists = await Subscribed.findOne({ email });
      if(subscribedExists){
        return res.status(400).json({
            message: "Subscriber with this email already registered",
            success: false
        });
      }
        // Create a new volunteer object
        const subscribe = new Subscribed({
            name,email
           
        });
await subscribe.save();



        // Setup transporter (Zoho)
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: 'admin@ashwamedhfoundation.org',
                pass: '6Eye3vpq4rti',
            },
        });

        // Send confirmation to subscriber
        // const userMail = {
        //     from: 'admin@ashwamedhfoundation.org',
        //     to: email,
        //     subject: 'Thank You for Subscribing!',
        //     html: `
        //         <h2>Hello ${name},</h2>
        //         <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
        //         <p>We’re grateful for your support. You'll now receive regular updates from our NGO.</p>
        //         <br/>
        //         <p>Warm regards,<br/>Team Ashwamedh Foundation</p>
        //     `,
        // };
const userMail = {
  from: 'admin@ashwamedhfoundation.org',
  to: email,
  subject: 'Thank You for Subscribing!',
  html: `
    <div style="background-color: #f4f4f4; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #fff; padding: 25px 30px; border-radius: 10px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50; margin-bottom: 10px;">Hello ${name},</h2>

        <p style="font-size: 15px;">Thank you for subscribing to <strong style="color: #e67e22;">Ashwamedh Foundation</strong>!</p>

        <div style="background-color: #f0f9f5; border-left: 4px solid #27ae60; padding: 12px 16px; margin: 18px 0; border-radius: 6px; font-size: 14px;">
          You've successfully subscribed with: <strong>${email}</strong>
        </div>

        <p style="font-size: 15px;">We’re grateful to have you with us. You’ll now start receiving updates about our initiatives, volunteer opportunities, and inspiring impact stories straight to your inbox.</p>

        <p style="margin-top: 25px; font-weight: bold;">Stay connected:</p>

        <div style="margin-top: 15px;">
          <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 15px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 15px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank" style="text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" height="32" style="display: inline-block;" />
          </a>
        </div>

        <p style="font-size: 13px; color: #777; margin-top: 20px;">
          We promise not to spam. You’ll only hear from us when there’s something meaningful to share.
        </p>

        <p style="margin-top: 30px; font-size: 14px; color: #555;">
          Warm regards,<br/>
          <strong>Team Ashwamedh Foundation</strong>
        </p>
      </div>
    </div>
  `
};



        await transporter.sendMail(userMail);

        // Send alert to admin
        const adminMail = {
            from: 'admin@ashwamedhfoundation.org',
            to: 'contact@ashwamedhfoundation.org', // Admin email address
            subject: 'New Subscriber Alert',
            html: `
                <h3>New Subscriber!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            `,
        };

        await transporter.sendMail(adminMail);

        // Here you would typically save the volunteer to a database
        // For demonstration, we will just return the volunteer object
        return res.status(201).json({
            message: "Subscribed Successfully",
            success: true,
            subscribe
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscribed.find();
        return res.status(200).json({
            message: "Subcribers fetched successfully",
            success: true,
            subscribers
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteSubscriber = async (req, res) => {
    try {
        const subscribeId = req.params.id;
        const subscribe = await Subscribed.findByIdAndDelete({ _id: subscribeId });
        if (!subscribe) {
            return res.status(404).json({
                message: "Subscriber not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Subscriber deleted successfully",
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

