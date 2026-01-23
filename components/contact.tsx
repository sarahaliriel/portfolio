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
      className="py-24 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading>{t("contact.heading")}</SectionHeading>
          <p className="text-gray-600 dark:text-white/70 mt-2">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-2xl shadow-black/[0.08] dark:shadow-black/40 backdrop-blur-xl p-7 sm:p-10 lg:p-12">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
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
              className="h-14 w-full rounded-2xl px-5 text-[0.98rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 text-black dark:text-white placeholder-black/45 dark:placeholder-white/45 outline-none transition focus:border-black/20 dark:focus:border-white/20 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/15"
            />

            <input
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder={t("contact.email")}
              className="h-14 w-full rounded-2xl px-5 text-[0.98rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 text-black dark:text-white placeholder-black/45 dark:placeholder-white/45 outline-none transition focus:border-black/20 dark:focus:border-white/20 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/15"
            />

            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
              maxLength={5000}
              className="md:col-span-2 min-h-[210px] w-full rounded-2xl px-5 py-4 text-[0.98rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 text-black dark:text-white placeholder-black/45 dark:placeholder-white/45 outline-none transition focus:border-black/20 dark:focus:border-white/20 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/15 resize-none"
            />

            <div className="md:col-span-2 flex flex-col gap-3 pt-1">
              <SubmitBtn />

            </div>
          </form>

          <div className="my-10 h-px bg-black/10 dark:bg-white/10" />

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-white/70">{t("contact.find")}</p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:dumitrachebusiness@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaEnvelope className="text-lg" />
                Email
              </a>

              <a
                href="https://www.instagram.com/chazinhodociel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>

              <a
                href="https://discord.com/users/942126894478950530"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaDiscord className="text-lg" />
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}