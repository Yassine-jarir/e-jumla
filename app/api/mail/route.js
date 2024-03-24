import { sendEmail } from "@/actions/SendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, service, name, phoneNumber, comment } = await req.json();

    const response = await sendEmail({
      email,
      service,
      name,
      phoneNumber,
      comment,
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
