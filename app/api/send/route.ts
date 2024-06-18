import React from "react";
import InquiryTemplate from "@/emails/inquiry-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.log("no resend api key");

    return NextResponse.json({ error: "no resend api key" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, firstName, lastName, subject, msg } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "MJP Web Solutions <mjp@mattpandolfo.com>",
      to: email,
      subject: `Website Inquiry (${subject})`,
      react: InquiryTemplate({
        firstName,
        lastName,
        email,
        msg,
        subject,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
