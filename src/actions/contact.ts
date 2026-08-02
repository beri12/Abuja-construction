"use server";

import {
  contactSchema,
  type ContactInput,
  type ContactState,
} from "@/lib/validation";

/**
 * Server Action handling the contact form submission.
 *
 * Validation runs server-side (never trust the client). The honeypot field
 * silently rejects bots. Integrate an email/CRM provider where indicated.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const errors: NonNullable<ContactState["errors"]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactInput;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  // Honeypot triggered — pretend success without doing anything.
  if (parsed.data.company) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  try {
    // Integration point: forward `parsed.data` to your email service or CRM
    // (e.g. Resend, SendGrid, or a Sanity document). Kept provider-agnostic here.
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      status: "success",
      message: "Thanks for reaching out! Our team will contact you shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
