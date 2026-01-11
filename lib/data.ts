import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import demoImg from "@/public/demo.png";
import honnepayImg from "@/public/honnepay.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ensino Profissional",
    location: "Lisboa, PT",
    description:
      "Tudo começou em 2022, quando entrei para o curso profissional de Informática de Sistemas na Casa Pia de Lisboa. Foi nesse período que tive meu primeiro contato com o mundo da tecnologia e descobri um grande interesse pela área de desenvolvimento. Durante o curso, desenvolvi projetos práticos em front-end e back-end, consolidando meus conhecimentos em desenvolvimento web",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Estudos e Projetos",
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
] as const;

export const projectsData = [
  {
    title: "Em Desenvolvimento",
    description: "Em Breve",
    imageUrl: demoImg,
    githubUrl: "https://github.com/sarahaliriel",
    liveUrl: "/demo",
    isExternal: false,
  },
  {
    title: "HonnePay",
    description: "Plataforma interativa de pagamentos instantâneos via Pix criada em equipa, que permite os usuários receberem contribuições de forma prática e visualmente envolvente. Com layouts personalizáveis, notificações em tempo real e suporte a mensagens, o projeto combina design moderno e tecnologia web para uma experiência dinâmica e divertida.",
    tags: ["EJS", "Tailwind CSS", "JavaScript"],
    imageUrl: honnepayImg,
    liveUrl: "./demo",
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
] as const;

export const skillsData = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Git",
      "GitHub",
      "Discord Bots",
      "UI Design",
      "UX Design",
      "Edição de Vídeo",
      "Edição de Imagem",
      "Criadora de Conteúdo",
] as const;