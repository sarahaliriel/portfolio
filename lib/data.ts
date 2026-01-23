import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import demoImg from "@/public/demo.png";
import honnepayImg from "@/public/honnepay.png";
import type { StaticImageData } from "next/image";

export type Lang = "pt" | "en";

export type SectionId = "home" | "about" | "projects" | "skills" | "experience" | "community" | "contact";

type Section = {
  id: SectionId;
  hash: string;
  label: { pt: string; en: string };
};

export const sections: readonly Section[] = [
  { id: "home", hash: "#home", label: { pt: "Início", en: "Home" } },
  { id: "about", hash: "#about", label: { pt: "Sobre", en: "About" } },
  { id: "projects", hash: "#projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "skills", hash: "#skills", label: { pt: "Skills", en: "Skills" } },
  { id: "experience", hash: "#experience", label: { pt: "Experiência", en: "Experience" } },
  { id: "community", hash: "#community", label: { pt: "Comunidade", en: "Community" } },
  { id: "contact", hash: "#contact", label: { pt: "Contato", en: "Contact" } },
];

export function getLinks(lang: Lang): Array<{ id: SectionId; hash: string; name: string }> {
  return sections.map((s) => ({ id: s.id, hash: s.hash, name: s.label[lang] }));
}

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
};

export function getExperiencesData(lang: Lang): ExperienceItem[] {
  const pt: ExperienceItem[] = [
    {
      title: "Ensino Profissional",
      location: "Lisboa, PT",
      description:
        "Tudo começou em 2022, quando entrei para o curso profissional de Informática de Sistemas na Casa Pia de Lisboa. Foi nesse período que tive meu primeiro contato com o mundo da tecnologia e descobri um grande interesse pela área de desenvolvimento. Durante o curso, desenvolvi projetos práticos em front-end e back-end, consolidando meus conhecimentos em desenvolvimento web.",
      icon: React.createElement(LuGraduationCap),
      date: "2022 - 2023",
    },
    {
      title: "Estudos e Projetos",
      location: "",
      description:
        "Ainda no curso, tive a oportunidade de estagiar na Comudel, onde colaborei no projeto principal de treino de sistemas de Inteligência Artificial para análise de faturas. Minhas atividades incluíram criação e validação de perguntas e respostas para modelos de IA, pesquisa técnica em Machine Learning e bases de dados, além da anotação e correção de respostas para melhorar a precisão do modelo. Também auxiliei na organização e análise de dados utilizados no treino, adquirindo experiência prática em IA e full-stack development.",
      icon: React.createElement(CgWorkAlt),
      date: "2024",
    },
    {
      title: "Front-End Developer",
      location: "Lisboa, PT",
      description:
        "No início deste ano, participei de um Bootcamp da 01 Talent, onde não apenas coloquei em prática os conhecimentos que já possuía, mas também aperfeiçoei minhas habilidades em HTML, CSS e JavaScript. Hoje, continuo me dedicando à área, aprendendo novas tecnologias e desenvolvendo projetos que refletem minha evolução como futura desenvolvedora full-stack. Atualmente, atuo no Bitalk em Marketing Digital, mas meu principal interesse permanece no desenvolvimento web.",
      icon: React.createElement(FaReact),
      date: "2025 - Atualmente",
    },
  ];

  const en: ExperienceItem[] = [
    {
      title: "Vocational Education",
      location: "Lisbon, PT",
      description:
        "It all started in 2022 when I joined the vocational program in Information Systems at Casa Pia de Lisboa. That’s when I had my first contact with tech and discovered a strong interest in development. During the program, I built practical front-end and back-end projects, strengthening my web development skills.",
      icon: React.createElement(LuGraduationCap),
      date: "2022 - 2023",
    },
    {
      title: "Studies & Projects",
      location: "",
      description:
        "Still during the program, I had the chance to intern at Comudel, contributing to a core project training Artificial Intelligence systems for invoice analysis. My tasks included creating and validating Q&A for AI models, technical research in Machine Learning and databases, and annotating/correcting outputs to improve accuracy. I also helped organize and analyze training data, gaining hands-on experience in AI and full-stack development.",
      icon: React.createElement(CgWorkAlt),
      date: "2024",
    },
    {
      title: "Front-End Developer",
      location: "Lisbon, PT",
      description:
        "At the beginning of this year, I joined a 01 Talent Bootcamp where I not only practiced what I already knew but also leveled up my HTML, CSS, and JavaScript skills. Since then, I’ve kept learning new technologies and building projects that reflect my growth as a future full-stack developer. I currently work at Bitalk in Digital Marketing, but my main focus remains web development.",
      icon: React.createElement(FaReact),
      date: "2025 - Present",
    },
  ];

  return lang === "pt" ? pt : en;
}

export type ProjectItem = {
  title: string;
  description: string;
  tags?: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  isExternal?: boolean;
};

export function getProjectsData(lang: Lang): ProjectItem[] {
  const pt: ProjectItem[] = [
    {
      title: "HonnePay",
      description:
        "Plataforma interativa de pagamentos instantâneos via Pix criada em equipa, que permite os usuários receberem contribuições de forma prática e visualmente envolvente. Com layouts personalizáveis, notificações em tempo real e suporte a mensagens, o projeto combina design moderno e tecnologia web para uma experiência dinâmica e divertida.",
      tags: ["EJS", "Tailwind CSS", "JavaScript"],
      imageUrl: honnepayImg,
      liveUrl: "https://honnepay.com/",
      isExternal: false,
    },
    {
      title: "Em Desenvolvimento",
      description: "Em Breve",
      imageUrl: demoImg,
      githubUrl: "https://github.com/sarahaliriel",
      liveUrl: "/demo",
      isExternal: false,
    },
    {
      title: "Em Desenvolvimento",
      description: "Em Breve",
      imageUrl: demoImg,
      githubUrl: "https://github.com/sarahaliriel",
      liveUrl: "/demo",
      isExternal: false,
    },
  ];

  const en: ProjectItem[] = [
    {
      title: "HonnePay",
      description:
        "An interactive instant-payment platform (Pix) built as a team project that lets users receive contributions in a practical and visually engaging way. With customizable layouts, real-time notifications, and message support, it blends modern design with web tech for a dynamic, fun experience.",
      tags: ["EJS", "Tailwind CSS", "JavaScript"],
      imageUrl: honnepayImg,
      liveUrl: "https://honnepay.com/",
      isExternal: false,
    },
    {
      title: "In Development",
      description: "Coming Soon",
      imageUrl: demoImg,
      githubUrl: "https://github.com/sarahaliriel",
      liveUrl: "/demo",
      isExternal: false,
    },
    {
      title: "In Development",
      description: "Coming Soon",
      imageUrl: demoImg,
      githubUrl: "https://github.com/sarahaliriel",
      liveUrl: "/demo",
      isExternal: false,
    },
  ];

  return lang === "pt" ? pt : en;
}

export function getSkillsData(lang: Lang): string[] {
  const common = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Git", "GitHub"];

  const pt = [
    ...common,
    "Discord Bots",
    "UI Design",
    "UX Design",
    "Edição de Vídeo",
    "Edição de Imagem",
    "Criadora de Conteúdo",
  ];

  const en = [
    ...common,
    "Discord Bots",
    "UI Design",
    "UX Design",
    "Video Editing",
    "Image Editing",
    "Content Creator",
  ];

  return lang === "pt" ? pt : en;
}