import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail", // ✅ correct
  auth: {
    user,
    pass,
  },
});
