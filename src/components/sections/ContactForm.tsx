"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitContact } from "@/actions/contact";
import type { ContactState } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

const fieldClass =
  "mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "success" ? (
        <p
          role="status"
          className="flex items-center gap-2 rounded-md border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      ) : null}

      {state.status === "error" && !state.errors ? (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-md border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      ) : null}

      {/* Honeypot: hidden from users, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className={cn(fieldClass, state.errors?.name && "border-danger")}
          />
          {state.errors?.name ? (
            <p id="name-error" className="mt-1 text-xs text-danger">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className={cn(fieldClass, state.errors?.email && "border-danger")}
          />
          {state.errors?.email ? (
            <p id="email-error" className="mt-1 text-xs text-danger">
              {state.errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Phone <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y", state.errors?.message && "border-danger")}
        />
        {state.errors?.message ? (
          <p id="message-error" className="mt-1 text-xs text-danger">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <SubmitButton />
    </form>
  );
}
