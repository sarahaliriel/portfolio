"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLinks } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { lang } = useLanguage();
  const links = useMemo(() => getLinks(lang), [lang]);

  const [open, setOpen] = useState(false);

  const overlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const drawer = {
    hidden: { y: -14, opacity: 0, scale: 0.98 },
    show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
    exit: { y: -10, opacity: 0, scale: 0.98, transition: { duration: 0.18 } },
  };

  const list = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
  };

  const row = {
    hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.32, ease: "easeOut" } },
  };

  function handleClick(id: any) {
    setActiveSection(id);
    setTimeOfLastClick(Date.now());
  }

  return (
    <header className="z-[999] relative">
      <div className="sm:hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[4.5rem] border-b border-black/10 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:bg-gray-950/70 dark:border-white/10"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <div className="fixed top-0 left-0 right-0 h-[4.5rem] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#101c3d] dark:bg-[#AA9D8D]" />
            <p className="text-sm font-semibold text-black/80 dark:text-white/80">Menu</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 p-2.5 text-black/80 backdrop-blur transition hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
            aria-label="Abrir menu"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              variants={overlay}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
              fixed inset-0 z-[1000]
              bg-black/20 dark:bg-black/50
              backdrop-blur-[2px]
"

              onClick={() => setOpen(false)}
            >
              <motion.div
                variants={drawer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="
                mx-4 mt-4 overflow-hidden rounded-2xl
                border border-black/10
                bg-white/90
                shadow-xl shadow-black/10
                backdrop-blur-lg
              dark:border-white/10
              dark:bg-gray-950/90
"

                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-4">
                  <p className="text-sm font-semibold text-black/80 dark:text-white/80">Navegação</p>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 p-2 text-black/80 backdrop-blur transition hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                    aria-label="Fechar menu"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                <motion.ul variants={list} initial="hidden" animate="show" className="px-3 pb-4">
                  {links.map((link) => {
                    const isActive = activeSection === link.id;

                    return (
                      <motion.li key={link.hash} variants={row}>
                        <a
                          href={link.hash}
                          onClick={() => {
                            handleClick(link.id);
                            setOpen(false);
                          }}
                          className={clsx(
                            "relative flex items-center justify-between rounded-2xl px-4 py-3 transition",
                            "text-black/75 dark:text-white/75",
                            "hover:bg-black/5 dark:hover:bg-white/10",
                            isActive && "bg-black/[0.035] dark:bg-white/10 text-black dark:text-white"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={clsx(
                                "h-2.5 w-2.5 rounded-full transition",
                                isActive ? "bg-[#101c3d] dark:bg-[#AA9D8D]" : "bg-black/20 dark:bg-white/20"
                              )}
                            />
                            <span className="font-medium">{link.name}</span>
                          </span>

                          <span className={clsx("text-sm transition", isActive ? "opacity-100" : "opacity-40")}>↗</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="hidden sm:block">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[44rem] md:w-[52rem] lg:w-[45rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full sm:w-[44rem] md:w-[52rem] lg:w-[60rem]">
          <ul className="mx-auto flex h-full w-full items-center justify-start sm:justify-center gap-1 sm:gap-3 px-2 sm:px-4 text-[0.88rem] sm:text-[0.92rem] font-medium text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-none">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative shrink-0"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  className={clsx(
                    "relative flex items-center justify-center px-2.5 py-2 sm:px-3 sm:py-2.5 transition dark:text-gray-500 dark:hover:text-gray-300 hover:text-gray-950",
                    { "text-gray-950 dark:text-gray-200": activeSection === link.id }
                  )}
                  href={link.hash}
                  onClick={() => handleClick(link.id)}
                >
                  {link.name}

                  {link.id === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}