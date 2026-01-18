"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiCode, FiLayers, FiTarget } from "react-icons/fi";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useLanguage();

  const paragraphs = useMemo(() => [t("about.p1"), t("about.p2"), t("about.p3")], [t]);

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cards = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars = useMemo(
    () => [
      {
        icon: <FiCode className="text-[1.15rem] text-black/70 dark:text-white/80" />,
        title: t("about.card1.title"),
        desc: t("about.card1.desc"),
      },
      {
        icon: <FiLayers className="text-[1.15rem] text-black/70 dark:text-white/80" />,
        title: t("about.card2.title"),
        desc: t("about.card2.desc"),
      },
      {
        icon: <FiTarget className="text-[1.15rem] text-black/70 dark:text-white/80" />,
        title: t("about.card3.title"),
        desc: t("about.card3.desc"),
      },
    ],
    [t]
  );

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
    >
      <SectionHeading>{t("about.heading")}</SectionHeading>

      <div className="mx-auto mt-6 max-w-[46rem]">
        <div className="mx-auto mb-8 h-[2px] w-24 rounded-full bg-black/20 dark:bg-white/20" />

        <div className="flex flex-col gap-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={line}
              className="text-[1.02rem] sm:text-[1.05rem] text-black/80 dark:text-white/80"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div className="mx-auto mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3" variants={cards}>
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-black/10 bg-white/30 px-6 py-6 backdrop-blur-md transition dark:border-white/15 dark:bg-white/5"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">
              {p.icon}
            </div>
            <h3 className="text-[1.05rem] font-semibold text-black/90 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-black/65 dark:text-white/65">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p variants={line} className="mx-auto mt-10 max-w-[44rem] text-sm text-black/55 dark:text-white/55">
        {t("about.cta")}
      </motion.p>
    </motion.section>
  );
}