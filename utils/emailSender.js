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
        // from: fromEmail,
        from: process.env.GMAIL_USER, // Your Gmail account

        to: process.env.GMAIL_USER, // Replace with your email address
        subject: subject || 'No subject',
        text: message || 'No message content',
        replyTo: fromEmail, // Set the user's email for replies

    };

     // Send email
     try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}
