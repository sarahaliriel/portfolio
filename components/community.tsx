"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FiUsers, FiMessageSquare, FiZap, FiX } from "react-icons/fi";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Community() {
  const { ref } = useSectionInView("community");
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  };

  const modalOverlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalCard = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
    exit: { opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } },
  };

  const modalCardsContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const modalCardItem = {
    hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="community" ref={ref} className="text-center scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("community.heading")}</SectionHeading>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-[58rem]"
      >
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/60 px-6 py-8 shadow-lg shadow-black/[0.03] backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:px-10"
        >
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />

          <motion.div
            className="mb-5 flex flex-wrap items-center justify-center gap-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <FiUsers />, label: t("community.badgeMembers"), weight: "font-semibold text-gray-800 dark:text-gray-200 shadow-sm" },
              { icon: <FiMessageSquare />, label: t("community.badgeChat"), weight: "font-medium text-gray-700 dark:text-gray-200" },
              { icon: <FiZap />, label: t("community.badgeActive"), weight: "font-medium text-gray-700 dark:text-gray-200" },
            ].map((badge, index) => (
              <motion.span
                key={index}
                variants={fadeInAnimationVariants}
                custom={index}
                whileHover={{ y: -5 }}
                className={[
                  "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm backdrop-blur dark:border-white/10 dark:bg-white/10 transition-all duration-200 ease-out",
                  badge.weight,
                ].join(" ")}
              >
                {badge.icon}
                {badge.label}
              </motion.span>
            ))}
          </motion.div>

          <p className="mx-auto mb-6 max-w-[46rem] text-gray-700 dark:text-gray-300">{t("community.desc")}</p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://discord.gg/NFsS9NXNPm"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.98] bg-[#5865F2]"
            >
              <FaDiscord className="text-xl" />
              {t("community.ctaJoin")}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98] border border-black/10 bg-white/70 text-gray-800 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
            >
              {t("community.ctaHow")}
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{t("community.note")}</p>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              variants={modalCard}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full max-w-[38rem] rounded-2xl border border-black/10 bg-white/90 p-6 text-left shadow-2xl backdrop-blur dark:border-white/10 dark:bg-gray-950/90"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{t("community.modalTitle")}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{t("community.modalSubtitle")}</p>
                </div>

                <button
                  type="button"
                  className="rounded-full p-2 transition hover:scale-105 border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10"
                  onClick={() => setOpen(false)}
                  aria-label={t("community.modalClose")}
                >
                  <FiX className="text-gray-800 dark:text-gray-200" />
                </button>
              </div>

              <motion.div
                variants={modalCardsContainer}
                initial="hidden"
                animate="show"
                className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <motion.div
                  variants={modalCardItem}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-4 transition-all duration-200 ease-out dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{t("community.card1Title")}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{t("community.card1Body")}</p>
                </motion.div>

                <motion.div
                  variants={modalCardItem}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-4 transition-all duration-200 ease-out dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{t("community.card2Title")}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{t("community.card2Body")}</p>
                </motion.div>

                <motion.div
                  variants={modalCardItem}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-4 transition-all duration-200 ease-out dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{t("community.card3Title")}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{t("community.card3Body")}</p>
                </motion.div>

                <motion.div
                  variants={modalCardItem}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-4 transition-all duration-200 ease-out dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{t("community.card4Title")}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{t("community.card4Body")}</p>
                </motion.div>
              </motion.div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-600 dark:text-white/70">{t("community.modalFooter")}</p>

                <Link
                  href="https://discord.gg/NFsS9NXNPm"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.98] bg-[#5865F2]"
                >
                  <FaDiscord className="text-xl" />
                  {t("community.ctaJoin")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}