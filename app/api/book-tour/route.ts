
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            phone,
            country,
            travelDate,
            duration,
            numTravellers,
            interest,
            ageGroup,
            accommodation,
            message
        } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_BOOKING_USER,
                pass: process.env.GMAIL_BOOKING_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'oasistours.booking@gmail.com', // Target email for bookings
            replyTo: email, // Set Reply-To to the customer's email
            subject: `New Booking Request from ${name} - ${interest}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                  <style>
                    .container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; }
                    .header { background-color: #2b1c12; color: white; padding: 30px 20px; text-align: center; }
                    .section-title { color: #d2a45e; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #d2a45e; padding-bottom: 10px; margin: 30px 0 20px; font-weight: bold; }
                    .content { padding: 0 30px 30px 30px; background-color: #fff; border: 1px solid #eee; }
                    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #888; display: block; margin-bottom: 5px; font-size: 11px; text-transform: uppercase; }
                    .value { font-size: 15px; font-weight: 500; }
                    .message-box { background: #f9f9f9; padding: 20px; border-radius: 4px; font-style: italic; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1 style="margin:0; font-family: 'Times New Roman', serif; font-weight: normal;">New Booking Request</h1>
                      <div style="margin-top: 10px; opacity: 0.8;">The Last Shangri-La Awaits</div>
                    </div>
                    
                    <div class="content">
                    
                        <div class="section-title">Traveller Details</div>
                        <div class="grid">
                            <div class="field">
                                <span class="label">Full Name</span>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <span class="label">Country</span>
                                <div class="value">${country}</div>
                            </div>
                        </div>
                        <div class="grid">
                             <div class="field">
                                <span class="label">Email</span>
                                <div class="value"><a href="mailto:${email}" style="color: #d2a45e; text-decoration: none;">${email}</a></div>
                            </div>
                            <div class="field">
                                <span class="label">Phone</span>
                                <div class="value">${phone}</div>
                            </div>
                        </div>

                        <div class="section-title">Trip Information</div>
                         <div class="grid">
                            <div class="field">
                                <span class="label">Travel Date</span>
                                <div class="value">${travelDate}</div>
                            </div>
                             <div class="field">
                                <span class="label">Duration</span>
                                <div class="value">${duration} Days</div>
                            </div>
                        </div>
                        <div class="field">
                             <span class="label">Group Size</span>
                             <div class="value">${numTravellers} Travellers</div>
                        </div>

                        <div class="section-title">Preferences</div>
                        <div class="grid">
                             <div class="field">
                                <span class="label">Interest</span>
                                <div class="value">${interest}</div>
                            </div>
                            <div class="field">
                                <span class="label">Accommodation</span>
                                <div class="value" style="text-transform: capitalize;">${accommodation}</div>
                            </div>
                        </div>
                         <div class="field">
                             <span class="label">Age Group</span>
                             <div class="value" style="text-transform: capitalize;">${ageGroup}</div>
                        </div>

                        <div class="section-title">Additional Requests</div>
                        <div class="message-box">
                            ${message || "No specific comments provided."}
                        </div>

                    </div>
                    <div class="footer">
                      Sent from Hidden Kingdom Tour Website<br>
                      OASIS Tours & Treks
                    </div>
                  </div>
                </body>
                </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Booking request sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending booking email:', error);
        return NextResponse.json({
            message: 'Failed to send booking request',
            error: error.message || 'Unknown error'
        }, { status: 500 });
    }
}
