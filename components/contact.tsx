"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <SectionHeading>{t("contact.heading")}</SectionHeading>
      </div>

      <p className="text-center text-gray-600 dark:text-white/70 mt-2 mb-12">{t("contact.subtitle")}</p>

      <div className="max-w-3xl mx-auto bg-white dark:bg-white/10 rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur">
        <form
          className="flex flex-col gap-4"
          action={async (formData: FormData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(t("contact.success"));
          }}
        >
          <input
            type="text"
            name="senderName"
            placeholder={t("contact.name")}
            required
            maxLength={100}
            className="h-12 px-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/80 text-black dark:text-black transition outline-none"
          />

          <input
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t("contact.email")}
            className="h-12 px-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/80 text-black dark:text-black transition outline-none"
          />

          <textarea
            name="message"
            placeholder={t("contact.message")}
            required
            maxLength={5000}
            className="min-h-[160px] px-4 py-3 rounded-xl border border-black/10 bg-white dark:bg-white/80 text-black dark:text-black transition outline-none resize-none"
          />

          <SubmitBtn />
        </form>

        <div className="my-10 h-px bg-black/10 dark:bg-white/10" />

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-white/70">{t("contact.find")}</p>

          <div className="flex gap-6">
            <a href="mailto:dumitrachebusiness@gmail.com" className="flex items-center gap-2 text-sm hover:opacity-70 transition">
              <FaEnvelope className="text-lg" />
              Email
            </a>

            <a
              href="https://www.instagram.com/chazinhodociel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition"
            >
              <FaInstagram className="text-lg" />
              Instagram
            </a>

            <a
              href="https://discord.com/users/942126894478950530"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition"
            >
              <FaDiscord className="text-lg" />
              Discord
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}