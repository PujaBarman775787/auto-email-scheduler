import Message from "../models/Message.js";

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

    res.status(200).json({
      success: true,
      message: "Message scheduled successfully",
      data: newMessage
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};