import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('API Route: Received form data:', data);
    const { email, _subject, _autoresponder, ...remainingData } = data;

    // Check for SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('API Route Error: SMTP credentials missing in environment variables.');
      return NextResponse.json(
        { success: false, message: 'SMTP credentials missing.' },
        { status: 500 }
      );
    }

    // Create a transporter using official authenticated Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Format data into a nice table for the admin
    const tableRows = Object.entries(remainingData)
      .map(([key, value]) => {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const displayValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
        return `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%; color: #666;">${label}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${displayValue}</td>
          </tr>
        `;
      })
      .join('');

    // 1. Send Email to Admin (yogagarhi@gmail.com)
    const adminMailOptions = {
      from: `"YogaGarhi Website" <${process.env.SMTP_USER}>`,
      to: 'yogagarhi@gmail.com',
      replyTo: email || 'yogagarhi@gmail.com',
      subject: `New Masterclass Registration: ${remainingData.name || 'Student'} (${remainingData.payment_id || '₹99 Paid'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #16533f; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0b3b2c; color: #f5b942; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">🎉 New Masterclass Registration</h2>
            <p style="margin: 5px 0 0; color: #d4ebe2; font-size: 14px;">Applied Yoga Anatomy & Biomechanics Masterclass</p>
          </div>
          <div style="padding: 24px; background: #ffffff;">
            <p style="margin-bottom: 20px; color: #333; font-size: 15px;">A student has completed their ₹99 registration payment:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%; color: #0b3b2c;">Student Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222; font-weight: bold;">${remainingData.name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Student Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">WhatsApp Phone</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${remainingData.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Payment ID</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #16a34a; font-family: monospace; font-weight: bold;">${remainingData.payment_id || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Amount Paid</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222; font-weight: bold;">₹99.00</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Workshop Date</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${remainingData.workshop_date || 'Upcoming Sunday at 11:00 AM – 1:00 PM IST'}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
              YogaGarhi Ashram & Yoga School • Automated Booking Notification
            </div>
          </div>
        </div>
      `,
    };

    // 2. Send "Thank You - Payment Received" Auto-responder to User (Student)
    const userMailOptions = email ? {
      from: `"YogaGarhi" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: 'yogagarhi@gmail.com',
      subject: 'Confirmation & Live Zoom Pass: Applied Yoga Anatomy Masterclass',
      text: _autoresponder || `Namaste,

Thank you for registering for the Applied Functional Yoga Anatomy & Biomechanics Masterclass!

We have successfully received your ₹99 registration payment.

=== YOUR LIVE ZOOM CLASS PASS ===
• Mode: Live on Zoom
• Meeting ID: 890 4962 6217
• Passcode: 260670
• Direct Zoom Link: https://us06web.zoom.us/j/89049626217?pwd=582v4nKvrQ54BOTHleb1H1c7f0sX35.1
• Time: Sunday at 11:00 AM – 1:00 PM IST (2-Hour Live Workshop)

=== VIP WHATSAPP GROUP ===
Join our VIP WhatsApp group for live reminders:
https://api.whatsapp.com/send?phone=917895350563&text=Hi+YogaGarhi,+I+have+paid+Rs.99+for+the+Applied+Anatomy+Masterclass!

With warm regards,
Acharya Sachin Kotiyal & The YogaGarhi Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #16533f; border-radius: 14px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
          <!-- Header Banner -->
          <div style="background-color: #0b3b2c; color: white; padding: 28px 20px; text-align: center;">
            <p style="margin: 0 0 6px; color: #f5b942; font-size: 13px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase;">YOGAGARHI ASHRAM &bull; RISHIKESH</p>
            <h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: bold;">Thank You! Your Payment is Received 🎉</h1>
            <p style="margin: 8px 0 0; color: #d4ebe2; font-size: 14px;">Your seat is successfully confirmed for the Masterclass</p>
          </div>

          <!-- Content Body -->
          <div style="padding: 28px 24px; color: #2d3748; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Namaste <strong>${remainingData.name || 'Friend'}</strong>,</p>
            
            <p style="font-size: 14px; color: #4a5568;">
              We have successfully received your registration payment for the <strong>Applied Functional Yoga Anatomy & Biomechanics Masterclass</strong> (2-Hour Live Intensive) led by <strong>Acharya Sachin Kotiyal</strong>.
            </p>

            <!-- Zoom Access Pass Box -->
            <div style="background-color: #f0fdf4; border: 2px dashed #22c55e; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <div style="text-align: center; margin-bottom: 15px;">
                <span style="background-color: #166534; color: #ffffff; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">Official Live Class Pass</span>
                <h3 style="margin: 8px 0 0; color: #14532d; font-size: 18px;">Live Zoom Meeting Credentials</h3>
              </div>
              <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #4b5563; width: 40%;"><strong>Meeting ID:</strong></td>
                  <td style="padding: 6px 0; color: #111827; font-weight: bold; font-family: monospace; font-size: 16px;">890 4962 6217</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Passcode:</strong></td>
                  <td style="padding: 6px 0; color: #111827; font-weight: bold; font-family: monospace; font-size: 16px;">260670</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Session Time:</strong></td>
                  <td style="padding: 6px 0; color: #111827; font-weight: bold;">Sunday at 11:00 AM – 1:00 PM IST (2 Hours)</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Payment Status:</strong></td>
                  <td style="padding: 6px 0; color: #16a34a; font-weight: bold;">₹99.00 Paid & Verified ✓</td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 15px;">
                <a href="https://us06web.zoom.us/j/89049626217?pwd=582v4nKvrQ54BOTHleb1H1c7f0sX35.1" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px; display: inline-block;">
                  🔗 Click Here to Join Zoom Meeting
                </a>
              </div>
            </div>

            <!-- WhatsApp CTA Button -->
            <div style="text-align: center; margin: 28px 0;">
              <a href="https://api.whatsapp.com/send?phone=917895350563&text=Hi+YogaGarhi,+I+have+paid+Rs.99+for+the+Applied+Anatomy+Masterclass!" style="background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 10px rgba(37,211,102,0.3);">
                📲 Join VIP WhatsApp Teachers Group
              </a>
              <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Click above to receive class reminders and anatomy study resources on WhatsApp.</p>
            </div>

            <!-- Preparation Note -->
            <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #92400e; margin-bottom: 24px;">
              <strong>Important:</strong> Please join the Zoom room 5 minutes before 11:00 AM IST with your yoga mat and notebook ready.
            </div>

            <!-- Signoff -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; font-size: 14px; color: #4b5563;">
              <p style="margin: 0;">With warm regards & blessings,</p>
              <p style="margin: 4px 0 0; font-weight: bold; color: #0b3b2c; font-size: 16px;">Acharya Sachin Kotiyal & The YogaGarhi Team</p>
              <p style="margin: 2px 0 0; font-size: 12px; color: #6b7280;">YogaGarhi Ashram &bull; Authentic Yoga & Biomechanics</p>
            </div>
          </div>
        </div>
      `,
    } : null;

    // Send both emails
    console.log('API Route: Attempting to send admin email...');
    await transporter.sendMail(adminMailOptions);
    console.log('API Route: Admin email sent successfully.');

    if (userMailOptions) {
      console.log('API Route: Attempting to send user Thank You email to:', email);
      await transporter.sendMail(userMailOptions);
      console.log('API Route: User Thank You email sent successfully.');
    }

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails', error: error.message },
      { status: 500 }
    );
  }
}
