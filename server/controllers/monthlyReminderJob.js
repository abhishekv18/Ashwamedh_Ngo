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
          <h3>Hello ${sub.name},</h3>
          <p>Your support matters. Every contribution helps us reach more lives.</p>
          <p><a href="https://yourngo.org/donate" style="background: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Donate Now</a></p>
          <br/>
          <p>Thank you,<br/>Team Ashwamedh Foundation</p>
        `,
      };

      await transporter.sendMail(mail);
      console.log(`📧 Sent to ${sub.email}`);
    }

  } catch (err) {
    console.error("❌ Error sending donation emails:", err);
  }
});
