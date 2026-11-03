import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!apiKey || !siteKey) return false;
  try {
    const res = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/journeex/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: { token, expectedAction: "CONTACT", siteKey },
        }),
      }
    );
    const data = await res.json();
    const score: number = data?.riskAnalysis?.score ?? 0;
    const valid: boolean = data?.tokenProperties?.valid === true;
    const action: string = data?.tokenProperties?.action ?? "";
    return valid && action === "CONTACT" && score >= 0.5;
  } catch {
    return false;
  }
}

async function getIpLocation(ip: string): Promise<{ city: string; region: string; country: string } | null> {
  if (ip === "unknown" || ip.startsWith("127.") || ip.startsWith("::1")) return null;
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,status`, { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    if (data.status === "success") return { city: data.city, region: data.regionName, country: data.country };
    return null;
  } catch {
    return null;
  }
}

function parseUserAgent(ua: string): { browser: string; os: string; device: string } {
  const browser =
    /Edg\//.test(ua) ? "Microsoft Edge" :
    /OPR\/|Opera/.test(ua) ? "Opera" :
    /Chrome\//.test(ua) && !/Chromium/.test(ua) ? "Google Chrome" :
    /Firefox\//.test(ua) ? "Mozilla Firefox" :
    /Safari\//.test(ua) && !/Chrome/.test(ua) ? "Safari" :
    /MSIE|Trident/.test(ua) ? "Internet Explorer" : "Unknown Browser";

  const os =
    /Windows NT 10/.test(ua) ? "Windows 10/11" :
    /Windows NT 6\.1/.test(ua) ? "Windows 7" :
    /Windows/.test(ua) ? "Windows" :
    /iPhone/.test(ua) ? "iOS (iPhone)" :
    /iPad/.test(ua) ? "iOS (iPad)" :
    /Mac OS X/.test(ua) ? "macOS" :
    /Android/.test(ua) ? "Android" :
    /Linux/.test(ua) ? "Linux" : "Unknown OS";

  const device =
    /Mobile|iPhone|Android.*Mobile/.test(ua) ? "Mobile" :
    /iPad|Tablet/.test(ua) ? "Tablet" : "Desktop";

  return { browser, os, device };
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0ede8;width:140px;vertical-align:top;">
        <span style="font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9a9590;">${label}</span>
      </td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f0ede8;vertical-align:top;">
        <span style="font-size:0.9rem;color:#1a1816;line-height:1.6;">${value}</span>
      </td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  let body: { name: string; email: string; phone?: string; message: string; recaptchaToken?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message, recaptchaToken } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (recaptchaToken) {
    const valid = await verifyRecaptcha(recaptchaToken);
    if (!valid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
    }
  }

  // Gather metadata
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long",
  });
  const userAgent = req.headers.get("user-agent") ?? "Unknown";
  const { browser, os, device } = parseUserAgent(userAgent);
  const location = await getIpLocation(ip);
  const locationStr = location
    ? `${location.city}, ${location.region}, ${location.country}`
    : "Could not determine";
  const referer = req.headers.get("referer") ?? "Direct";

  const FROM = "noreply@journeex.neerajraisinghani.com";
  const INBOX = "journeex@neerajraisinghani.com";

  try {
    // Notification email to Neeraj — rich with all details
    await resend.emails.send({
      from: `JourneeX by Neeraj Raisinghani <${FROM}>`,
      to: INBOX,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New message from ${name}</title>
</head>
<body style="margin:0;padding:0;background:#faf9f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf9f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0c0c0a;padding:28px 36px;border-radius:16px 16px 0 0;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:1.3rem;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">JourneeX</span>
              <span style="font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f5e642;float:right;line-height:2.2;">New Contact</span>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="background:#ffffff;padding:36px 36px 28px;">
              <p style="margin:0 0 16px;font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9a9590;">Contact Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", name)}
                ${row("Email", `<a href="mailto:${email}" style="color:#1a1816;font-weight:600;">${email}</a>`)}
                ${phone ? row("Phone", phone) : ""}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="background:#ffffff;padding:0 36px;"><div style="height:1px;background:#f0ede8;"></div></td></tr>

          <!-- Message block -->
          <tr>
            <td style="background:#ffffff;padding:28px 36px;">
              <p style="margin:0 0 6px;font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9a9590;">Message</p>
              <p style="margin:0;font-size:1rem;color:#1a1816;line-height:1.75;white-space:pre-wrap;">${message}</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="background:#ffffff;padding:0 36px;"><div style="height:1px;background:#f0ede8;"></div></td></tr>

          <!-- Submission metadata -->
          <tr>
            <td style="background:#ffffff;padding:28px 36px 36px;">
              <p style="margin:0 0 16px;font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9a9590;">Submission Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("Submitted", submittedAt)}
                ${row("Location", locationStr)}
                ${row("IP Address", ip)}
                ${row("Device", device)}
                ${row("Browser", browser)}
                ${row("OS", os)}
                ${row("Referrer", referer)}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0ede8;padding:20px 36px;border-radius:0 0 16px 16px;">
              <p style="margin:0;font-size:0.78rem;color:#9a9590;">Reply directly to this email to respond to ${name}.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    // Confirmation email to sender
    await resend.emails.send({
      from: `JourneeX by Neeraj Raisinghani <${FROM}>`,
      to: email,
      subject: `Message Received, ${name}!`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Message Received</title>
</head>
<body style="margin:0;padding:0;background:#faf9f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf9f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0c0c0a;padding:28px 40px;border-radius:16px 16px 0 0;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:1.4rem;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">JourneeX</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:44px 40px 36px;">
              <p style="margin:0 0 20px;font-size:1rem;color:#1a1816;line-height:1.75;">Hi ${name},</p>
              <p style="margin:0 0 20px;font-size:1rem;color:#1a1816;line-height:1.75;">Your message has been received and I will be getting back to you super soon.</p>
              <p style="margin:0 0 20px;font-size:1rem;color:#5a5550;line-height:1.75;">JourneeX is a personal AI journal built around one idea: write your day and hear it reflected back, warm, honest, and human. Every message I receive matters, and yours is no different.</p>
              <p style="margin:0 0 0;font-size:1rem;color:#1a1816;line-height:1.75;">If something is urgent, reach out directly at <a href="mailto:journeex@neerajraisinghani.com" style="color:#1a1816;font-weight:600;">journeex@neerajraisinghani.com</a> and I will prioritise it.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#ffffff;padding:0 40px;">
              <div style="height:1px;background:#e8e5e0;"></div>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="background:#ffffff;padding:28px 40px 44px;border-radius:0 0 16px 16px;">
              <p style="margin:0;font-size:0.9rem;color:#5a5550;line-height:1.75;">
                Neeraj Raisinghani<br/>
                <a href="https://journeex.neerajraisinghani.com" style="color:#1a1816;font-weight:600;text-decoration:none;">JourneeX</a>
                <span style="color:#ccc9c0;margin:0 8px;">|</span>
                <a href="https://neerajraisinghani.com" style="color:#1a1816;font-weight:600;text-decoration:none;">neerajraisinghani.com</a>
                <span style="color:#ccc9c0;margin:0 8px;">|</span>
                <a href="https://www.linkedin.com/in/neerajraisinghani/" style="color:#1a1816;font-weight:600;text-decoration:none;">LinkedIn</a>
              </p>
            </td>
          </tr>


        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
