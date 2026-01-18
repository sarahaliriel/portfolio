import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderName: string;
  senderEmail: string;
  submittedAt?: string;
};

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("pt-PT", { dateStyle: "full", timeStyle: "short" });
}

export default function ContactFormEmail({
  message,
  senderName,
  senderEmail,
  submittedAt,
}: ContactFormEmailProps) {
  const when = formatDate(submittedAt);

  return (
    <Html>
      <Head />
      <Preview>Nova mensagem do teu portfólio</Preview>

      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container className="mx-auto px-4 py-10">
            <Section className="bg-white border border-black/10 rounded-2xl overflow-hidden">
              <Section className="px-8 py-7">
                <Text className="text-xs uppercase tracking-widest text-gray-500 m-0">
                  Portfólio - Formulário de Contacto
                </Text>

                <Heading className="text-2xl font-bold mt-2 mb-0 leading-tight">
                  Nova mensagem recebida
                </Heading>

                {when ? (
                  <Text className="text-sm text-gray-600 mt-2 mb-0">
                    Recebida em: <span className="font-medium text-gray-800">{when}</span>
                  </Text>
                ) : (
                  <Text className="text-sm text-gray-600 mt-2 mb-0">
                    Recebida agora mesmo.
                  </Text>
                )}

                <Hr className="my-6 border-black/10" />

                <Section className="bg-gray-50 border border-black/10 rounded-xl px-5 py-4">
                  <Text className="m-0 text-sm text-gray-600">De</Text>
                  <Text className="m-0 text-lg font-semibold text-gray-900">
                    {senderName}
                  </Text>
                  <Text className="m-0 text-sm text-gray-700">
                    {senderEmail}
                  </Text>
                </Section>

                <Text className="text-sm text-gray-600 mt-6 mb-2">
                  Mensagem
                </Text>

                <Section className="bg-white border border-black/10 rounded-xl px-5 py-4">
                  <Text className="m-0 text-[15px] leading-relaxed text-gray-900 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Section>

                <Hr className="my-6 border-black/10" />

                <Text className="text-xs text-gray-500 m-0 leading-relaxed">
                  Dica: podes responder diretamente a este email — o Reply-To está configurado com o email do remetente.
                </Text>
              </Section>

              <Section className="bg-gray-50 px-8 py-5 border-t border-black/10">
                <Text className="text-xs text-gray-500 m-0">
                  © {new Date().getFullYear()} • Sarah Dumitrache
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}