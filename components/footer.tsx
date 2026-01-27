"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("footer.home"), href: "#home" },
    { label: t("footer.about"), href: "#about" },
    { label: t("footer.projects"), href: "#projects" },
    { label: t("footer.skills"), href: "#skills" },
    { label: t("footer.experience"), href: "#experience" },
    { label: t("footer.community"), href: "#community" },
    { label: t("footer.contact"), href: "#contact" },
  ];

  const socials = [
    { label: "Discord", href: "https://discord.com/users/942126894478950530", icon: <FaDiscord /> },
    { label: "GitHub", href: "https://github.com/sarahaliriel", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sarah-dumitrache", icon: <FaLinkedin /> },
    { label: t("footer.email"), href: "mailto:dumitrachebusiness@gmail.com", icon: <FaEnvelope /> },
    { label: "Instagram", href: "https://www.instagram.com/chazinhodociel/", icon: <FaInstagram /> },
    { label: t("footer.community"), href: "https://discord.gg/NFsS9NXNPm", icon: <FaDiscord /> },
  ];

  return (
    <footer id="footer" className="relative mt-16">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent via-black/[0.04] to-transparent dark:via-white/[0.06]" />

      <div className="border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-base font-semibold text-black/90 dark:text-white">Sarah Aliriel Dumitrache</p>
                  <p className="text-sm text-black/60 dark:text-white/60">{t("footer.role")}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
                    aria-label={s.label}
                  >
                    <span className="text-base transition-transform duration-300 group-hover:scale-110">{s.icon}</span>
                    <span className="relative">
                      {s.label}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#101c3d] dark:bg-[#AA9D8D] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <p className="text-sm font-semibold text-black/80 dark:text-white/80">{t("footer.navHeading")}</p>

              <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group relative inline-flex items-center justify-between gap-2 text-black/65 dark:text-white/60 transition-colors duration-300 hover:text-black dark:hover:text-white"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#101c3d] dark:bg-[#AA9D8D] transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span
                      className="text-[0.9rem] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm font-semibold text-black/80 dark:text-white/80">{t("footer.statusHeading")}</p>

              <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#101c3d]/60 dark:bg-[#AA9D8D]/70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#101c3d] dark:bg-[#AA9D8D]" />
                  </span>

                  <p className="text-sm text-black/75 dark:text-white/70">{t("footer.statusLine")}</p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-black/55 dark:text-white/55">{t("footer.statusBody")}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-black/10 dark:border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-black/55 dark:text-white/55">
              © {year} Sarah Aliriel Dutra Farbelow Dumitrache. {t("footer.rights")}
            </p>
            <p className="text-xs text-black/55 dark:text-white/55">{t("footer.made")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}