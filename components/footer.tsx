"use client";

import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();

<div className="h-[120px]" />

  return (
    
    <footer id="site-footer" className="bg-gradient-footer bg-[length:200%_200%] animate-gradient-x text-white py-8 px-6 text-center md:text-left md:flex md:flex-col md:items-start gap-6">
      <p className="text-sm w-full">© 2026 Sarah Aliriel Dutra Farbelow Dumitrache.</p>

      <nav className="flex flex-wrap gap-4 text-sm w-full">
        <a href="#home" className="hover:underline">{t("footer.home")}</a>
        <a href="#about" className="hover:underline">{t("footer.about")}</a>
        <a href="#projects" className="hover:underline">{t("footer.projects")}</a>
        <a href="#skills" className="hover:underline">{t("footer.skills")}</a>
        <a href="#experience" className="hover:underline">{t("footer.experience")}</a>
        <a href="#contact" className="hover:underline">{t("footer.contact")}</a>
      </nav>
    </footer>
  );
}