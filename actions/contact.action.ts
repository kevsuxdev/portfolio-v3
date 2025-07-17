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
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>New Contact Message</title>
                <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: #f5f7fa;
                    color: #333;
                }
                .email-container {
                    max-width: 600px;
                    margin: 40px auto;
                    background: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 12px 24px rgba(0,0,0,0.05);
                    border-top: 8px solid #4dffbe;
                }
                .header {
                    background: linear-gradient(135deg, #4dffbe, #34d6a9);
                    color: #fff;
                    padding: 30px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 26px;
                    letter-spacing: -0.5px;
                }
                .content {
                    padding: 30px;
                }
                .content h2 {
                    font-size: 20px;
                    margin-bottom: 20px;
                    color: #4b5563;
                }
                .info p {
                    margin: 10px 0;
                    font-size: 16px;
                }
                .info span {
                    font-weight: 600;
                    color: #111827;
                }
                .message-box {
                    margin-top: 20px;
                    background: #f9fafb;
                    padding: 20px;
                    border-left: 4px solid #4dffbe;
                    font-style: italic;
                    color: #374151;
                    white-space: pre-wrap;
                }
                .footer {
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #9ca3af;
                }
                .footer a {
                    color: #4dffbe;
                    text-decoration: none;
                }
                </style>
            </head>
            <body>
                <div class="email-container">
                <div class="header">
                    <h1>📩 New Portfolio Message</h1>
                </div>
                <div class="content">
                    <h2>You’ve received a new message 🚀</h2>
                    <div class="info">
                    <p><span>Name:</span> ${name}</p>
                    <p><span>Company:</span> ${companyName || '—'}</p>
                    <p><span>Email:</span> ${email}</p>
                    </div>
                    <div class="message-box">
                    ${message}
                    </div>
                </div>
                <div class="footer">
                    This message was submitted from your portfolio contact form. <br />
                    <a href="https://your-portfolio.com">your-portfolio.com</a>
                </div>
                </div>
            </body>
            </html>
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