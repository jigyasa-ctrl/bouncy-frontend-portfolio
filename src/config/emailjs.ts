// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{message}} - message content
//    - {{to_email}} - recipient email (jigyasaupadhyay60@gmail.com)
// 5. Get your Service ID, Template ID, and Public Key from the dashboard
// 6. Replace the placeholder values below with your actual credentials

export const EMAILJS_CONFIG = {
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
  toEmail: 'jigyasaupadhyay60@gmail.com'
};

// Email template variables that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  phone: string;
}
