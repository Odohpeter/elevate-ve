import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, phone, topic, message } = req.body;

    if (!name || !email || !topic || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
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
    `;

    await transporter.sendMail({
      from: `"Pejul Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New inquiry: ${topic} — ${name}`,
      html,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: "Failed to send — please try again." });
  }
}
