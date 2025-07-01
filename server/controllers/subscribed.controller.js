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
        const userMail = {
            from: 'admin@ashwamedhfoundation.org',
            to: email,
            subject: 'Thank You for Subscribing!',
            html: `
                <h2>Hello ${name},</h2>
                <p>You've successfully subscribed to our newsletter using: <strong>${email}</strong></p>
                <p>We’re grateful for your support. You'll now receive regular updates from our NGO.</p>
                <br/>
                <p>Warm regards,<br/>Team Ashwamedh Foundation</p>
            `,
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

