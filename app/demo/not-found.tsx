"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function DemoNotFound() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-9xl sm:text-5xl font-bold mb-4 animate-fadeIn">
        404
      </h1>

      <p className="text-muted-foreground max-w-md mb-6">
        {lang === "pt"
          ? "Projeto.deploy() ainda não executado."
          : "Project.deploy() not executed yet."}
      </p>

      <a
        href="/"
        className="relative inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {lang === "pt" ? "Voltar ao portfólio" : "Back to portfolio"}
      </a>
    </div>
  );
}