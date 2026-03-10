import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FROM_EMAIL = "contact@adzzat.com";
const CC_EMAILS = [
  "nabeel@adzzat.com",
  "aryanhonawar@adzzat.com",
  "eshu@adzzat.com",
];
const SHEETDB_URL = "https://sheetdb.io/api/v1/3hpi189csecyv";

type ContactBody = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  company: string;
  serviceType: string;
  consent: boolean;
};

function buildEmailHtml(data: ContactBody): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #333; max-width: 560px;">
  <h2 style="color: #1e2848;">New Contact Form Submission</h2>
  <p>Someone filled the contact form on the Adzzat website with the following details:</p>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>First name</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.firstName)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Last name</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.lastName)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.email)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Mobile</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.mobile)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Company</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.company)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Engagement type</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${escapeHtml(data.serviceType)}</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee;"><strong>Consent</strong></td><td style="padding: 8px 12px; border: 1px solid #eee;">${data.consent ? "Yes" : "No"}</td></tr>
  </table>
  <p style="margin-top: 24px; font-size: 12px; color: #666;">Sent from Adzzat contact form.</p>
</body>
</html>
`.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  let data: ContactBody;
  try {
    data = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, mobile, company, serviceType, consent } = data;
  if (!firstName || !lastName || !email || !mobile || !company || !serviceType || consent !== true) {
    return NextResponse.json(
      { error: "Missing or invalid required fields" },
      { status: 400 }
    );
  }

  const payload = {
    data: [{ firstName, lastName, email, mobile, company, serviceType, consent }],
  };

  // 1) Save to SheetDB
  try {
    const sheetRes = await fetch(SHEETDB_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!sheetRes.ok) {
      console.error("SheetDB error:", await sheetRes.text());
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 502 }
      );
    }
  } catch (e) {
    console.error("SheetDB request failed:", e);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 502 }
    );
  }

  // 2) Send email from contact@adzzat.com with CC to team
  const appPassword = process.env.CONTACT_EMAIL_APP_PASSWORD;
  if (appPassword) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: FROM_EMAIL,
          pass: appPassword,
        },
      });
      await transporter.sendMail({
        from: `Adzzat Contact <${FROM_EMAIL}>`,
        to: FROM_EMAIL,
        cc: CC_EMAILS,
        replyTo: email,
        subject: `[Adzzat] New contact form: ${firstName} ${lastName} (${company})`,
        text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\nEngagement type: ${serviceType}\nConsent: ${consent ? "Yes" : "No"}`,
        html: buildEmailHtml(data),
      });
    } catch (e) {
      console.error("Contact email send failed:", e);
      // Don't fail the request; submission is already in SheetDB
    }
  }

  return NextResponse.json({ ok: true });
}
