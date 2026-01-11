"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
<section
  ref={ref}
  id="home"
  className="mb-28 scroll-mt-[100rem] flex flex-col sm:flex-row items-center justify-between gap-8 px-4 sm:px-16"
>
  <motion.div
    className="flex-1 flex justify-center sm:justify-start"
    initial={{ opacity: 0, y: 0 }}          
    animate={{ opacity: 1, y: ["0%", "-5%", "0%"] }} 
    transition={{
      opacity: { duration: 0.5, delay: 0.1 },       
      y: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }, 
    }}
  >
    <Image
      src="/sarah dumitrache.jpg"
      alt="Sarah"
      width={400}
      height={400}
      quality={95}
      priority
      className="rounded-full object-cover shadow-2xl"
    />
  </motion.div>

  <motion.div
    className="flex-1 text-center sm:text-right"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    <h1 className="mb-6 text-2xl sm:text-4xl font-medium !leading-[1.5]">
      <span className="font-bold">Olá!</span> Sou{" "}
      <span className="font-bold">Sarah Dumitrache</span>.
    </h1>
    <h2 className="mb-6 text-2xl sm:text-2xl font-medium !leading-[1.5]">
      Desenvolvedora Front End com paixão em criar{" "}
      <span className="font-bold">interfaces criativas e funcionais</span>.
    </h2>

  <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-lg font-medium mt-4">
    <a
      className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href="/cv.pdf"
      download
    >
      Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <a
      className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://github.com/sarahaliriel"
      target="_blank"
    >
      <FaGithub />
    </a>

    <a
      className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://wa.me/351914137185"
      target="_blank"
    >
      <FaWhatsapp />
    </a>
  </div>
</motion.div>
</section>
  );
}
