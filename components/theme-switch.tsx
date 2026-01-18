"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bg-[#ffffff] shadow-lg hover:bg-[#101c3da9] transition-colors w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 dark:bg-gray-950 hover:dark:bg-[#aa9d8d91]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}