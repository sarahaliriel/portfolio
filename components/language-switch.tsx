"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="bg-[#ffffff] shadow-lg hover:bg-[#101c3da9] transition-colors w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 dark:bg-gray-950 hover:dark:bg-[#aa9d8d91]"
      onClick={toggleLang}
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      title={lang === "pt" ? "EN" : "PT"}
    >
      <span className="text-sm font-semibold">{lang === "pt" ? "EN" : "PT"}</span>
    </button>
  );
}