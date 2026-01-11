"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName");

  if (!validateString(senderEmail, 500)) {
    return { error: "Email do remetente inválido" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Mensagem inválida" };
  }

  const safeSenderName =
    typeof senderName === "string" && senderName.trim() !== ""
      ? senderName
      : "Anônimo";

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dumitrachefilha@gmail.com",
      subject: "Mensagem do Formulário de Contacto",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: safeSenderName,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
