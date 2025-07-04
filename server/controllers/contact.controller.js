import { Contact } from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const addContact = async (req, res) => {
    try {
        const {  firstName, lastName, email, phone, message, preferredContact } = req.body;

        // Validate input
        if (!firstName || !lastName || !email || !phone || !message || !preferredContact) {
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
        const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                message: "Invalid phone number format",
                success: false
            });
        }
      const contactExists = await Contact.findOne({ email });
      if(contactExists){
        return res.status(400).json({
            message: "Contact with this email already registered",
            success: false
        });
      }
        // Create a new volunteer object
        const contact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message,
            preferredContact

        });
await contact.save();

        // Send email to CLIENT via Zoho SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com', // Or smtp.zoho.com for global
            port: 465,
            secure: true,
            auth: {
                user: 'admin@ashwamedhfoundation.org',
                  pass: '6Eye3vpq4rti',
            },
        });

        const clientMailOptions = {
            from: 'admin@ashwamedhfoundation.org',
            to: 'contact@ashwamedhfoundation.org', // Email where you want to receive form data
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
                <p><strong>Message:</strong><br>${message}</p>
                 <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            `,
        };

        await transporter.sendMail(clientMailOptions);

        // Optional: Send thank-you message to user
        // const userMailOptions = {
        //     from: 'admin@ashwamedhfoundation.org',
        //     to: email,
        //     subject: 'Thank you for contacting us!',
        //     html: `
        //         <p>Dear ${firstName},</p>
        //         <p>Thank you for reaching out to us. We’ve received your message and will get back to you shortly.</p>
        //         <br/>
        //         <p>Warm regards,<br>Team Ashwamedh Foundation</p>
        //     `,
        // };
// const userMailOptions = {
//   from: 'admin@ashwamedhfoundation.org',
//   to: email,
//   subject: 'Thank you for contacting us!',
//   html: `
//     <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
//         <h2 style="color: #2c3e50;">Dear ${firstName},</h2>

//         <p style="font-size: 15px;">
//           Thank you for getting in touch with <strong style="color: #e67e22;">Ashwamedh Foundation</strong>.
//         </p>

//         <p style="font-size: 15px;">
//           We’ve received your message and one of our team members will respond to you as soon as possible.
//         </p>

//         <p style="font-size: 14px; color: #666;">In the meantime, feel free to connect with us on our social platforms:</p>

//         <div style="margin-top: 15px;">
//           <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="margin-right: 15px; text-decoration: none;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
//           </a>
//           <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="margin-right: 15px; text-decoration: none;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
//           </a>
//           <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank" style="text-decoration: none;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" height="32" style="display: inline-block;" />
//           </a>
//         </div>

//         <p style="margin-top: 30px; font-size: 14px; color: #555;">
//           Warm regards,<br/>
//           <strong>Team Ashwamedh Foundation</strong>
//         </p>
//       </div>
//     </div>
//   `,
// };
const userMailOptions = {
  from: 'admin@ashwamedhfoundation.org',
  to: email,
  subject: 'Thank you for contacting us!',
  html: `
    <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50;">Dear ${firstName},</h2>

        <p style="font-size: 15px;">
          Thank you for getting in touch with <strong style="color: #e67e22;">Ashwamedh Foundation</strong>.
        </p>

        <p style="font-size: 15px;">
          We’ve received your message and one of our team members will respond to you as soon as possible.
        </p>

        <p style="font-size: 14px; color: #666;">In the meantime, feel free to connect with us on our social platforms:</p>

        <div style="margin-top: 15px;">
          <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="margin-right: 15px; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="margin-right: 15px; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank" style="text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" height="32" style="display: inline-block;" />
          </a>
        </div>

        <p style="margin-top: 20px; font-size: 14px; color: #666;">
          📧 You can also reach us at 
          <a href="mailto:contact@ashwamedhfoundation.org" style="color: #e67e22; text-decoration: none;">
            contact@ashwamedhfoundation.org
          </a>
        </p>

        <p style="margin-top: 30px; font-size: 14px; color: #555;">
          Warm regards,<br/>
          <strong>Team Ashwamedh Foundation</strong>
        </p>
      </div>
    </div>
  `,
};


        await transporter.sendMail(userMailOptions);
        // Here you would typically save the volunteer to a database
        // For demonstration, we will just return the volunteer object
        return res.status(201).json({
            message: "Details Send Successfully",
            success: true,
            contact
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json({
            message: "Contacts fetched successfully",
            success: true,
            contacts
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await Contact.findByIdAndDelete({ _id: contactId });
        if (!contact) {
            return res.status(404).json({
                message: "Contact not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Contact deleted successfully",
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

