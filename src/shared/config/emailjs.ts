/**
 * EmailJS template variables (template_p0uqvhr):
 * - from_name  → From Name (sidebar)
 * - name       → Sender name in email body
 * - reply_to   → Reply-To address
 * - subject    → Email subject
 * - message    → Message body
 * - time       → Timestamp shown in email body
 */
export const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
} as const;

export function isEmailJsConfigured(): boolean {
  return Boolean(
    emailJsConfig.serviceId &&
      emailJsConfig.templateId &&
      emailJsConfig.publicKey,
  );
}
