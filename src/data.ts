// Única fonte de conteúdo do site. Para trocar texto, link ou projeto, edite só aqui.

export const profile = {
  name: 'Gabriel Lima',
  role: 'Desenvolvedor web',
  headline: 'Crio sites e sistemas web para',
  headlineAccent: 'negócios e empresas.',
  proof:
    'Do site institucional ao sistema com login e banco de dados. Páginas rápidas, bonitas no celular e feitas para trazer clientes até você.',
  location: 'Quixadá, CE',
  email: 'fgabriellimace@gmail.com',
  whatsapp: '5588981988626',
  linkedin: 'https://www.linkedin.com/in/fgabriellima/',
  github: 'https://github.com/FGabriel-Lima',
}

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  'Olá Gabriel! Vi seu portfólio e quero conversar sobre um site.',
)}`

export const services = [
  {
    title: 'Site institucional',
    description:
      'Presença profissional para sua empresa: quem você é, o que faz e como falar com você, num endereço fácil de achar no Google.',
    forWhom: 'lojas, clínicas, escritórios e prestadores de serviço.',
  },
  {
    title: 'Landing page',
    description:
      'Uma página com um único objetivo: vender um produto, divulgar um evento ou captar contatos.',
    forWhom: 'campanhas, lançamentos e profissionais autônomos.',
  },
  {
    title: 'Sistema web sob medida',
    description:
      'Painéis, cadastros e controles com login e banco de dados, feitos para a rotina do seu negócio.',
    forWhom: 'empresas que já cresceram além da planilha.',
  },
  {
    title: 'Manutenção e melhorias',
    description:
      'Seu site já existe, mas está lento, antigo ou quebrado no celular? Eu reformo sem começar do zero.',
    forWhom: 'quem já tem site e quer modernizar.',
  },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  image: string
  codeUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Ottolog · Portal de vagas',
    description:
      'Plataforma de vagas com área pública para candidatos buscarem e filtrarem oportunidades e painel administrativo com login para gerenciar tudo.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node', 'Prisma', 'PostgreSQL'],
    image: '/projects/ottolog.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/job-portal-fullstack',
  },
  {
    title: 'FIFA Career Mode Manager',
    description:
      'Gerenciador para o modo carreira do FIFA: elenco, temporadas e estatísticas salvos no banco, com autenticação de usuário.',
    stack: ['React', 'Tailwind', 'Express', 'Prisma', 'JWT'],
    image: '/projects/fifa-manager.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/fifa-career-mode-manager',
  },
  {
    title: 'Portfólio pessoal',
    description:
      'Este site. Página única, leve e responsiva, publicada na Vercel com deploy automático a cada atualização.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Vercel'],
    image: '/projects/portfolio.png',
    codeUrl: 'https://github.com/FGabriel-Lima/portfolio-pessoal',
  },
]

export const process = [
  {
    title: 'Conversa',
    description: 'Você me conta sobre o negócio e o que o site precisa resolver. Pode ser pelo WhatsApp.',
  },
  {
    title: 'Proposta',
    description: 'Envio escopo, prazo e valor por escrito. Sem surpresa no meio do caminho.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Construo o site e te mando prévias no ar para você acompanhar e pedir ajustes.',
  },
  {
    title: 'Publicação',
    description: 'Configuro domínio e hospedagem e coloco o site no ar, pronto para aparecer no Google.',
  },
  {
    title: 'Suporte',
    description: 'Depois da entrega, continuo disponível para ajustes e novas ideias.',
  },
]

export const about = [
  'Sou Gabriel, desenvolvedor full stack de Quixadá, no sertão do Ceará. Estudo Engenharia de Software na UFC e construo sites e sistemas que resolvem problema de verdade, do portal de vagas ao gerenciador de carreira.',
  'Gosto de trabalhar perto do cliente: entender o que o negócio precisa, entregar algo simples que funcione e evoluir a partir daí.',
]

export const facts = [
  { label: 'Formação', value: 'Engenharia de Software · UFC' },
  { label: 'Base', value: 'Quixadá, CE · atendimento remoto' },
  { label: 'Foco', value: 'Sites, landing pages e sistemas web' },
]

// Ícones vêm do Devicon (cdn.jsdelivr.net). `dark: true` = logo preto, invertido para o fundo escuro.
export const stack: Record<string, { name: string; icon: string; dark?: boolean }[]> = {
  'Front-end': [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Tailwind', icon: 'tailwindcss' },
    { name: 'Bootstrap', icon: 'bootstrap' },
  ],
  'Back-end': [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express', dark: true },
    { name: 'Java', icon: 'java' },
    { name: 'Prisma', icon: 'prisma', dark: true },
  ],
  'Banco de dados': [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
  ],
  Ferramentas: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github', dark: true },
    { name: 'Vite', icon: 'vitejs' },
    { name: 'Vercel', icon: 'vercel', dark: true },
    { name: 'Postman', icon: 'postman' },
    { name: 'Notion', icon: 'notion', dark: true },
  ],
}

// Revise estas respostas com seus valores e prazos reais antes de divulgar o site.
export const faq = [
  {
    q: 'Quanto custa um site?',
    a: 'Depende do tamanho e do que o site precisa fazer: uma landing page custa bem menos que um sistema com login. Me conta sua ideia no WhatsApp e eu envio um orçamento fechado, sem compromisso.',
  },
  {
    q: 'Quanto tempo leva para ficar pronto?',
    a: 'O prazo depende do escopo e vai escrito na proposta antes de começar. Durante o desenvolvimento você acompanha prévias do site no ar.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não. Eu te ajudo a registrar o domínio (por exemplo, suaempresa.com.br) e cuido da configuração da hospedagem e da publicação.',
  },
  {
    q: 'O site funciona bem no celular?',
    a: 'Sim. Todo site é pensado primeiro para o celular, de onde vem a maior parte das visitas, e depois adaptado para o computador.',
  },
  {
    q: 'E depois que o site estiver no ar?',
    a: 'Você recebe o site funcionando e eu continuo disponível para ajustes, atualizações de conteúdo e melhorias.',
  },
]
