# Email Setup for Contact Form

The contact form is now configured to send email notifications to `courtyardoftruth@gmail.com` whenever someone submits the form.

## Setup Instructions

### 1. Create Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=courtyardoftruth@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=courtyardoftruth@gmail.com
EMAIL_TO=courtyardoftruth@gmail.com
```

### 2. Gmail App Password Setup

Since Gmail requires 2-factor authentication for security, you'll need to create an App Password:

1. Go to your Google Account settings
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Church App Contact Form" as the name
6. Copy the generated 16-character password
7. Replace `your_app_password_here` in `.env.local` with this password

### 3. Email Features

- **Professional HTML Template**: Beautifully formatted emails with church branding
- **Complete Contact Info**: Name, email, phone, subject, and message
- **Submission Tracking**: Unique ID for each submission
- **Timestamp**: When the message was submitted
- **Fallback**: If email fails, the submission is still saved to JSON file

### 4. Testing

To test the email functionality:

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check `courtyardoftruth@gmail.com` for the email notification
5. Check `data/contact-submissions.json` for the saved submission

### 5. Production Deployment

For production deployment (Vercel, Netlify, etc.):

1. Add the environment variables to your hosting platform's environment settings
2. Make sure to use the App Password, not your regular Gmail password
3. The email functionality will work automatically once deployed

## Email Template Preview

The emails include:
- Church branding with purple and gold colors
- Complete contact information in a table format
- The full message content
- Submission timestamp and unique ID
- Professional HTML formatting with fallback text version

## Troubleshooting

- **Email not sending**: Check that the App Password is correct and 2FA is enabled
- **SMTP errors**: Verify the email configuration in `.env.local`
- **Form still works**: Even if email fails, submissions are saved to the JSON file
- **Check logs**: Email errors are logged to the console for debugging
