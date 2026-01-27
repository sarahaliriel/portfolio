"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitch from "@/components/language-switch";

export default function FixedButtons() {
  const [hide, setHide] = useState(false);

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

  return (
    <div
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      className={[
        "fixed right-5 z-50 flex flex-col gap-3",
        "transition-all duration-300",
        hide ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      <div className="ios-no-blur">
        <LanguageSwitch />
      </div>
      <div className="ios-no-blur">
        <ThemeSwitch />
      </div>
    </div>
  );
}