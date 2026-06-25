import { createAPIFileRoute } from "@tanstack/react-start/api";
import nodemailer from "nodemailer";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    try {
      const body = await request.json() as Record<string, string>;
      const { name, email, company, phone, topic, message } = body;

      if (!name || !email || !topic || !message) {
        return new Response(
          JSON.stringify({ success: false, message: "Missing required fields" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? "465"),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Pejul Website" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        replyTo: email,
        subject: `New inquiry: ${topic} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1a1a1a;border-bottom:2px solid #e5e5e5;padding-bottom:12px;">New Inquiry — Pejul Website</h2>
            <table style="width:100%;border-collapse:collapse;margin-top:16px;">
              <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Company</strong></td><td style="padding:8px 0;">${company || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Phone</strong></td><td style="padding:8px 0;">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;"><strong>Topic</strong></td><td style="padding:8px 0;">${topic}</td></tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:8px;">
              <strong style="color:#1a1a1a;">Message</strong>
              <p style="margin-top:8px;color:#333;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        `,
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return new Response(
        JSON.stringify({ success: false, message: "Failed to send — please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
});
