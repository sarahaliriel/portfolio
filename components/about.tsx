"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3 text-justify">
        Olá! Sou Sarah Dumitrache, desenvolvedora front-end com formação em Informática de Sistemas e{" "}
        <span className="font-medium">paixão</span> por tecnologia e desenvolvimento web. {" "}
        Dedico-me a aplicar meus conhecimentos em projetos práticos, com foco na criação de interfaces funcionais, responsivas e centradas no utilizador.
        Gosto de transformar ideias em <span className="font-medium">soluções digitais</span>, combinando programação, design e usabilidade.
        Estou sempre em busca de novos desafios e oportunidades para evoluir como desenvolvedora e contribuir <span className="font-medium">com projetos com impacto real</span>.
      </p>

      <p className="text-justify">
        <span className="italic">Quando não estou "codando"</span>, gosto de ver filmes, ler livros, editar vídeos e ouvir música. Valorizo o aprendizado contínuo e tenho prazer em adquirir novos conhecimentos,
        tanto na área tecnológica quanto em outros contextos criativos.{" "}
      </p>
    </motion.section>
  );
}
