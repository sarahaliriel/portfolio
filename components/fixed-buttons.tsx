"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";

export default function FixedButtons() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "0px 0px -120px 0px" }
    );

    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={[
        "fixed bottom-14 right-5 z-[999] flex flex-col items-center gap-3",
        "transition-all duration-300 ease-out",
        hidden ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}