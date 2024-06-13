import React from "react";
import InquiryTemplate from "@/emails/inquiry-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, firstName, lastName, subject, msg } = await req.json();

  try {
    return NextResponse.json({
      success: true,
      message: "successful post to /send",
    });
    // const { data, error } = await resend.emails.send({
    //   from: "MJP Web Solutions <mjp@mattpandolfo.com>",
    //   to: email,
    //   subject: `Website Inquiry (${subject})`,
    //   react: InquiryTemplate({ firstName, lastName, email, msg, subject }) as React.ReactElement,
    // });

    // if (error) {
    //   console.error('Resend API error:', error);
    //   return NextResponse.json({ error }, { status: 500 });
    // }

    // return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
