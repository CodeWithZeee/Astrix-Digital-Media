import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "your-email@gmail.com",
    pass: process.env.SMTP_PASS || "your-app-password",
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email templates
const emailTemplates = {
  verification: (name, verificationUrl) => ({
    subject: "Verify your Astrix account",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Welcome to Astrix!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">AI Growth Infrastructure for Business Development</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Hi ${name},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Thank you for creating your Astrix account! To complete your registration, 
            please verify your email address by clicking the button below.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: white; 
                      padding: 15px 30px; 
                      text-decoration: none; 
                      border-radius: 8px; 
                      display: inline-block; 
                      font-weight: bold;
                      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
              Verify Email Address
            </a>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">
            If the button doesn't work, you can copy and paste this link into your browser:
          </p>
          
          <p style="color: #667eea; word-break: break-all; font-size: 14px;">
            ${verificationUrl}
          </p>
          
          <p style="color: #666; line-height: 1.6; margin-top: 25px;">
            This link will expire in 24 hours. If you didn't create an account with Astrix, 
            you can safely ignore this email.
          </p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">© 2024 Astrix. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  passwordReset: (name, resetUrl) => ({
    subject: "Reset your Astrix password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Password Reset</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Astrix Account Security</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Hi ${name},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            We received a request to reset your password. Click the button below to create a new password.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: white; 
                      padding: 15px 30px; 
                      text-decoration: none; 
                      border-radius: 8px; 
                      display: inline-block; 
                      font-weight: bold;
                      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
              Reset Password
            </a>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">
            If the button doesn't work, you can copy and paste this link into your browser:
          </p>
          
          <p style="color: #667eea; word-break: break-all; font-size: 14px;">
            ${resetUrl}
          </p>
          
          <p style="color: #666; line-height: 1.6; margin-top: 25px;">
            This link will expire in 1 hour. If you didn't request a password reset, 
            you can safely ignore this email.
          </p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">© 2024 Astrix. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  welcome: (name) => ({
    subject: "Welcome to Astrix!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Welcome to Astrix!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Your account is now verified</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Hi ${name},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Congratulations! Your Astrix account has been successfully verified. 
            You now have full access to all our features and services.
          </p>
          
          <div style="background: #e8f4fd; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0;">
            <h3 style="color: #333; margin-top: 0;">What's next?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>Explore our AI-powered business development tools</li>
              <li>Connect with our team for personalized guidance</li>
              <li>Start growing your business with our infrastructure</li>
            </ul>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            If you have any questions or need assistance, don't hesitate to reach out to our support team.
          </p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">© 2024 Astrix. All rights reserved.</p>
        </div>
      </div>
    `,
  }),
};

// Email service functions
const emailService = {
  // Send verification email
  async sendVerificationEmail(email, name, verificationToken) {
    const verificationUrl = `${
      process.env.SITE_URL || "http://localhost:4321"
    }/verify-email?token=${verificationToken}`;
    const template = emailTemplates.verification(name, verificationUrl);

    try {
      await transporter.sendMail({
        from: `"Astrix" <${emailConfig.auth.user}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      });
      return true;
    } catch (error) {
      console.error("Email sending error:", error);
      return false;
    }
  },

  // Send password reset email
  async sendPasswordResetEmail(email, name, resetToken) {
    const resetUrl = `${
      process.env.SITE_URL || "http://localhost:4321"
    }/reset-password?token=${resetToken}`;
    const template = emailTemplates.passwordReset(name, resetUrl);

    try {
      await transporter.sendMail({
        from: `"Astrix" <${emailConfig.auth.user}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      });
      return true;
    } catch (error) {
      console.error("Email sending error:", error);
      return false;
    }
  },

  // Send welcome email
  async sendWelcomeEmail(email, name) {
    const template = emailTemplates.welcome(name);

    try {
      await transporter.sendMail({
        from: `"Astrix" <${emailConfig.auth.user}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      });
      return true;
    } catch (error) {
      console.error("Email sending error:", error);
      return false;
    }
  },
};

export { emailService as e };
