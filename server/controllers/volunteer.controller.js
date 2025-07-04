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
        // const userMail = {
        //     from: 'admin@ashwamedhfoundation.org',
        //     to: email,
        //     subject: 'Thank You for Volunteering!',
        //     html: `
        //         <h2>Hi ${name},</h2>
        //         <p>Thank you for applying as a volunteer at our NGO.</p>
        //         <p>We have received your details and will reach out to you shortly.</p>
        //         <br/>
        //         <p>Regards,<br/>Team Ashwamedh Foundation</p>
        //     `
        // };
// const userMail = {
//   from: 'admin@ashwamedhfoundation.org',
//   to: email,
//   subject: 'Thank You for Volunteering!',
//   html: `
//     <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
//         <h2 style="color: #2C3E50;">Hi ${name},</h2>

//         <p style="font-size: 15px;">
//           Thank you for applying as a volunteer at <strong style="color: #e67e22;">Ashwamedh Foundation</strong>.
//         </p>

//         <p style="font-size: 15px;">
//           We’ve successfully received your details and our team will be reaching out to you shortly with the next steps.
//         </p>

//         <p style="font-size: 15px;">
//           Your willingness to support our cause is deeply appreciated. Together, we can create meaningful change.
//         </p>

//         <hr style="margin: 25px 0; border: none; border-top: 1px solid #ddd;" />

//         <p style="font-weight: bold; color: #34495e;">Stay connected with us:</p>

//         <div style="margin-top: 15px;">
//           <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 15px;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
//           </a>
//           <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 15px;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
//           </a>
//           <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank" style="text-decoration: none;">
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" height="32" style="display: inline-block;" />
//           </a>
//         </div>

//         <p style="font-size: 13px; color: #888; margin-top: 25px;">
//           We regularly post updates, volunteer stories, and events – don’t miss out!
//         </p>

//         <p style="margin-top: 30px; font-size: 14px; color: #555;">
//           Warm regards,<br/>
//           <strong>Team Ashwamedh Foundation</strong>
//         </p>
//       </div>
//     </div>
//   `
// };
const userMail = {
  from: 'admin@ashwamedhfoundation.org',
  to: email,
  subject: 'Thank You for Volunteering!',
  html: `
    <div style="background-color: #f9f9f9; padding: 30px; font-family: Arial, sans-serif; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #2C3E50;">Hi ${name},</h2>

        <p style="font-size: 15px;">
          Thank you for applying as a volunteer at <strong style="color: #e67e22;">Ashwamedh Foundation</strong>.
        </p>

        <p style="font-size: 15px;">
          We’ve successfully received your details and our team will be reaching out to you shortly with the next steps.
        </p>

        <p style="font-size: 15px;">
          Your willingness to support our cause is deeply appreciated. Together, we can create meaningful change.
        </p>

        <p style="font-size: 14px; color: #555; margin-top: 20px;">
           📧 If you have any questions or ideas you'd like to share, feel free to reach out to us at
          <a href="mailto:contact@ashwamedhfoundation.org" style="color: #e67e22; text-decoration: none;">
            contact@ashwamedhfoundation.org
          </a>.
        </p>

        <hr style="margin: 25px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-weight: bold; color: #34495e;">Stay connected with us:</p>

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

        <p style="font-size: 13px; color: #888; margin-top: 25px;">
          We regularly post updates, volunteer stories, and events – don’t miss out!
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
                 <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
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

