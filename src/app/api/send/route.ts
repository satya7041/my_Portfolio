
// import nodemailer from 'nodemailer';
// import { NextRequest, NextResponse } from 'next/server';



// export async function POST(req: NextRequest) {
//     const { email, subject, message } = await req.json();

//     try {
//         // Input validation to ensure no fields are null or empty
//         if (!email || !subject || !message) {
//             return NextResponse.json({ error: 'Email, subject, and message are required' }, { status: 400 });
//         }

//         // Create a Nodemailer transporter
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.GMAIL_USER,
//                 pass: process.env.GMAIL_PASS,
//             },
//         });

//         // Send mail with defined transport object
//         let info = await transporter.sendMail({
//             from:'stsriva@gmail.com',
//             to:email,
//             subject: subject,
//             text: message,
//         });

//         console.log('Message sent: %s', info.messageId);

//         return NextResponse.json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//     }
// }

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  try {
    // Input validation to ensure no fields are null or empty
    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Email, subject, and message are required' }, { status: 400 });
    }

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // Sender's email (user input)
      to: process.env.GMAIL_USER, // Recipient's email (your email)
      subject: subject,
      text: message,
    });
console.log(email, process.env.GMAIL_USER, subject);

    console.log('Email sent: %s', info.messageId);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
