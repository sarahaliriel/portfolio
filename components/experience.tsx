"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getExperiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { theme } = useTheme();
  const { lang, t } = useLanguage();
  const experiencesData = useMemo(() => getExperiencesData(lang), [lang]);

  return (
    <section id="experience" ref={ref} className="text-center scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("experience.heading")}</SectionHeading>

      <VerticalTimeline lineColor={theme === "light" ? "#000" : "#fff"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "#f3f4f6" : "#0f0f0f",
              boxShadow: "none",
              border: theme === "light" ? "1px solid rgb(0,0,0)" : "1px solid rgba(255,255,255,0.2)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              color: theme === "light" ? "black" : "white",
            }}
            contentArrowStyle={{
              borderRight: theme === "light" ? "0.4rem solid rgb(0,0,0)" : "0.4rem solid white",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "#0f0f0f",
              color: theme === "light" ? "black" : "white",
              border: theme === "light" ? "1px solid black" : "1px solid rgba(255,255,255,0.3)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize text-black dark:text-white">{item.title}</h3>

            {item.location ? (
              <p className="!mt-1 !font-normal text-gray-600 dark:text-white/60">{item.location}</p>
            ) : null}

            <p className="!mt-2 !font-normal text-gray-700 dark:text-white/70">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}