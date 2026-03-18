import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ senderEmail, to, subject, text }) => {
  try {
    console.log("📨 Sending email to:", to);

    const msg = {
      to: to,
      from: process.env.SENDER_EMAIL, // ✅ FIXED
      replyTo: senderEmail,
      subject: `${subject} | From: ${senderEmail}`,
      text: text,
    };

    const response = await sgMail.send(msg);

    console.log("✅ Email sent:", response[0].statusCode);

  } catch (error) {
    console.error("❌ SendGrid Error:", error.response?.body || error.message);
  }
};

