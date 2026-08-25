// ---------------------------------------------------------------------------
// Todo o conteúdo do site mora aqui. Pra editar o portfólio, mexe só neste
// arquivo. Cada texto tem duas versões: `meme` (padrão) e `pro` (modo
// recrutador ligado).
// ---------------------------------------------------------------------------

export type Mode = "meme" | "pro";
type Dual = Record<Mode, string>;

export const LINKS = {
  // TODO: troque pelos seus perfis reais
  linkedin: "https://www.linkedin.com/in/lucascferrari/",
  github: "https://github.com/LucasWithBoots",
  email: "lucas.carrijoferrari@gmail.com",
};

export const HERO = {
  name: "Lucas Carrijo",
  role: "desenvolvedor full stack & mobile",
  tagline: {
    meme: "faço aplicativo, backend, frontend e ocasionalmente descubro por que o Gradle parou de funcionar.",
    pro: "desenvolvo aplicações mobile e web ponta a ponta, do design de interface à API que sustenta ela.",
  } satisfies Dual,
  chips: [
    "React",
    "React Native",
    "TypeScript",
    "Node",
    "Kotlin",
    "Figma",
    "UX/UI",
  ],
};

export const TERMINAL = {
  path: "~/lucas.dev",
  stats: [
    { label: "café", value: 97, suffix: "%" },
    { label: "foco", value: 63, suffix: "%" },
    { label: "bugs resolvidos", value: 312, suffix: "*" },
  ],
  footnote: { meme: "boa sorte", pro: "obrigado pela visita" } satisfies Dual,
};

export const SECTIONS = [
  { id: "trabalho", num: "01", label: "trabalho" },
  { id: "lore", num: "02", label: "lore" },
  { id: "tecnologias", num: "03", label: "tecnologias" },
  { id: "bugs", num: "04", label: "bugs conhecidos" },
  { id: "contato", num: "05", label: "contato" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value);
}

export const HEADINGS = {
  trabalho: {
    meme: "coisas que eu fiz e não me arrependo",
    pro: "projetos",
  } satisfies Dual,
  lore: { meme: "minha lore", pro: "trajetória" } satisfies Dual,
  tecnologias: {
    meme: "tecnologias que eu afirmo saber usar",
    pro: "stack técnica",
  } satisfies Dual,
  bugs: { meme: "bugs conhecidos", pro: "pontos de atenção" } satisfies Dual,
  contato: {
    meme: "quer falar comigo por algum motivo?",
    pro: "vamos conversar",
  } satisfies Dual,
};

export type Project = {
  id: string;
  name: string;
  logo: { text: string; variant: "accent" | "dark" | "outline" };
  description: Dual;
  tags: string[];
  note: Dual;
};

export const PROJECTS: Project[] = [
  {
    id: "unicarona",
    name: "UniCarona",
    logo: { text: "U", variant: "accent" },
    description: {
      meme: "Aplicativo de mobilidade universitária desenvolvido como TCC, do estudo de UX à implementação mobile.",
      pro: "Aplicativo de caronas para o meio universitário, desenvolvido como trabalho de conclusão de curso. Conduzi desde a pesquisa de UX e prototipação até a implementação mobile completa.",
    },
    tags: ["React Native", "Expo", "TypeScript", "UX/UI"],
    note: { meme: "funciona na minha máquina", pro: "TCC — nota máxima" },
  },
  {
    id: "2get",
    name: "2get",
    logo: { text: "2get", variant: "dark" },
    description: {
      meme: "Desenvolvimento mobile com React Native e Expo, integração com APIs, autenticação e construção de interfaces.",
      pro: "Desenvolvimento mobile com React Native e Expo: integração com APIs REST, fluxo de autenticação e construção de interfaces reutilizáveis.",
    },
    tags: ["React Native", "Expo", "TypeScript", "Axios"],
    note: { meme: "NDA detected. sem print bonito", pro: "projeto sob NDA" },
  },
  {
    id: "racionix",
    name: "Racionix",
    logo: { text: "R", variant: "outline" },
    description: {
      meme: "Interface web com identidade visual própria, autenticação, leaderboard e integração com backend.",
      pro: "Aplicação web com identidade visual própria: autenticação, ranking de usuários e integração com backend em Spring.",
    },
    tags: ["React", "Tailwind", "React Router", "Spring"],
    note: { meme: "o CSS venceu no final", pro: "front + integração" },
  },
];

export const TIMELINE: { year: string; text: Dual }[] = [
  {
    year: "2023",
    text: {
      meme: "PHP entrou na minha vida.",
      pro: "primeiros projetos web, com PHP e MySQL.",
    },
  },
  {
    year: "2024",
    text: {
      meme: "React Native aparentemente era inevitável.",
      pro: "migração para o ecossistema JavaScript e início com React Native.",
    },
  },
  {
    year: "2025",
    text: {
      meme: "comecei a trabalhar mais perto de produto, mobile e UX.",
      pro: "atuação mais próxima de produto, com foco em mobile e experiência do usuário.",
    },
  },
  {
    year: "2026",
    text: {
      meme: "full stack + mobile. aparentemente deu certo.",
      pro: "atuação full stack e mobile, do backend à entrega da interface.",
    },
  },
];

export const STACK: { title: Dual; items: string[] }[] = [
  {
    title: { meme: "uso trabalhando", pro: "uso no dia a dia" },
    items: ["TypeScript", "React", "React Native", "Node.js"],
  },
  {
    title: { meme: "já usei bastante", pro: "experiência sólida" },
    items: ["PHP", "MySQL", "Expo", "REST APIs"],
  },
  {
    title: { meme: "consigo me virar", pro: "conhecimento de apoio" },
    items: ["Python", "Java", "Spring", "Docker"],
  },
];

export const BUGS: Dual[] = [
  {
    meme: "abre 14 abas para resolver um problema",
    pro: "pesquiso bastante antes de decidir uma abordagem",
  },
  {
    meme: 'fala "é rapidinho" antes de refatorar alguma coisa',
    pro: "tenho tendência a melhorar código que já está funcionando",
  },
  {
    meme: "relação complicada com o Gradle",
    pro: "build nativo de Android ainda é meu ponto de menos conforto",
  },
  {
    meme: "pode gastar tempo demais alinhando 4 pixels",
    pro: "cuidado (às vezes excessivo) com detalhes visuais",
  },
];

export const FOOTER = {
  meme: "feito manualmente no figma por mim e depois o claudinho codou cmg",
  pro: "desenvolvido em React + TypeScript. código disponível no GitHub.",
} satisfies Dual;

export const THANKS = {
  meme: "obrigado por chegar até aqui :)",
  pro: "obrigado pela visita",
} satisfies Dual;
