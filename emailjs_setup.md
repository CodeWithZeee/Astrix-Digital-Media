## 📧 **Step-by-Step EmailJS Setup:**

### **Step 1: Get Your Public Key**
1. Go to your EmailJS dashboard
2. Click on **"Account"** in the left sidebar
3. Copy your **"Public Key"** (it looks like: `user_xxxxxxxxxxxxxxxx`)

### **Step 2: Create Email Service**
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** or **"Outlook"** (or your preferred email provider)
4. Connect your email account (hello@astrixdigitalmedia.com)
5. Give it a name like "Astrix Email Service"
6. Copy the **Service ID** (it looks like: `service_xxxxxxxxx`)

### **Step 3: Create Email Templates**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**

**Template 1 - User Confirmation:**
- Name: "User Demo Confirmation"
- Subject: "Demo Request Confirmed - Astrix Digital Media"
- Content:
```
Hi {{to_name}},

Thank you for requesting a demo with Astrix Digital Media!

We have received your demo request and our team will contact you within 2 hours to schedule your personalized demo call.

Your Request Details:
- Name: {{to_name}}
- Company: {{company}}
- Industry: {{industry}}
- Company Size: {{company_size}}

We're excited to show you how our AI infrastructure can transform your business growth!

Best regards,
The Astrix Digital Media Team

Contact Information:
Email: hello@astrixdigitalmedia.com
Phone: +1 (555) 123-4567
```

**Template 2 - Business Notification:**
- Name: "Business Demo Notification"
- Subject: "New Demo Request - {{from_name}}"
- Content:
```
New Demo Request Received:

Name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}
Industry: {{industry}}
Company Size: {{company_size}}

Business Needs:
{{business_needs}}

---
This request was submitted through the Astrix Digital Media website.
```

### **Step 4: Get Template IDs**
1. After creating each template, click on it
2. Copy the **Template ID** (it looks like: `template_xxxxxxxxx`)

### **Step 5: Update Your Code**
Now I'll update your contact form with the actual EmailJS credentials:


```plaintext
Hi {{to_name}},

Thank you for requesting a demo with Astrix Digital Media!

We have received your demo request and our team will contact you within 2 hours to schedule your personalized demo call.

Your Request Details:
- Name: {{to_name}}
- Company: {{company}}
- Industry: {{industry}}
- Company Size: {{company_size}}

We're excited to show you how our AI infrastructure can transform your business growth!

Best regards,
The Astrix Digital Media Team

Contact Information:
Email: hello@astrixdigitalmedia.com
Phone: +1 (555) 123-4567
```

```plaintext
New Demo Request Received:

Name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}
Industry: {{industry}}
Company Size: {{company_size}}

Business Needs:
{{business_needs}}

---
This request was submitted through the Astrix Digital Media website.
```

```astro
      // Initialize EmailJS
      (function() {
        emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your EmailJS public key
      })();

->

      // Initialize EmailJS
      (function() {
        emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your actual EmailJS public key
      })();
```

```astro
            // Send confirmation email to user
            const userEmailParams = {
              to_email: email,
              to_name: firstName,
              from_name: 'Astrix Digital Media',
              message: `Hi ${firstName},

Thank you for requesting a demo with Astrix Digital Media!

We have received your demo request and our team will contact you within 2 hours to schedule your personalized demo call.

Your Request Details:
- Name: ${firstName} ${lastName}
- Company: ${company}
- Industry: ${industry}
- Company Size: ${companySize}

We're excited to show you how our AI infrastructure can transform your business growth!

Best regards,
The Astrix Digital Media Team

Contact Information:
Email: hello@astrixdigitalmedia.com
Phone: +1 (555) 123-4567`
            };
            
            // Send notification email to business
            const businessEmailParams = {
              to_email: 'hello@astrixdigitalmedia.com',
              to_name: 'Astrix Team',
              from_name: `${firstName} ${lastName}`,
              message: `New Demo Request Received:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Industry: ${industry}
Company Size: ${companySize}

Business Needs:
${businessNeeds}

---
This request was submitted through the Astrix Digital Media website.`
            };

->

            // Send confirmation email to user
            const userEmailParams = {
              to_name: firstName,
              to_email: email,
              company: company,
              industry: industry,
              company_size: companySize
            };
            
            // Send notification email to business
            const businessEmailParams = {
              from_name: `${firstName} ${lastName}`,
              email: email,
              phone: phone,
              company: company,
              industry: industry,
              company_size: companySize,
              business_needs: businessNeeds
            };
```

```astro
            // Send emails using EmailJS
            Promise.all([
              emailjs.send('YOUR_SERVICE_ID', 'YOUR_USER_TEMPLATE_ID', userEmailParams),
              emailjs.send('YOUR_SERVICE_ID', 'YOUR_BUSINESS_TEMPLATE_ID', businessEmailParams)
            ])

->

            // Send emails using EmailJS
            Promise.all([
              emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_USER_TEMPLATE_ID_HERE', userEmailParams),
              emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_BUSINESS_TEMPLATE_ID_HERE', businessEmailParams)
            ])
```

## 📋 **Now Replace These Placeholders:**

Once you have your EmailJS credentials, replace these in the code:

1. **`YOUR_PUBLIC_KEY_HERE`** → Your EmailJS Public Key
2. **`YOUR_SERVICE_ID_HERE`** → Your Email Service ID  
3. **`YOUR_USER_TEMPLATE_ID_HERE`** → Your User Confirmation Template ID
4. **`YOUR_BUSINESS_TEMPLATE_ID_HERE`** → Your Business Notification Template ID

## �� **Example of Final Code:**

```javascript
emailjs.init("user_abc123def456"); // Your actual public key

emailjs.send('service_xyz789', 'template_user123', userEmailParams),
emailjs.send('service_xyz789', 'template_business456', businessEmailParams)
```

## ✅ **What You'll Get:**

- **User receives:** Professional confirmation email with their details
- **Business receives:** Lead notification email with complete information
- **Real-time delivery:** Emails sent immediately upon form submission
- **Professional branding:** Consistent Astrix Digital Media branding

## 🧪 **Testing:**

1. Fill out the form with your email
2. Click "Book My Demo Call"
3. Check your email for the confirmation
4. Check hello@astrixdigitalmedia.com for the business notification

Let me know when you have your EmailJS credentials and I'll help you replace the placeholders!Perfect! Let me update the code with your 

```javascript
emailjs.init("user_abc123def456"); // Your actual public key

emailjs.send('service_xyz789', 'template_user123', userEmailParams),
emailjs.send('service_xyz789', 'template_business456', businessEmailParams)
```

```javascript
emailjs.init("user_abc123def456"); // Your actual public key

emailjs.send('service_xyz789', 'template_user123', userEmailParams),
emailjs.send('service_xyz789', 'template_business456', businessEmailParams)
```

---

**User**

Alright

---

**Cursor**

Great! Now that you have your EmailJS account set up, let's get your actual credentials and update the code.

## 🔑 **Please provide your EmailJS credentials:**

1. **Public Key** (from Account section)
2. **Service ID** (from Email Services section) 
3. **User Template ID** (from Email Templates section)
4. **Business Template ID** (from Email Templates section)

Once you share these, I'll update the code with your actual credentials and your form will be ready to send real-time confirmation emails!

## �� **What will happen:**
- User submits form → Gets immediate confirmation email
- Business gets notification email with lead details
- Professional branding and messaging
- Real-time delivery

Just paste your EmailJS credentials here and I'll make the final updates to your contact form!

