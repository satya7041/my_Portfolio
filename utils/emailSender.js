// utils/emailSender.js

import nodemailer from 'nodemailer';

// Function to send email using Nodemailer
export async function sendEmail(fromEmail, subject, message) {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Replace with your email address
            pass: process.env.GMAIL_PASS            // Replace with your email password

        },
    });

    // Email content
    const mailOptions = {
        from: fromEmail,
        to: process.env.GMAIL_USER, // Replace with your email address
        subject: subject || 'No subject',
        text: message || 'No message content',
    };

    // Send email
    await transporter.sendMail(mailOptions);
}
