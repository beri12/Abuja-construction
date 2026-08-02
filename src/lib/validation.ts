import { z } from "zod";

/** Shared contact form schema — used on both client and server. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (10+ characters).")
    .max(2000),
  // Honeypot field: must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof ContactInput, string>>;
}
