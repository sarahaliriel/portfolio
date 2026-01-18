"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const onChange = () => setEnabled(media.matches);

    setEnabled(media.matches);
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const addView = () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }

      setIsHovering(true);

      if (openTimer.current) clearTimeout(openTimer.current);
      openTimer.current = setTimeout(() => {
        setShowLabel(true);
      }, 120);
    };

    const removeView = () => {
      if (openTimer.current) {
        clearTimeout(openTimer.current);
        openTimer.current = null;
      }

      setShowLabel(false);

      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => {
        setIsHovering(false);
      }, 100);
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hit = target.closest?.('[data-cursor="view"]');
      if (hit) addView();
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const from = target.closest?.('[data-cursor="view"]');
      const to = (e.relatedTarget as HTMLElement | null)?.closest?.(
        '[data-cursor="view"]'
      );

      if (from && !to) removeView();
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerout", onPointerOut, true);

      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      style={{ transform: "translate(-50%, -50%)" }}
      className={`
        fixed top-0 left-0 z-[9999] pointer-events-none
        flex items-center justify-center rounded-full
        transition-[width,height,background-color] duration-300 ease-out
        ${
          isHovering
            ? `
              w-16 h-10
              bg-[#101c3d]
              dark:bg-[#AA9D8D]
            `
            : `
              w-3 h-3
              bg-[#101c3d]
              dark:bg-[#AA9D8D]
            `
        }
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
