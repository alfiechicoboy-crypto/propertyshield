import nodemailer from "nodemailer";
import type { Enquiry } from "@shared/schema";

const OWNER_EMAIL = "propertyshield128@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

function createTransporter() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

function formatServiceLabel(service: string): string {
  const labels: Record<string, string> = {
    "roof-repairs": "Roof Repairs",
    "re-roofing": "Re-Roofing",
    "flat-roofing": "Flat Roofing",
    "chimney-repairs": "Chimney Repairs",
    "roofline": "Roofline (Fascias, Soffits & Guttering)",
    "emergency-roofing": "Emergency Roofing",
    "velux-skylights": "Velux & Skylights",
    "lead-work": "Lead Work",
  };
  return labels[service] || service;
}

function formatContactMethod(method: string): string {
  const labels: Record<string, string> = {
    phone: "Phone Call",
    email: "Email",
    whatsapp: "WhatsApp",
  };
  return labels[method] || method;
}

export async function sendEnquiryNotificationToOwner(enquiry: Enquiry): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn("[email] GMAIL_USER or GMAIL_APP_PASSWORD not set — skipping owner notification email.");
    return;
  }

  const emergencyBadge = enquiry.isEmergency
    ? `<span style="background:#dc2626;color:#fff;padding:3px 10px;border-radius:4px;font-size:13px;font-weight:bold;">🚨 EMERGENCY</span>`
    : "";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#1a1a1a;padding:24px 32px;display:flex;align-items:center;gap:12px;">
        <div>
          <h1 style="color:#d4a017;margin:0;font-size:20px;">PropertyShield UK</h1>
          <p style="color:#9ca3af;margin:4px 0 0;font-size:13px;">New Enquiry Received</p>
        </div>
      </div>

      <div style="padding:32px;">
        <div style="margin-bottom:24px;">
          <h2 style="margin:0 0 4px;font-size:18px;color:#111;">New Quote Request ${emergencyBadge}</h2>
          <p style="margin:0;color:#6b7280;font-size:13px;">Submitted on ${new Date(enquiry.createdAt!).toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;">
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;width:40%;vertical-align:top;">Full Name</td>
            <td style="padding:12px 0;color:#111;font-size:14px;font-weight:600;">${enquiry.fullName}</td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Phone</td>
            <td style="padding:12px 0;font-size:14px;">
              <a href="tel:${enquiry.phone}" style="color:#d4a017;font-weight:600;text-decoration:none;">${enquiry.phone}</a>
            </td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Email</td>
            <td style="padding:12px 0;font-size:14px;">
              <a href="mailto:${enquiry.email}" style="color:#d4a017;font-weight:600;text-decoration:none;">${enquiry.email}</a>
            </td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Property Address</td>
            <td style="padding:12px 0;color:#111;font-size:14px;">${enquiry.propertyAddress}</td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Service Required</td>
            <td style="padding:12px 0;color:#111;font-size:14px;font-weight:600;">${formatServiceLabel(enquiry.serviceRequired)}</td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Preferred Contact</td>
            <td style="padding:12px 0;color:#111;font-size:14px;">${formatContactMethod(enquiry.preferredContact)}</td>
          </tr>
          ${enquiry.message ? `
          <tr>
            <td style="padding:12px 0;color:#6b7280;font-size:14px;vertical-align:top;">Additional Details</td>
            <td style="padding:12px 0;color:#111;font-size:14px;">${enquiry.message}</td>
          </tr>
          ` : ""}
        </table>

        <div style="margin-top:28px;display:flex;gap:12px;">
          <a href="tel:${enquiry.phone}" style="display:inline-block;background:#d4a017;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">Call ${enquiry.fullName.split(" ")[0]}</a>
          <a href="mailto:${enquiry.email}" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">Email Customer</a>
        </div>
      </div>

      <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
        <p style="margin:0;color:#9ca3af;font-size:12px;">PropertyShield UK Ltd &bull; 07753 351619 &bull; propertyshield128@gmail.com</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"PropertyShield UK" <${GMAIL_USER}>`,
    to: OWNER_EMAIL,
    subject: `${enquiry.isEmergency ? "🚨 EMERGENCY — " : ""}New Quote Request from ${enquiry.fullName}`,
    html,
  });
}

export async function sendConfirmationToCustomer(enquiry: Enquiry): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn("[email] GMAIL_USER or GMAIL_APP_PASSWORD not set — skipping customer confirmation email.");
    return;
  }

  const firstName = enquiry.fullName.split(" ")[0];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#1a1a1a;padding:24px 32px;">
        <h1 style="color:#d4a017;margin:0;font-size:20px;">PropertyShield UK</h1>
        <p style="color:#9ca3af;margin:4px 0 0;font-size:13px;">Darlington's Trusted Roofing Specialists</p>
      </div>

      <div style="padding:32px;">
        <h2 style="margin:0 0 16px;font-size:20px;color:#111;">Thanks ${firstName}, we've received your enquiry!</h2>
        <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">
          We'll be in touch shortly via your preferred contact method (${formatContactMethod(enquiry.preferredContact)}).
          ${enquiry.isEmergency ? "<strong>As this is an emergency, we'll prioritise your call.</strong>" : "We typically respond within a few hours during business hours."}
        </p>

        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:24px 0;">
          <h3 style="margin:0 0 12px;font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Your Enquiry Summary</h3>
          <p style="margin:4px 0;font-size:14px;color:#111;"><strong>Service:</strong> ${formatServiceLabel(enquiry.serviceRequired)}</p>
          <p style="margin:4px 0;font-size:14px;color:#111;"><strong>Address:</strong> ${enquiry.propertyAddress}</p>
          ${enquiry.message ? `<p style="margin:4px 0;font-size:14px;color:#111;"><strong>Notes:</strong> ${enquiry.message}</p>` : ""}
        </div>

        <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 8px;">If you need to speak to us urgently, don't hesitate to call:</p>
        <a href="tel:07753351619" style="display:inline-block;background:#d4a017;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:15px;">📞 07753 351619</a>
      </div>

      <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
        <p style="margin:0;color:#9ca3af;font-size:12px;">PropertyShield UK Ltd &bull; Darlington &bull; <a href="https://propertyshielduk.com" style="color:#9ca3af;">propertyshielduk.com</a></p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"PropertyShield UK" <${GMAIL_USER}>`,
    to: enquiry.email,
    subject: `We've received your enquiry, ${firstName} — PropertyShield UK`,
    html,
  });
}
