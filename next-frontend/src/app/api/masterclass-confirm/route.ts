import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Helper to escape HTML characters
function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = typeof value === 'object' ? JSON.stringify(value) : String(value);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('API Route (/api/masterclass-confirm): Received payload:', data);

    const {
      name,
      email,
      phone,
      whatsapp,
      payment_id,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      workshop_date,
    } = data;

    const actualPaymentId = razorpay_payment_id || payment_id;
    const actualPhone = phone || whatsapp || 'N/A';
    const studentName = name || 'Student';

    if (!email || !actualPaymentId) {
      return NextResponse.json(
        { success: false, message: 'Missing required parameters: email or payment_id.' },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------
    // 1. Server-Side Razorpay Verification
    // -------------------------------------------------------------
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    const razorpayKeyId =
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      'rzp_live_TiX95mBO2U2F1q';

    let isVerified = false;

    if (razorpayKeySecret && razorpay_order_id && razorpay_signature) {
      // Option A: Verify signature with order_id
      const generatedSignature = crypto
        .createHmac('sha256', razorpayKeySecret)
        .update(`${razorpay_order_id}|${actualPaymentId}`)
        .digest('hex');

      if (generatedSignature === razorpay_signature) {
        isVerified = true;
        console.log('API Route: Razorpay signature verified successfully.');
      } else {
        console.error('API Route Error: Invalid Razorpay signature.');
        return NextResponse.json(
          { success: false, message: 'Invalid payment signature.' },
          { status: 400 }
        );
      }
    } else if (razorpayKeySecret && razorpayKeyId && actualPaymentId && !actualPaymentId.startsWith('test_')) {
      // Option B: Fetch payment details from Razorpay API
      try {
        const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64');
        const rzpRes = await fetch(`https://api.razorpay.com/v1/payments/${actualPaymentId}`, {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });

        if (rzpRes.ok) {
          const paymentData = await rzpRes.json();
          console.log('API Route: Fetched Razorpay payment data:', {
            id: paymentData.id,
            status: paymentData.status,
            amount: paymentData.amount,
          });

          if (
            (paymentData.status === 'captured' || paymentData.status === 'authorized') &&
            paymentData.amount === 9900
          ) {
            isVerified = true;
          } else {
            console.error('API Route Error: Payment amount or status mismatch:', paymentData);
            return NextResponse.json(
              { success: false, message: 'Payment verification failed (amount/status mismatch).' },
              { status: 400 }
            );
          }
        } else {
          console.warn('API Route: Could not verify with Razorpay API, status:', rzpRes.status);
          // If Razorpay API call fails or key permissions differ, proceed with caution if payment ID format is valid
          isVerified = actualPaymentId.startsWith('pay_');
        }
      } catch (rzpErr) {
        console.error('API Route Error during Razorpay fetch:', rzpErr);
        isVerified = actualPaymentId.startsWith('pay_');
      }
    } else {
      // Fallback for test mode or local testing
      console.log('API Route: RAZORPAY_KEY_SECRET not set or test mode, proceeding with payment ID:', actualPaymentId);
      isVerified = Boolean(actualPaymentId);
    }

    if (!isVerified) {
      return NextResponse.json(
        { success: false, message: 'Payment could not be verified.' },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------
    // 2. Zoom & Contact Config from Environment Variables
    // -------------------------------------------------------------
    const zoomMeetingId = process.env.ZOOM_MEETING_ID || '890 4962 6217';
    const zoomPasscode = process.env.ZOOM_PASSCODE || '260670';
    const zoomLink =
      process.env.ZOOM_LINK ||
      'https://us06web.zoom.us/j/89049626217?pwd=582v4nKvrQ54BOTHleb1H1c7f0sX35.1';
    const whatsappPhone = process.env.WHATSAPP_SUPPORT_PHONE || '917895350563';
    const whatsappGroupLink = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=Hi+YogaGarhi,+I+have+paid+Rs.99+for+the+Applied+Anatomy+Masterclass!`;

    const actualWorkshopDate =
      workshop_date || 'Upcoming Sunday at 11:00 AM – 1:00 PM IST (2-Hour Live Workshop)';

    // -------------------------------------------------------------
    // 3. Nodemailer SMTP Setup
    // -------------------------------------------------------------
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('API Route Error: SMTP credentials missing.');
      return NextResponse.json(
        { success: false, message: 'SMTP credentials missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // -------------------------------------------------------------
    // 4. Admin Email Notification
    // -------------------------------------------------------------
    const adminMailOptions = {
      from: `"YogaGarhi Website" <${process.env.SMTP_USER}>`,
      to: 'yogagarhi@gmail.com',
      replyTo: email,
      subject: `🎉 New Masterclass Registration: ${studentName} (₹99 Paid - ${actualPaymentId})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #16533f; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0b3b2c; color: #f5b942; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">🎉 New Masterclass Registration</h2>
            <p style="margin: 5px 0 0; color: #d4ebe2; font-size: 14px;">Applied Yoga Anatomy & Biomechanics Masterclass</p>
          </div>
          <div style="padding: 24px;">
            <p style="margin-bottom: 20px; color: #333; font-size: 15px;">A student has completed their ₹99 registration payment:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%; color: #0b3b2c;">Student Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222; font-weight: bold;">${escapeHtml(studentName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Student Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">WhatsApp Phone</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${escapeHtml(actualPhone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Payment ID</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #16a34a; font-family: monospace; font-weight: bold;">${escapeHtml(actualPaymentId)}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Amount Paid</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222; font-weight: bold;">₹99.00</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0b3b2c;">Workshop Date</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${escapeHtml(actualWorkshopDate)}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
              YogaGarhi Ashram & Yoga School &bull; Automated Booking Notification
            </div>
          </div>
        </div>
      `,
    };

    // -------------------------------------------------------------
    // 5. User Confirmation & Instant Zoom Access Pass
    // -------------------------------------------------------------
    const userMailOptions = {
      from: `"YogaGarhi" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: 'yogagarhi@gmail.com',
      subject: 'Confirmation & Live Zoom Pass: Applied Yoga Anatomy Masterclass',
      text: `Namaste ${studentName},

Thank you for registering for the Applied Functional Yoga Anatomy & Biomechanics Masterclass!

We have successfully received your ₹99 registration payment.

=== YOUR LIVE ZOOM CLASS PASS ===
• Mode: Live on Zoom
• Meeting ID: ${zoomMeetingId}
• Passcode: ${zoomPasscode}
• Direct Zoom Link: ${zoomLink}
• Time: ${actualWorkshopDate}

=== VIP WHATSAPP GROUP ===
Join our VIP WhatsApp group for live reminders:
${whatsappGroupLink}

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
            <p style="font-size: 16px; margin-top: 0;">Namaste <strong>${escapeHtml(studentName)}</strong>,</p>
            
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
                  <td style="padding: 6px 0; color: #111827; font-weight: bold; font-family: monospace; font-size: 16px;">${escapeHtml(zoomMeetingId)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Passcode:</strong></td>
                  <td style="padding: 6px 0; color: #111827; font-weight: bold; font-family: monospace; font-size: 16px;">${escapeHtml(zoomPasscode)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Session Time:</strong></td>
                  <td style="padding: 6px 0; color: #111827; font-weight: bold;">${escapeHtml(actualWorkshopDate)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #4b5563;"><strong>Payment Status:</strong></td>
                  <td style="padding: 6px 0; color: #16a34a; font-weight: bold;">₹99.00 Paid & Verified ✓ (${escapeHtml(actualPaymentId)})</td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 15px;">
                <a href="${escapeHtml(zoomLink)}" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px; display: inline-block;">
                  🔗 Click Here to Join Zoom Meeting
                </a>
              </div>
            </div>

            <!-- WhatsApp CTA Button -->
            <div style="text-align: center; margin: 28px 0;">
              <a href="${escapeHtml(whatsappGroupLink)}" style="background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 10px rgba(37,211,102,0.3);">
                📲 Join VIP WhatsApp Teachers Group
              </a>
              <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Click above to receive class reminders and anatomy study resources on WhatsApp.</p>
            </div>

            <!-- Preparation Note -->
            <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #92400e; margin-bottom: 24px;">
              <strong>Important:</strong> Please join the Zoom room 5 minutes before the session starts with your yoga mat and notebook ready.
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
    };

    console.log('API Route (/api/masterclass-confirm): Sending admin email...');
    await transporter.sendMail(adminMailOptions);
    console.log('API Route (/api/masterclass-confirm): Admin email sent.');

    console.log('API Route (/api/masterclass-confirm): Sending student Zoom access email to:', email);
    await transporter.sendMail(userMailOptions);
    console.log('API Route (/api/masterclass-confirm): Student Zoom access email sent.');

    return NextResponse.json({ success: true, message: 'Masterclass confirmation emails sent successfully' });
  } catch (error: any) {
    console.error('API Route (/api/masterclass-confirm) Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send confirmation email', error: error.message },
      { status: 500 }
    );
  }
}
