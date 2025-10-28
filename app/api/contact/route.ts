import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  phone: string
  email?: string
  product_name?: string
  product_code?: string
  comment?: string
  hp_field?: string // honeypot
}

// Simple in-memory rate limit per IP
const ipHits = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60 * 1000 // 1 minute
const MAX_HITS = 10 // 10 req/min per IP

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = ipHits.get(ip)
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (entry.count >= MAX_HITS) return false
  entry.count += 1
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    }

    const body = (await request.json()) as ContactPayload

    // Honeypot: if filled => spam
    if (body.hp_field) {
      return NextResponse.json({ ok: true })
    }

    const name = (body.name || "").trim()
    const phone = (body.phone || "").trim()
    const email = (body.email || "").trim()
    const productName = (body.product_name || "").trim()
    const productCode = (body.product_code || "").trim()
    const comment = (body.comment || "").trim()

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing name or phone" }, { status: 400 })
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO = "info@componext.com.ua",
      MAIL_FROM = SMTP_USER,
      MAIL_SUBJECT = "Нова заявка з сайту"
    } = process.env as Record<string, string>

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: "SMTP not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const subject = MAIL_SUBJECT
    const textLines = [
      `Ім'я: ${name}`,
      `Телефон: ${phone}`,
      email ? `Email: ${email}` : undefined,
      productName ? `Продукт: ${productName}` : undefined,
      productCode ? `Код продукту: ${productCode}` : undefined,
      comment ? `Коментар: ${comment}` : undefined,
    ].filter(Boolean)

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">Нова заявка з сайту</h2>
        <table style="border-collapse:collapse;width:100%">
          <tbody>
            <tr><td style="padding:6px 0;width:180px;color:#555">Ім'я</td><td style="padding:6px 0">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Телефон</td><td style="padding:6px 0">${phone}</td></tr>
            ${email ? `<tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0">${email}</td></tr>` : ""}
            ${productName ? `<tr><td style="padding:6px 0;color:#555">Продукт</td><td style="padding:6px 0">${productName}</td></tr>` : ""}
            ${productCode ? `<tr><td style="padding:6px 0;color:#555">Код продукту</td><td style="padding:6px 0">${productCode}</td></tr>` : ""}
            ${comment ? `<tr><td style="padding:6px 0;color:#555">Коментар</td><td style="padding:6px 0">${comment}</td></tr>` : ""}
          </tbody>
        </table>
      </div>
    `

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject,
      text: textLines.join("\n"),
      html,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}


