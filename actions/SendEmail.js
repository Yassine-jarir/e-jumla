"use server";
import { NextResponse } from "next/server";
import { emailTemplate } from "@/utils/email-template";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

export const sendEmail = async ({
  email,
  name,
  phoneNumber,
  service,
  comment,
}) => {
  try {
    await transporter.sendMail({
      from: `"JUMLA MAROC"`,
      to: process.env.NODE_MAILER_USER,
      subject: "Email From E-Jumla Maroc Website",
      html: emailTemplate({ email, name, phoneNumber, service, comment }),
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log("Error to send email:", e);
    return NextResponse.json({ message: e }, { status: 500 });
  }
};
