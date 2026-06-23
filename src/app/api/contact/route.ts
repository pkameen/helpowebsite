import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "HELPO Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "helposoftwars@gmail.com",
      subject: `New HELPO Enquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
          <h2 style="margin-bottom: 20px;">New HELPO Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}