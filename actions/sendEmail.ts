"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { resolveMx } from "node:dns/promises";

const resend = new Resend(process.env.RESEND_API_KEY as string);

function normalizeToString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

async function hasMxRecord(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  try {
    const mx = await resolveMx(domain);
    return Array.isArray(mx) && mx.length > 0;
  } catch {
    return false;
  }
}

export const sendEmail = async (formData: FormData) => {
  const senderEmailRaw = formData.get("senderEmail");
  const messageRaw = formData.get("message");
  const senderNameRaw = formData.get("senderName");

  const senderEmail = normalizeToString(senderEmailRaw);
  const message = normalizeToString(messageRaw);
  const senderName = normalizeToString(senderNameRaw);

  if (!validateString(senderEmail, 320) || !isValidEmailFormat(senderEmail)) {
    return { error: "Email do remetente inválido." };
  }

  const mxOk = await hasMxRecord(senderEmail);
  if (!mxOk) {
    return { error: "O domínio do email parece inválido (sem MX). Verifica o email e tenta novamente." };
  }

  if (!validateString(message, 5000) || message.length < 5) {
    return { error: "Mensagem inválida (muito curta ou fora do limite)." };
  }

  const safeSenderName =
    validateString(senderName, 120) && senderName.length >= 2 ? senderName : "Anônimo";

  try {
    const data = await resend.emails.send({
      from: "Portfólio Sarah <onboarding@resend.dev>",
      to: "dumitrachebusiness@gmail.com",
      subject: `Nova mensagem do portfólio — ${safeSenderName}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
        senderName: safeSenderName,
        submittedAt: new Date().toISOString(),
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};