"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -5 }}
            className="
              rounded-xl px-5 py-3
              border border-black/15 dark:border-white/20
              bg-white/10 dark:bg-white/10
              text-black/70 dark:text-white/80
              transition-all duration-200 ease-out

              hover:text-[#101c3d] hover:border-[#101c3d]
              dark:hover:text-[#AA9D8D] dark:hover:border-[#AA9D8D]
            "
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}