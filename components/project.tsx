"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  tags?: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
};

export default function Project({
  title,
  description,
  tags = [],
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <motion.div className="group" data-cursor="view">
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-white/70 dark:bg-white/10
          border border-black/5 dark:border-white/10
          shadow-[0_18px_45px_rgba(0,0,0,0.10)]
          transition-all duration-300
          hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]
        "
      >
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="p-6 sm:p-7 text-left">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white">
              {title}
            </h3>
          </div>

          <p className="mt-3 text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>

          {tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    rounded-full px-3 py-1.5 text-[0.72rem]
                    uppercase tracking-wider
                    bg-[#101c3d] text-white
                    dark:bg-white/10 dark:text-white
                    border border-black/0 dark:border-white/10
                  "
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-xl px-4 py-2
                  bg-[#101c3d] text-white
                  transition
                "
              >
                <FaGithub /> GitHub
              </motion.a>
            )}

            {liveUrl && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={liveUrl}
                  className="
                    inline-flex items-center gap-2
                    rounded-xl px-4 py-2
                    bg-[#AA9D8D] text-white
                    transition
                  "
                >
                  <FaExternalLinkAlt /> Demo
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]
            dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]
          "
        />
      </div>
    </motion.div>
  );
}
