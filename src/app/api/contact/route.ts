import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function getServerConfig() {
  return {
    serviceId:
      process.env.EMAILJS_SERVICE_ID ??
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ??
      "",
    templateId:
      process.env.EMAILJS_TEMPLATE_ID ??
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ??
      "",
    publicKey:
      process.env.EMAILJS_PUBLIC_KEY ??
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ??
      "",
    privateKey: process.env.EMAILJS_PRIVATE_KEY ?? "",
  };
}

export async function POST(request: Request) {
  const config = getServerConfig();

  if (
    !config.serviceId ||
    !config.templateId ||
    !config.publicKey ||
    !config.privateKey
  ) {
    return NextResponse.json(
      { error: "Email service is not fully configured on the server." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  const templateParams = {
    from_name: name.trim(),
    name: name.trim(),
    reply_to: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    time: new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        accessToken: config.privateKey,
        template_params: templateParams,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        { error: text || "Failed to send email." },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true, message: text });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach email service. Please try again." },
      { status: 502 },
    );
  }
}
