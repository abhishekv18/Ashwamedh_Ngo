import { Volunteer } from "../models/volunteer.model.js";
import nodemailer from "nodemailer";
export const addVolunteer = async (req, res) => {
    try {
        const {    name,
    age,
    dateOfBirth,
    gender,
    email,
    phone,
    pinCode,
    occupation} = req.body;

        // Validate input
        if (!name|| !dateOfBirth || !email || !phone || !pinCode || !occupation || !age || !gender) {
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
      const volunteerExists = await Volunteer.findOne({ email });
      if(volunteerExists){
        return res.status(400).json({
            message: "Volunteer with this email already registered",
            success: false
        });
      }
        // Create a new volunteer object
        const volunteer = new Volunteer({
            name,
            dateOfBirth,
            age,
            email,
            phone,
            pinCode,
            occupation,
            gender

        });
await volunteer.save();



        // Setup Nodemailer with Zoho
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com', // or smtp.zoho.com if outside India
            port: 465,
            secure: true,
            auth: {
                user: 'admin@ashwamedhfoundation.org',
                pass: '6Eye3vpq4rti',
            }
        });

        // Thank-you Email to Volunteer
        const userMail = {
            from: 'admin@ashwamedhfoundation.org',
            to: email,
            subject: 'Thank You for Volunteering!',
            html: `
                <h2>Hi ${name},</h2>
                <p>Thank you for applying as a volunteer at our NGO.</p>
                <p>We have received your details and will reach out to you shortly.</p>
                <br/>
                <p>Regards,<br/>Team Ashwamedh Foundation</p>
            `
        };

        await transporter.sendMail(userMail);

        // Optional: Send alert to admin
        const adminMail = {
            from: 'admin@ashwamedhfoundation.org',
            to: 'contact@ashwamedhfoundation.org',
            subject: 'New Volunteer Application',
            html: `
                <h3>New Volunteer Registered</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>City:</strong> ${pinCode}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Occupation:</strong> ${occupation}</p>
            `
        };

        await transporter.sendMail(adminMail);




        // Here you would typically save the volunteer to a database
        // For demonstration, we will just return the volunteer object
        return res.status(201).json({
            message: "Registered Successfully",
            success: true,
            volunteer
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        return res.status(200).json({
            message: "Volunteers fetched successfully",
            success: true,
            volunteers
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteVolunteer = async (req, res) => {
    try {
        const volunteerId = req.params.id;
        const volunteer = await Volunteer.findByIdAndDelete({ _id: volunteerId });
        if (!volunteer) {
            return res.status(404).json({
                message: "Volunteer not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Volunteer deleted successfully",
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

