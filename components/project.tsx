"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="group">
      <div
        className="bg-gray-100 dark:bg-white/10 border border-black/5 
        rounded-lg shadow-lg overflow-hidden 
        transition-all duration-300 
        hover:shadow-xl hover:-translate-y-1"
      >
        
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 
            group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {title}
          </h3>

        <p className="text-gray-700 dark:text-white/70 mb-4 min-h-[4rem]">
            {description}
        </p>


          <ul className="flex flex-wrap gap-2 my-6">
            {tags.map((tag, index) => (
              <motion.li
                key={index}
                whileHover={{ backgroundColor: "#39436d" }}
                whileTap={{ scale: 0.95, backgroundColor: "#2b2f5a" }}
                className="bg-[#101c3d] px-3 py-1 text-[0.7rem] uppercase 
                tracking-wider text-white rounded-full cursor-pointer"
              >
                {tag}
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-4">
            {githubUrl && (
              <motion.a
                whileHover={{ backgroundColor: "#2b2f5a" }}
                whileTap={{ scale: 0.95 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 
                px-3 py-2 bg-[#101c3d] text-white rounded"
              >
                <FaGithub /> GitHub
              </motion.a>
            )}

{liveUrl && (
  <motion.div
    whileHover={{ backgroundColor: "#f6e1c8" }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex rounded"
  >
    <Link
      href={liveUrl}
      className="inline-flex items-center gap-2 
      px-3 py-2 bg-[#AA9D8D] text-white rounded"
    >
      <FaExternalLinkAlt /> Demo
    </Link>
  </motion.div>
)}

          </div>
        </div>
      </div>
    </motion.div>
  );
}
