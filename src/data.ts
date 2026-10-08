// Única fonte de conteúdo do site. Para trocar texto, link ou projeto, edite só aqui.
import type { IconName } from './icons'

export const profile = {
  name: 'Gabriel Lima',
  role: 'Desenvolvedor Full Stack · Estudante de Engenharia de Software',
  location: 'Quixadá, CE',
  email: 'fgabriellimace@gmail.com',
  whatsapp: '5588981988626',
  linkedin: 'https://www.linkedin.com/in/fgabriellima/',
  github: 'https://github.com/FGabriel-Lima',
}

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  'Olá Gabriel! Vi seu portfólio e quero um orçamento para um site.',
)}`

// O que o cliente recebe em todo projeto (aparece no topo).
export const included = ['Domínio e hospedagem configurados', 'Feito para o celular', 'Suporte depois da entrega']

// Ficha rápida da seção Sobre: só fatos.
export const facts = [
  { label: 'Formação', value: 'Engenharia de Software · UFC' },
  { label: 'Base', value: 'Quixadá, CE · atendo remoto' },
  { label: 'Faço', value: 'Sites, landing pages e sistemas web' },
  { label: 'Stack principal', value: 'React, TypeScript, Node, PostgreSQL' },
  { label: 'No GitHub', value: '3 sistemas completos publicados' },
]

export const services: { icon: IconName; title: string; description: string; benefit: string }[] = [
  {
    icon: 'globe',
    title: 'Sites Institucionais',
    description: 'Presença profissional para sua empresa, fácil de achar no Google.',
    benefit: 'Mais confiança para quem te procura.',
  },
  {
    icon: 'rocket',
    title: 'Landing Pages',
    description: 'Uma página com um objetivo só: vender, divulgar ou captar contatos.',
    benefit: 'Mais contatos, menos distração.',
  },
  {
    icon: 'dashboard',
    title: 'Sistemas Web',
    description: 'Painéis, cadastros e controles com login e banco de dados.',
    benefit: 'Menos planilha, mais controle.',
  },
  {
    icon: 'wrench',
    title: 'Manutenção e Melhorias',
    description: 'Site lento, antigo ou quebrado no celular? Eu reformo sem começar do zero.',
    benefit: 'Seu site rápido e atual de novo.',
  },
]

// Ícones do Devicon. `dark: true` = logo preto, invertido para o fundo escuro.
export const stack: Record<string, { name: string; icon: string; dark?: boolean }[]> = {
  'Front-end': [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
  ],
  'Back-end': [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express', dark: true },
    { name: 'Java', icon: 'java' },
    { name: 'Prisma', icon: 'prisma', dark: true },
  ],
  'Banco de Dados': [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
  ],
  Ferramentas: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github', dark: true },
    { name: 'Vite', icon: 'vitejs' },
    { name: 'Vercel', icon: 'vercel', dark: true },
    { name: 'Postman', icon: 'postman' },
  ],
}

export const process = [
  { title: 'Conversa', text: 'Você me conta sobre o negócio e o que o site precisa resolver.' },
  { title: 'Proposta', text: 'Escopo, prazo e valor por escrito, sem surpresa no meio do caminho.' },
  { title: 'Desenvolvimento', text: 'Construo o site e envio prévias no ar para você acompanhar.' },
  { title: 'Publicação', text: 'Configuro domínio e hospedagem e coloco tudo no ar.' },
  { title: 'Suporte', text: 'Depois da entrega, sigo disponível para ajustes e melhorias.' },
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
    title: 'Ottolog · Portal de Vagas',
    description: 'Plataforma de vagas com área pública para candidatos e painel administrativo com login.',
    stack: ['React', 'TypeScript', 'Node', 'Prisma', 'PostgreSQL'],
    image: '/projects/ottolog.png',
    codeUrl: 'https://github.com/FGabriel-Lima/job-portal-fullstack',
  },
  {
    title: 'FIFA Career Mode Manager',
    description: 'Gerenciador do modo carreira do FIFA: elenco, temporadas e estatísticas, com login.',
    stack: ['React', 'Tailwind', 'Express', 'Prisma', 'JWT'],
    image: '/projects/fifa-manager.png',
    codeUrl: 'https://github.com/FGabriel-Lima/fifa-career-mode-manager',
  },
  {
    title: 'Portfólio Pessoal',
    description: 'Este site: página única e responsiva, publicada na Vercel com deploy automático.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    image: '/projects/portfolio.png',
    codeUrl: 'https://github.com/FGabriel-Lima/portfolio-pessoal',
    liveUrl: 'https://gabriellima.vercel.app',
  },
]

// Revise estas respostas com seus valores e prazos reais antes de divulgar o site.
export const faq = [
  {
    q: 'Quanto custa um projeto?',
    a: 'Depende do tamanho e do que o site precisa fazer: uma landing page custa bem menos que um sistema com login. Me chama no WhatsApp e eu envio um orçamento fechado, sem compromisso.',
  },
  {
    q: 'Qual o prazo de desenvolvimento?',
    a: 'O prazo depende do escopo e vai escrito na proposta antes de começar. Durante o desenvolvimento você acompanha prévias do site no ar.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não. Eu te ajudo a registrar o domínio (por exemplo, suaempresa.com.br) e cuido da configuração da hospedagem e da publicação.',
  },
  {
    q: 'O site funciona no celular?',
    a: 'Sim. Todo site é pensado primeiro para o celular, de onde vem a maior parte das visitas.',
  },
  {
    q: 'Você oferece suporte depois da entrega?',
    a: 'Sim. Depois que o site estiver no ar, sigo disponível para ajustes, atualizações de conteúdo e melhorias.',
  },
]
