// EmailJS configuration constants
export const EMAILJS_CONFIG = {
  serviceId: "service_ytsfmye",
  contactTemplateId: "template_6pseikw",
  innovationTemplateId: "template_innovation", // Update this with your actual innovation template ID
  newsletterTemplateId: "template_newsletter", // Update this with your actual newsletter template ID
  publicKey: "m48gXc9XiqzgFu9r4",
}

// Helper function to format date for EmailJS templates
export const formatSubmissionDate = (): string => {
  const now = new Date()
  return now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}
