
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, interest, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'oasistours.info@gmail.com',
            replyTo: email, // Set Reply-To to the customer's email
            subject: `New Tour Inquiry from ${name} - ${interest}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; }
            .header { background-color: #2b1c12; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px 20px; background-color: #fff; border: 1px solid #eee; }
            .field { margin-bottom: 15px; border-bottom: 1px solid #f5f5f5; padding-bottom: 15px; }
            .label { font-weight: bold; color: #666; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
            .value { font-size: 16px; font-weight: 500; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0; font-family: 'Times New Roman', serif;">New Tour Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}" style="color: #d2a45e; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Phone</span>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <span class="label">Interested In</span>
                <div class="value">${interest}</div>
              </div>
              <div>
                <span class="label">Message</span>
                <div class="value" style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">${message}</div>
              </div>
            </div>
            <div class="footer">
              Sent from Hidden Kingdom Tour Website
            </div>
          </div>
        </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            message: 'Failed to send email',
            error: error.message || 'Unknown error'
        }, { status: 500 });
    }
}
