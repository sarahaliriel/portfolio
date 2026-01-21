"use client";

import React, { useEffect, useMemo, useState } from "react";
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitch from "@/components/language-switch";

export default function FixedButtons() {
  const [hide, setHide] = useState(false);

  const supportsHover = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHide(!!entry?.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!supportsHover) return null;

  return (
    <div
      className={[
        "fixed right-5 bottom-5 z-50 flex flex-col gap-3",
        "transition-all duration-300",
        hide ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}