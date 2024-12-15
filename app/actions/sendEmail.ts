// "use server";

// import React from "react";
// import { Resend } from "resend";
// import { getErrorMessage, validateString } from "../lib/utils";
// import ContactFormEmail from "../emails/ContactForm";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   // simple server-side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   try {
//     data = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: "reshusankar@gmail.com",
//       subject: "Message from contact form",
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };









"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";
import { EmailTemplate } from "../components/EmailTemplate";
import ContactFormEmail from "../emails/ContactForm";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
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
    subject: 'Message from contact form',
    react: React.createElement(ContactFormEmail, {
              message: message,
              senderEmail: senderEmail,
            }),
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