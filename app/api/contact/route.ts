import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"

type ContactPayload = {
  name: string
  phone: string
}

export async function POST(request: Request) {
  try {
    const { name, phone } = (await request.json()) as ContactPayload

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing name or phone" }, { status: 400 })
    }

    const {
      // Simple service-based config (matches common guides)
      MAIL_SERVICE,
      MAIL_USER,
      MAIL_PASS,
      // Raw SMTP config
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      // Common
      MAIL_TO = "info@componext.com.ua",
      MAIL_FROM = MAIL_USER || SMTP_USER
    } = process.env

    const subject = "Новий запит з форми контакту"
    const text = `Ім'я: ${name}\nТелефон: ${phone}`
    const html = `<p><strong>Ім'я:</strong> ${name}</p><p><strong>Телефон:</strong> ${phone}</p>`
    const recipients = [MAIL_TO as string, 'bogdandakun1@gmail.com']

    if (MAIL_SERVICE && MAIL_USER && MAIL_PASS && MAIL_FROM) {
      const transporter = nodemailer.createTransport({
        service: MAIL_SERVICE,
        auth: { user: MAIL_USER, pass: MAIL_PASS }
      })
      await transporter.sendMail({
        from: MAIL_FROM as string,
        to: recipients,
        subject,
        text,
        html
      })
    } else if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && MAIL_FROM) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      })
      await transporter.sendMail({
        from: MAIL_FROM as string,
        to: recipients,
        subject,
        text,
        html
      })
    } else if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: (process.env.MAIL_FROM as string) || 'no-reply@componext.com.ua',
        to: recipients,
        subject,
        text,
        html
      })
    } else if (process.env.NODE_ENV !== 'production') {
      // Local dev fallback using Ethereal
      const testAccount = await nodemailer.createTestAccount()
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass }
      })
      const info = await transporter.sendMail({
        from: 'Dev Preview <no-reply@example.dev>',
        to: recipients,
        subject,
        text,
        html
      })
      const previewUrl = nodemailer.getTestMessageUrl(info)
      return NextResponse.json({ ok: true, previewUrl })
    } else {
      return NextResponse.json({ error: "No email provider configured" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}


