import Message from "../models/Message.js";
import { sendEmail } from "../utils/sendEmail.js";

export const scheduleMessage = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const { senderEmail, receiverEmail, subject, message, sendAt } = req.body;

    if (!senderEmail || !receiverEmail || !subject || !message || !sendAt) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newMessage = await Message.create({
      senderEmail,
      receiverEmail,
      subject,
      message,
      sendAt,
      status: "pending"
    });

    // 🔥 SEND EMAIL HERE
    await sendEmail({
      senderEmail,
      to: receiverEmail,
      subject,
      text: message
    });

    res.status(200).json({
      success: true,
      message: "Message scheduled & email sent",
      data: newMessage
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};