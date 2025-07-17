"use server"

import { headers } from 'next/headers'
import { createTransport } from "nodemailer"

import { errorResponse, serverErrorResponse, successResponse } from "@/lib/utils"
import { contactType } from "@/validation/contact.validation"

const IPRateMap = new Map<string, number>()

const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000

const getClientIpAddress = async () => {
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    return forwarded ? forwarded.split(',')[0].trim() : 'unknown'
}

const canSendEmail = (ip: string) => {
  const now = Date.now()
  const lastRequest = IPRateMap.get(ip)

  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
    return false
  }

  IPRateMap.set(ip, now)
  return true
}

export const sendContactFormEmail = async (data: contactType) => {
    const { name, companyName, email, message } = data

    const userIP = await getClientIpAddress()

    if (!canSendEmail(userIP)) {
        return errorResponse("You've already sent a message today. Please try again tomorrow.")
    }

    const transport = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USERNAME,
            pass: process.env.NODEMAILER_PASSKEY,
        }
    })

    try {
        /* Send to Me */
        await transport.sendMail({
            from: email,
            to: process.env.NODEMAILER_USERNAME,
            subject: "New Message from Your Portfolio",
            html: `
             <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 520px; margin: auto; padding: 32px 24px; background-color: #ffffff; border: 1px solid #eee; border-radius: 12px; color: #333;">
                <div style="text-align: center; margin-bottom: 24px;">
                <h2 style="color: #4dffbe; margin: 0;">📬 New Contact Message</h2>
                </div>
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 12px;">
                You've received a new message from your portfolio contact form.
                </p>

                <div style="margin-bottom: 16px; font-size: 15px; line-height: 1.5;">
                <p><strong style="color: #111827;">Name:</strong> ${name}</p>
                <p><strong style="color: #111827;">Email:</strong> ${email}</p>
                <p><strong style="color: #111827;">Company:</strong> ${companyName || '—'}</p>
                </div>

                <div style="background: #f9fafb; padding: 16px 20px; border-left: 4px solid #4dffbe; font-style: italic; font-size: 15px; color: #374151; white-space: pre-wrap;">
                ${message}
                </div>

                <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />

                <p style="font-size: 12px; color: #888; text-align: center;">
                This message was submitted via your portfolio site.<br/>
                <a href="https://kevsuxdev.vercel.app/" style="color: #4dffbe; text-decoration: none;">Kevs Dev</a>
                </p>
            </div>
            `
        })

        /* Send to Customer */
        await transport.sendMail({
            from: '"Kevs Dev" <markkevinromero.work@gmail.com>',
            to: email,
            subject: "Thanks for Reaching Out – I Got Your Message!",
            html: `
            <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 520px; margin: auto; padding: 32px 24px; background-color: #ffffff; border: 1px solid #eee; border-radius: 12px; color: #333;">
                <div style="text-align: center; margin-bottom: 24px;">
                <h2 style="color: #4dffbe; margin: 0;">Message Received ✅</h2>
                </div>
                <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                Hi there,
                </p>
                <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                Just letting you know that your message has been successfully received.
                I appreciate you reaching out and will respond within 1–2 business days.
                </p>
                <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                If it's something urgent, feel free to send a follow-up or reach out on any of my socials.
                </p>
                <p style="font-size: 16px; margin-bottom: 0;">– Kevs Dev</p>
                <p style="font-size: 14px; color: #888; margin-top: 4px;">Full-Stack Developer</p>
                <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
            </div>
            `
        })

        return successResponse("Thank you for your message. I’ll be in touch shortly.")
    } catch (error) {
        if (error instanceof Error) {
            return errorResponse(error.message)
        }
        return serverErrorResponse()
    }
}