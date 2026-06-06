import { useState, type FormEvent } from "react";
import { isEmailJsConfigured } from "@/shared/config/emailjs";
import { CONTACT_SUBJECTS } from "@/utils/constants";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: CONTACT_SUBJECTS[0],
  message: "",
};

export function useContact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmailJsReady = isEmailJsConfigured();

  const updateField = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isEmailJsReady) {
      setError(
        "Email service is not configured yet. Add EmailJS keys to .env.local.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again in a moment.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    updateField,
    handleSubmit,
    isSubmitting,
    submitted,
    error,
    isEmailJsReady,
  };
}
