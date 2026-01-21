# Gmail SMTP Setup Guide

To send emails from this website, you cannot use your regular Gmail password. You must use an **App Password**.

## Step 1: Enable 2-Step Verification
1.  Go to your [Google Account Security page](https://myaccount.google.com/security) for each account.
2.  Scroll to "How you sign in to Google".
3.  Ensure **2-Step Verification** is turned **ON**.

## Step 2: Generate App Passwords
You will need two App Passwords if you are using separate accounts.

### For Info Account (Contact Form)
1.  Log in to `oasistours.info@gmail.com`.
2.  Search **"App passwords"** -> Name it "Bhutan Website Contact".
3.  Copy the 16-character code.

### For Booking Account (Booking Form)
1.  Log in to `oasistours.booking@gmail.com`.
2.  Search **"App passwords"** -> Name it "Bhutan Website Booking".
3.  Copy the 16-character code.

## Step 3: Update Environment Variables
1.  Open the `.env.local` file in your project root.
2.  Add the new credentials:

```env
# Contact Form Credentials (Sender: oasistours.info@gmail.com)
GMAIL_USER=oasistours.info@gmail.com
GMAIL_PASS=your-info-app-password

# Booking Form Credentials (Sender: oasistours.booking@gmail.com)
GMAIL_BOOKING_USER=oasistours.booking@gmail.com
GMAIL_BOOKING_PASS=your-booking-app-password
```

## Step 4: Restart Server
1.  Stop the server (`Ctrl+C`).
2.  Run `yarn dev`.
3.  Test both forms.
