"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const raf = useRef<number | null>(null);
  const x = useRef(0);
  const y = useRef(0);

useEffect(() => {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const update = () => {
    const shouldEnable = finePointer.matches && !reduced.matches;
    setEnabled(shouldEnable);

    if (shouldEnable) {
      document.documentElement.classList.add("cursor-hidden");
      document.body.style.cursor = "none";
    } else {
      document.documentElement.classList.remove("cursor-hidden");
      document.body.style.cursor = "auto";
    }
  };

  update();

  finePointer.addEventListener("change", update);
  reduced.addEventListener("change", update);

  return () => {
    finePointer.removeEventListener("change", update);
    reduced.removeEventListener("change", update);
    document.documentElement.classList.remove("cursor-hidden");
    document.body.style.cursor = "auto";
  };
}, []);

  useEffect(() => {
    if (!enabled) return;

    const tick = () => {
      raf.current = null;
      const el = cursorRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${x.current}px, ${y.current}px, 0) translate(-50%, -50%)`;
    };

    const move = (e: PointerEvent) => {
      x.current = e.clientX;
      y.current = e.clientY;
      if (raf.current == null) raf.current = requestAnimationFrame(tick);
    };

    const addView = () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setIsHovering(true);

      if (openTimer.current) clearTimeout(openTimer.current);
      openTimer.current = setTimeout(() => {
        setShowLabel(true);
      }, 120);
    };

    const removeView = () => {
      if (openTimer.current) clearTimeout(openTimer.current);
      setShowLabel(false);

      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => {
        setIsHovering(false);
      }, 100);
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('[data-cursor="view"]')) addView();
    };

    const onPointerOut = (e: PointerEvent) => {
      const from = (e.target as HTMLElement | null)?.closest('[data-cursor="view"]');
      const to = (e.relatedTarget as HTMLElement | null)?.closest('[data-cursor="view"]');
      if (from && !to) removeView();
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerout", onPointerOut, true);

      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`
        fixed top-0 left-0 z-[9999] pointer-events-none
        flex items-center justify-center rounded-full
        transition-[width,height,background-color] duration-300 ease-out
        ${isHovering ? "w-16 h-10" : "w-3 h-3"}
        bg-[#101c3d] dark:bg-[#AA9D8D]
      `}
    >
      <span
        className={`
          text-sm font-medium whitespace-nowrap
          transition-all duration-200 ease-out
          ${showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          text-white dark:text-black
        `}
      >
        View
      </span>
    </div>
  );
}