import React from "react";
import InquiryTemplate from "@/emails/inquiry-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, firstName, lastName, subject, msg } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "MJP Web Solutions <mjp@mattpandolfo.com>",
      to: email,
      subject: `Website Inquiry (${subject})`,
      react: InquiryTemplate({ firstName, lastName, email, msg, subject }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
