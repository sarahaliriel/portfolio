"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/data";

type Dict = Record<string, { pt: string; en: string }>;

const dictionary: Dict = {
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.projects": { pt: "Projetos", en: "Projects" },
  "nav.skills": { pt: "Skills", en: "Skills" },
  "nav.experience": { pt: "Experiência", en: "Experience" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  "intro.download": { pt: "Download CV", en: "Download CV" },

  "about.heading": { pt: "Sobre mim", en: "About me" },
  "about.p1": {
    pt: "Dedico-me a aplicar meus conhecimentos em projetos práticos, com foco na criação de interfaces funcionais, responsivas e centradas no utilizador.",
    en: "I focus on applying my skills in practical projects, building interfaces that are functional, responsive, and user-centered.",
  },
  "about.p2": {
    pt: "Gosto de transformar ideias em soluções digitais, combinando programação, design e usabilidade. Estou sempre em busca de novos desafios e oportunidades para evoluir como desenvolvedora e contribuir com projetos com impacto real.",
    en: "I enjoy turning ideas into digital solutions by combining programming, design, and usability. I’m always looking for new challenges to grow and contribute to projects with real impact.",
  },
  "about.p3": {
    pt: "Quando não estou \"codando\", gosto de ver filmes, ler livros, editar vídeos e ouvir música. Valorizo o aprendizado contínuo e tenho prazer em adquirir novos conhecimentos, tanto na área tecnológica quanto em outros contextos criativos.",
    en: "When I’m not coding, I like watching movies, reading books, editing videos, and listening to music. I value continuous learning and enjoy exploring new knowledge—both in tech and creative fields.",
  },
  "about.card1.title": { pt: "Código", en: "Code" },
  "about.card1.desc": { pt: "Componentização, boas práticas e performance.", en: "Components, best practices, and performance." },
  "about.card2.title": { pt: "Design", en: "Design" },
  "about.card2.desc": { pt: "UI consistente com animações elegantes.", en: "Consistent UI with elegant motion." },
  "about.card3.title": { pt: "Propósito", en: "Purpose" },
  "about.card3.desc": { pt: "Soluções úteis com foco na experiência real.", en: "Useful solutions focused on real experience." },
  "about.cta": {
    pt: "Se você procura alguém que une código, design e propósito, talvez a gente combine!",
    en: "If you’re looking for someone who blends code, design, and purpose, we might be a great match!",
  },

  "projects.heading": { pt: "Projetos", en: "Projects" },
  "projects.project": { pt: "Projeto", en: "Project" },
  "projects.active": { pt: "Ativo", en: "Active" },
  "projects.github": { pt: "GitHub", en: "GitHub" },
  "projects.demo": { pt: "Demo", en: "Demo" },

  "skills.heading": { pt: "Skills", en: "Skills" },

  "experience.heading": { pt: "Experiência", en: "Experience" },

  "nav.community": { pt: "Comunidade", en: "Community" },

  "community.heading": { pt: "Comunidade", en: "Community" },

  "community.badgeMembers": { pt: "+13K Members", en: "13K+ Members" },
  "community.badgeChat": { pt: "Networking & Ajuda", en: "Networking & Help" },
  "community.badgeActive": { pt: "Ativa diariamente", en: "Active daily" },

  "community.desc": {
    pt: "Uma comunidade para programadores aprenderem, trocarem ideias, tirarem dúvidas e evoluírem juntos. Se você quer se enturmar, conhecer pessoas da área e participar de conversas técnicas, esse é o lugar <3",
    en: "A community where developers learn, share ideas, ask questions, and grow together. If you want to meet people in tech, join discussions, and learn with others, this is the place <3",
  },

  "community.ctaJoin": { pt: "Entrar", en: "Join" },
  "community.ctaHow": { pt: "Como funciona?", en: "How it works?" },
  "community.note": { pt: "Discord • canais, ajuda e networking", en: "Discord • channels, help & networking" },

  "community.modalTitle": { pt: "O que você encontra lá:", en: "What you’ll find there:" },
  "community.modalSubtitle": { pt: "Um ambiente leve, útil e focado em evolução.", en: "A friendly space focused on real growth." },
  "community.modalClose": { pt: "Fechar", en: "Close" },

  "community.card1Title": { pt: "Dúvidas & suporte", en: "Questions & support" },
  "community.card1Body": { pt: "Peça ajuda, responda alguém e aprenda mais rápido.", en: "Ask for help, help others, and learn faster." },

  "community.card2Title": { pt: "Networking real", en: "Real networking" },
  "community.card2Body": { pt: "Conheça devs, faça conexões e colabore em projetos.", en: "Meet devs, connect, and collaborate on projects." },

  "community.card3Title": { pt: "Conversas técnicas", en: "Tech discussions" },
  "community.card3Body": { pt: "Participe de debates e acompanhe novidades da área.", en: "Join debates and keep up with industry topics." },

  "community.card4Title": { pt: "Ambiente organizado", en: "Organized space" },
  "community.card4Body": { pt: "Moderação ativa e canais bem estruturados.", en: "Active moderation and well-structured channels." },

  "community.modalFooter": {
    pt: "Se quiser, entra e começa pelo canal de apresentações!",
    en: "If you want, join and start with the introductions channel!",
  },


  "contact.heading": { pt: "Vamos Conversar", en: "Let’s Talk" },
  "contact.subtitle": {
    pt: "Preencha o formulário ou fale comigo por uma das plataformas abaixo.",
    en: "Fill out the form or reach out through one of the platforms below.",
  },
  "contact.success": { pt: "Mensagem enviada com sucesso!", en: "Message sent successfully!" },
  "contact.name": { pt: "Seu nome", en: "Your name" },
  "contact.email": { pt: "Seu e-mail", en: "Your email" },
  "contact.message": { pt: "Me conte suas ideias XD", en: "Tell me your ideas XD" },
  "contact.find": { pt: "Ou me encontre por aqui!", en: "Or find me here!" },

  "submit.send": { pt: "Enviar", en: "Send" },

  "footer.home": { pt: "Início", en: "Home" },
  "footer.about": { pt: "Sobre", en: "About" },
  "footer.projects": { pt: "Projetos", en: "Projects" },
  "footer.skills": { pt: "Skills", en: "Skills" },
  "footer.experience": { pt: "Experiência", en: "Experience" },
  "footer.community": { pt: "Comunidade", en: "Community" },
  "footer.contact": { pt: "Contato", en: "Contact" },
  "footer.navHeading": { pt: "Navegação", en: "Navigation" },
  "footer.statusHeading": { pt: "Status", en: "Status" },
  "footer.role": { pt: "Front End Developer.", en: "Front End Developer." },
  "footer.statusLine": { pt: "Aberta a oportunidades e colaborações.", en: "Open to opportunities and collaborations." },
  "footer.statusBody": { pt: "Se você tem uma ideia ou projeto, vamos conversar!", en: "If you have an idea or a project, let’s talk!" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  "footer.made": { pt: "Feito com ♡ e código.", en: "Made with ♡ and code." },
  "footer.email": { pt: "Email", en: "Email" },

};

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "pt" || stored === "en") {
      setLang(stored);
      document.documentElement.lang = stored;
      return;
    }

    const browser = (navigator.language || "").toLowerCase();
    const initial: Lang = browser.startsWith("pt") ? "pt" : "en";
    setLang(initial);
    document.documentElement.lang = initial;
    window.localStorage.setItem("lang", initial);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "pt" ? "en" : "pt";
      window.localStorage.setItem("lang", next);
      document.documentElement.lang = next;
      return next;
    });
  };

  const t = useMemo(() => {
    return (key: string) => {
      const entry = dictionary[key];
      if (!entry) return key;
      return entry[lang];
    };
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) throw new Error("useLanguage must be used within a LanguageContextProvider");
  return context;
}