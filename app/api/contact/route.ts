import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'
import nodemailer from 'nodemailer'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  submittedAt: string
  ipAddress?: string
}

interface ContactData {
  submissions: ContactSubmission[]
  lastUpdated: string | null
}

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'courtyardoftruth@gmail.com',
    pass: process.env.EMAIL_PASS || '', // Use App Password for Gmail
  },
}

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig)
}

// Email template
const createEmailTemplate = (submission: ContactSubmission) => {
  const subjectLabels: { [key: string]: string } = {
    general: 'General Inquiry',
    visit: 'Planning a Visit',
    prayer: 'Prayer Request',
    ministry: 'Ministry Information',
    pastoral: 'Pastoral Care',
    other: 'Other'
  }

  return {
    subject: `New Contact Form Submission: ${subjectLabels[submission.subject] || submission.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #8B5CF6; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Courtyard of Truth</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h2 style="color: #8B5CF6; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #6B7280;">${submission.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6B7280;"><a href="mailto:${submission.email}" style="color: #8B5CF6;">${submission.email}</a></td>
              </tr>
              ${submission.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #6B7280;"><a href="tel:${submission.phone}" style="color: #8B5CF6;">${submission.phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 8px 0; color: #6B7280;">${subjectLabels[submission.subject] || submission.subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 8px 0; color: #6B7280;">${new Date(submission.submittedAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #8B5CF6; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
            <div style="background-color: #F3F4F6; padding: 20px; border-radius: 6px; border-left: 4px solid #8B5CF6;">
              <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${submission.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
            <p style="color: #6B7280; font-size: 14px; margin: 0;">
              This message was sent from the Courtyard of Truth contact form.<br>
              Submission ID: ${submission.id}
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission - Courtyard of Truth

Contact Information:
Name: ${submission.name}
Email: ${submission.email}
${submission.phone ? `Phone: ${submission.phone}` : ''}
Subject: ${subjectLabels[submission.subject] || submission.subject}
Submitted: ${new Date(submission.submittedAt).toLocaleString()}

Message:
${submission.message}

---
This message was sent from the Courtyard of Truth contact form.
Submission ID: ${submission.id}
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get client IP address
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    // Create submission object
    const submission: ContactSubmission = {
      id: `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      subject: body.subject,
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
      ipAddress
    }

    // Read existing data
    const dataPath = join(process.cwd(), 'data', 'contact-submissions.json')
    let existingData: ContactData

    try {
      const fileContent = await readFile(dataPath, 'utf-8')
      existingData = JSON.parse(fileContent)
    } catch (error) {
      // If file doesn't exist or is invalid, create new structure
      existingData = {
        submissions: [],
        lastUpdated: null
      }
    }

    // Add new submission
    existingData.submissions.push(submission)
    existingData.lastUpdated = new Date().toISOString()

    // Write updated data back to file
    await writeFile(dataPath, JSON.stringify(existingData, null, 2), 'utf-8')

    // Send email notification
    try {
      const transporter = createTransporter()
      const emailTemplate = createEmailTemplate(submission)
      
      transporter.sendMail({
        from: process.env.EMAIL_FROM || 'courtyardoftruth@gmail.com',
        to: process.env.EMAIL_TO || 'courtyardoftruth@gmail.com',
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the entire request if email fails, just log it
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        submissionId: submission.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const dataPath = join(process.cwd(), 'data', 'contact-submissions.json')
    const fileContent = await readFile(dataPath, 'utf-8')
    const data: ContactData = JSON.parse(fileContent)

    // Return only basic stats for security
    return NextResponse.json({
      totalSubmissions: data.submissions.length,
      lastUpdated: data.lastUpdated
    })
  } catch (error) {
    console.error('Error reading contact submissions:', error)
    return NextResponse.json(
      { error: 'Could not retrieve submissions' },
      { status: 500 }
    )
  }
}
