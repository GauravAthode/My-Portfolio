import Message from "../models/Message.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created } from "../utils/response.js";
import { transporter } from "../utils/mailer.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  // 1) Save in DB (fast)
  const saved = await Message.create({ name, email, message });

  // 2) Respond immediately (fast UI)
  created(res, saved, "Message saved");

  // 3) Send email AFTER response (background)
  setImmediate(async () => {
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    } catch (err) {
      console.log("❌ Email sending failed:", err.message);
    }
  });
});
