// Única fonte de conteúdo do site. Para trocar texto, link ou projeto, edite só aqui.

export const profile = {
  name: 'Gabriel Lima',
  location: 'Quixadá, CE',
  email: 'fgabriellimace@gmail.com',
  whatsapp: '5588981988626',
  linkedin: 'https://www.linkedin.com/in/fgabriellima/',
  github: 'https://github.com/FGabriel-Lima',
}

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  'Olá Gabriel! Vi seu portfólio e quero conversar sobre um site.',
)}`

// Opcional: o que você estava ouvindo no último deploy. Vazio = a frase não aparece.
export const listening = { song: '', artist: '', url: '' }

export const services = [
  {
    title: 'Site institucional',
    description:
      'quem você é, o que faz e como falar com você, num endereço fácil de achar no Google.',
  },
  {
    title: 'Landing page',
    description: 'uma página com um objetivo só: vender um produto, divulgar um evento ou captar contatos.',
  },
  {
    title: 'Sistema web sob medida',
    description: 'painéis, cadastros e controles com login e banco de dados, do jeito que o seu negócio funciona.',
  },
  {
    title: 'Manutenção e melhorias',
    description: 'seu site já existe mas está lento, antigo ou quebrado no celular? Eu reformo sem começar do zero.',
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
    title: 'Ottolog, portal de vagas',
    description:
      'Plataforma de vagas com área pública para candidatos e painel administrativo com login para gerenciar tudo.',
    stack: ['React', 'TypeScript', 'Node', 'Prisma', 'PostgreSQL'],
    image: '/projects/ottolog.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/job-portal-fullstack',
  },
  {
    title: 'FIFA Career Mode Manager',
    description: 'Gerenciador para o modo carreira do FIFA: elenco, temporadas e estatísticas, com login.',
    stack: ['React', 'Express', 'Prisma', 'JWT'],
    image: '/projects/fifa-manager.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/fifa-career-mode-manager',
  },
  {
    title: 'Este portfólio',
    description: 'Página única e leve, publicada na Vercel com deploy automático a cada atualização.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    image: '/projects/portfolio.png',
    codeUrl: 'https://github.com/FGabriel-Lima/portfolio-pessoal',
  },
]

export const process = [
  'Você me conta sobre o negócio e o que o site precisa resolver.',
  'Eu envio escopo, prazo e valor por escrito, sem surpresa no meio do caminho.',
  'Construo o site e te mando prévias no ar para você acompanhar e pedir ajustes.',
  'Configuro domínio e hospedagem e coloco tudo no ar.',
  'Depois da entrega, continuo disponível para ajustes e novas ideias.',
]

export const about = [
  'Estudo Engenharia de Software na UFC, aqui em Quixadá, e construo sites e sistemas que resolvem problema de verdade, do portal de vagas ao gerenciador de carreira.',
  'Gosto de trabalhar perto de quem vai usar o que eu faço: entender o que o negócio precisa, entregar algo simples que funcione e melhorar a partir daí.',
]

export const stack = ['React', 'TypeScript', 'Node', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind']

// Revise estas respostas com seus valores e prazos reais antes de divulgar o site.
export const faq = [
  {
    q: 'Quanto custa um site?',
    a: 'Depende do tamanho e do que o site precisa fazer: uma landing page custa bem menos que um sistema com login. Me conta sua ideia no WhatsApp e eu envio um orçamento fechado, sem compromisso.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O prazo depende do escopo e vai escrito na proposta antes de começar. Durante o desenvolvimento você acompanha prévias do site no ar.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não. Eu te ajudo a registrar o domínio (por exemplo, suaempresa.com.br) e cuido da configuração da hospedagem e da publicação.',
  },
  {
    q: 'Funciona bem no celular?',
    a: 'Sim. Todo site é pensado primeiro para o celular, de onde vem a maior parte das visitas.',
  },
]

// Coisas que você curte, no estilo da lista pessoal do Ryan. Vazio = a seção não aparece.
export const joys: string[] = []
