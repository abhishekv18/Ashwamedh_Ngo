import cron from 'node-cron';
import nodemailer from 'nodemailer';
import { Subscribed } from '../models/subscribed.model.js';


const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
     user: 'admin@ashwamedhfoundation.org',
                pass: '6Eye3vpq4rti',
  },
});

// Every 1st of the month at 10 AM
cron.schedule('0 10 1 * *', async () => {
  console.log("📩 Sending monthly donation emails...");

  try {
    const subscribers = await Subscribed.find();

    for (const sub of subscribers) {

const mail = {
  from: 'admin@ashwamedhfoundation.org',
  to: sub.email,
  subject: 'Support Our Cause – Monthly Donation Reminder',
  html: `
    <div style="background-color: #f4f4f4; padding: 25px; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px 30px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
        <h3 style="color: #2c3e50;">Hello ${sub.name},</h3>

        <p style="font-size: 15px; color: #333;">
          Your continued support empowers us to serve more lives and expand our impact.
        </p>

        <p style="font-size: 15px; color: #333;">If you’d like to contribute this month, click below:</p>

        <p style="margin: 20px 0;">
          <a href=" www.ashwamedhfoundation.org" 
             style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">
            Donate Now
          </a>
        </p>

        <p style="font-size: 14px; color: #777; margin-top: 25px;">
          Even a small monthly donation can create lasting change.
        </p>

        <p style="margin-top: 30px; font-size: 14px; color: #555;">
          Thank you for being part of our journey.<br/>
          <strong>Team Ashwamedh Foundation</strong>
        </p>

        <p style="margin-top: 20px; font-size: 14px; color: #555;">
          📧 Reach us at: 
          <a href="mailto:contact@ashwamedhfoundation.org" style="color: #e67e22; text-decoration: none;">
            contact@ashwamedhfoundation.org
          </a>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-weight: bold; color: #34495e;">Stay connected with us:</p>

        <div style="margin-top: 15px;">
          <a href="https://facebook.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 12px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://instagram.com/ashwamedhfoundation" target="_blank" style="text-decoration: none; margin-right: 12px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" style="display: inline-block;" />
          </a>
          <a href="https://linkedin.com/company/ashwamedhfoundation" target="_blank" style="text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" height="32" style="display: inline-block;" />
          </a>
        </div>
      </div>
    </div>
  `,
};


      await transporter.sendMail(mail);
      console.log(`📧 Sent to ${sub.email}`);
    }

  } catch (err) {
    console.error("❌ Error sending donation emails:", err);
  }
});




