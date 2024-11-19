"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";
import { EmailTemplate } from "../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
    to: 'reshusankar@gmail.com',
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};