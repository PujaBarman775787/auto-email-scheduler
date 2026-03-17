import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ senderEmail, to, subject, text }) => {
  try {

    const msg = {
      to: to,

      from: {
        email: "puja.autoproject@gmail.com",
        name: `Auto Message Scheduler (${senderEmail})`
      },

      replyTo: senderEmail,

      subject: `${subject} | From: ${senderEmail}`,

      text: `
Auto Message Scheduler

Sender: ${senderEmail}

Message:
${text}
`,

      html: `
      <h2>📨 Auto Message Scheduler</h2>
      <p><strong>Sender:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${text}</p>
      <hr>
      <small>This email was scheduled using Auto Message Scheduler.</small>
      `
    };

    await sgMail.send(msg);

    console.log("📧 Email sent to:", to);

  } catch (error) {
    console.error("❌ Email send error:", error.response?.body || error.message);
  }
};

