"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section
  ref={ref}
  id="projects"
  className="py-10 md:py-20 lg:py-24 scroll-mt-28 mb-12">

      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <SectionHeading>Projetos</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
