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
  logo: {
    /** Letras do quadradinho. Também é o fallback se o `src` não for encontrado. */
    text: string;
    /** Fundo do quadradinho — veja a tabela em src/assets/logos/README.md. */
    variant: "accent" | "dark" | "outline";
    /**
     * Nome do arquivo em src/assets/logos/ (ex.: "verzel.svg"). Só o nome, sem
     * caminho. Sem `src`, o card usa as letras de `text`.
     */
    src?: string;
    /**
     * "contain" (padrão) para logo solto: sobra respiro em volta.
     * "cover" para ícone de app, que já tem fundo e cantos próprios: preenche
     * o quadradinho inteiro.
     */
    fit?: "contain" | "cover";
  };
  description: Dual;
  tags: string[];
  note: Dual;
  /**
   * Link do card. Sem `repo`, o card continua ali mas não é clicável — é o caso
   * de trabalho sob NDA e de estudo de caso que não vive no GitHub.
   * Não precisa ser GitHub: pode apontar pro Figma, Behance, o que fizer sentido.
   */
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "elite-dev",
    name: "Elite Dev",
    logo: { text: "ED", variant: "outline" },
    repo: "https://github.com/LucasWithBoots/Desafio-Elite-Dev",

    description: {
      meme: "antes de abrir o editor eu mapeei ator, jornada e fluxo. o pessoal reparou — e o desafio virou emprego",

      pro: "Plataforma de eventos e ingressos: o organizador publica, o cliente compra e a portaria valida por QR Code assinado. Monorepo com React, Fastify e Prisma, integração com a Ticketmaster Discovery API e processo de UX documentado antes da implementação.",
    },

    tags: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "UX/UI"],

    note: {
      meme: "o projeto que me deu o emprego",
      pro: "Desafio Elite Dev — Verzel",
    },
  },

  {
    id: "unicarona",
    name: "UniCarona",
    logo: { text: "U", variant: "accent" },
    repo: "https://github.com/LucasWithBoots/unicarona",

    description: {
      meme: "meu TCC começou com carona universitária e terminou com pesquisa, persona, jornada, protótipo e um app inteiro",

      pro: "Aplicativo de mobilidade universitária desenvolvido como TCC. Conduzi o projeto desde a pesquisa de usuários e definição da experiência até o design e desenvolvimento do MVP em React Native.",
    },

    tags: ["React Native", "Expo", "TypeScript", "UX/UI"],
    note: {
      meme: "transformei o TCC em produto",
      pro: "pesquisa + design + desenvolvimento",
    },
  },

  {
    id: "2get",
    name: "2get",
    logo: { text: "2get", variant: "dark", src: "2get.webp", fit: "cover" },
    repo: "https://www.2get.app/",

    description: {
      meme: "onde descobri que mobile não é só fazer uma tela bonita e torcer para funcionar no Android e no iPhone",

      pro: "Atuação profissional no desenvolvimento de um aplicativo mobile em produção, trabalhando com interfaces, integração com APIs REST, autenticação, gerenciamento de estado, cache e experiência do usuário.",
    },

    tags: ["React Native", "Expo", "TypeScript", "Axios", "TanStack Query"],

    note: {
      meme: "usuários reais. bugs reais.",
      pro: "produto em produção",
    },
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    logo: { text: "TF", variant: "accent" },
    repo: "https://github.com/LucasWithBoots/taskflow-project",

    description: {
      meme: "porque aparentemente um simples gerenciador de tarefas precisava de microserviços e RabbitMQ",

      pro: "Sistema de gerenciamento de tarefas construído com arquitetura de microserviços, comunicação assíncrona, processamento paralelo, API Gateway e aplicação mobile.",
    },

    tags: ["Spring Boot", "RabbitMQ", "Docker", "PostgreSQL", "React Native"],

    note: {
      meme: "todo app é simples até chegar a arquitetura",
      pro: "microserviços + mensageria",
    },
  },

  {
    id: "pontoqr",
    name: "pontoQR",
    logo: { text: "QR", variant: "dark" },
    repo: "https://github.com/LucasWithBoots/pontoQR",

    description: {
      meme: "transformei o clássico 'bati o ponto?' em um problema de software",

      pro: "Sistema de controle de ponto utilizando QR Code, com aplicativo mobile, autenticação JWT, leitura de códigos e consulta ao histórico de registros.",
    },

    tags: ["React Native", "TypeScript", "Kotlin", "Ktor", "JWT"],

    note: {
      meme: "aponta a câmera e trabalha",
      pro: "mobile + backend Kotlin",
    },
  },

  {
    id: "sabia",
    name: "Sabiá",
    logo: { text: "S", variant: "outline" },
    repo: "https://medium.com/@claudiolmontez/estudo-de-caso-ux-ui-design-sabi%C3%A1-como-incentivar-jovens-e-adolescentes-a-conhecerem-mais-sobre-5b9e302e5945",

    description: {
      meme: "o projeto em que antes de abrir o Figma eu realmente fui conversar com seres humanos",

      pro: "Estudo de caso de UX/UI voltado ao incentivo à literatura nacional, passando por pesquisa com usuários, entrevistas, persona, jornada, user flows, prototipação e criação de design system.",
    },

    tags: ["UX Research", "Figma", "UX/UI", "Design System"],

    note: {
      meme: "35 respostas depois...",
      pro: "pesquisa → protótipo",
    },
  },

  {
    id: "kotlintodo",
    name: "KotlinToDoAPI",
    logo: { text: "K", variant: "accent" },
    repo: "https://github.com/LucasWithBoots/KotlinToDoAPI",

    description: {
      meme: "porque fazer um CRUD simples seria fácil demais",

      pro: "Aplicação full stack para gerenciamento de tarefas, com API backend, autenticação, filtros e interface web integrada.",
    },

    tags: ["Spring Boot", "Kotlin", "Angular", "TypeScript"],

    note: {
      meme: "CRUD com ambições",
      pro: "full stack",
    },
  },
];

// Texto de apresentação, aberto por sua conta. Cada item do array vira um
// parágrafo — escreva quantos quiser, ou deixe um só.
// TODO: isto aqui é um rascunho montado a partir do resto do site.
// Reescreve com suas palavras, é a única parte da página em que você fala direto.
export const ABOUT: Record<Mode, string[]> = {
  meme: [
    "sou desenvolvedor full stack, mas é no mobile que eu me divirto de verdade. comecei mexendo em PHP sem saber muito bem o que estava fazendo e, no caminho, descobri que gosto mesmo é da parte que o usuário vê.",
    'isso explica por que eu passo tempo demais no Figma antes de escrever a primeira linha, e por que eu volto num código que já está funcionando só porque "dava pra melhorar".',
  ],
  pro: [
    "Sou desenvolvedor full stack com foco em mobile. Comecei em 2023 com PHP e MySQL e migrei para o ecossistema JavaScript, onde hoje trabalho principalmente com React Native e React.",
    "Gosto de atuar próximo de produto: participo desde a definição da interface, no Figma, até a implementação e a integração com o backend.",
  ],
};

export const TIMELINE: { year: string; text: Dual }[] = [
  {
    year: "2023",
    text: {
      meme: "PHP entrou na minha vida junto com o falecido jQuery.",
      pro: "primeiros projetos web, com PHP, MySQL, jQuery e Ajax.",
    },
  },
  {
    year: "",
    text: {
      meme: "primeira experiência sendo ux de vdd.",
      pro: "estágio em outra empresa como desenvolvedor PHP e designer UX/UI, da prototipação à implementação.",
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
    year: "",
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
    items: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Expo",
      "REST APIs",
    ],
  },
  {
    title: { meme: "já usei no trabalho", pro: "experiência sólida" },
    items: [
      "PHP",
      "MySQL",
      "jQuery",
      "Ajax",
      "Java",
      "Spring",
      "Docker",
      "Flutter",
      "Kotlin",
    ],
  },
  {
    title: { meme: "consigo me virar", pro: "conhecimento de apoio" },
    items: ["Python", "Swift", "Objective-C"],
  },
];

export const BUGS: Dual[] = [
  {
    meme: "abre o DevTools antes mesmo de entender o problema",
    pro: "gosto de investigar o comportamento real antes de tirar conclusões",
  },
  {
    meme: "não consegue ignorar um botão 3px fora do lugar",
    pro: "tenho bastante atenção a detalhes de interface e consistência visual",
  },
  {
    meme: 'fala "vou só organizar isso aqui" e cria uma nova estrutura de pastas',
    pro: "me preocupo com organização, legibilidade e manutenção do código",
  },
  {
    meme: "testa a interface em uma resolução que provavelmente ninguém usa",
    pro: "tenho cuidado com responsividade e diferentes cenários de uso",
  },
  {
    meme: "fica incomodado quando o loading aparece por 200ms",
    pro: "me preocupo bastante com percepção de performance e experiência do usuário",
  },
  {
    meme: "transforma um componente de 20 linhas em 4 componentes",
    pro: "gosto de separar responsabilidades e criar componentes reutilizáveis",
  },
  {
    meme: "não confia em API até ver o response no console",
    pro: "costumo validar dados e entender bem a integração antes de construir em cima dela",
  },
  {
    meme: "já perdeu tempo demais escolhendo o nome de uma variável",
    pro: "valorizo código legível e que seja fácil de entender por outras pessoas",
  },
  {
    meme: "abre o Figma mesmo quando a tarefa é no backend",
    pro: "costumo pensar na experiência completa do produto, não só na implementação",
  },
  {
    meme: "acha que toda tela merece pelo menos uma animaçãozinha",
    pro: "gosto de usar movimento e feedback visual para deixar interfaces mais naturais",
  },
  {
    meme: "se funciona mas ficou feio, ainda não terminou",
    pro: "tento equilibrar qualidade técnica com uma boa experiência visual",
  },
  {
    meme: 'o clássico "na minha máquina funciona"',
    pro: "já aprendi na prática a importância de ambientes, builds e configurações",
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
