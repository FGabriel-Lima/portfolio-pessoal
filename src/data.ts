// Única fonte de conteúdo do site. Para trocar texto, link ou projeto, edite só aqui.

export const profile = {
  name: 'Gabriel Lima',
  headline: 'Crio sites e sistemas web para',
  headlineAccent: 'negócios e empresas.',
  proof:
    'Desenvolvedor full stack (React e Node) e estudante de Engenharia de Software na UFC, em Quixadá, CE.',
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
      'Apresenta sua empresa, seus serviços e seu contato em um endereço próprio, rápido e fácil de achar no Google.',
    forWhom: 'lojas, clínicas, escritórios e prestadores de serviço.',
  },
  {
    title: 'Landing page',
    description:
      'Uma página com um único objetivo: captar contatos, divulgar uma oferta ou lançar um produto.',
    forWhom: 'campanhas, eventos e profissionais autônomos.',
  },
  {
    title: 'Sistema web sob medida',
    description:
      'Painéis, cadastros e automações feitos para o jeito que o seu negócio funciona, com login e banco de dados.',
    forWhom: 'empresas que já cresceram além da planilha.',
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
      'Plataforma completa de vagas: área pública para candidatos buscarem e filtrarem oportunidades e painel administrativo com login para gerenciar tudo.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node', 'Express', 'Prisma', 'PostgreSQL'],
    image: '/projects/ottolog.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/job-portal-fullstack',
  },
  {
    title: 'Portfólio pessoal',
    description:
      'Este site. Página única, leve e responsiva, publicada na Vercel com deploy automático a cada push na main.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Vercel'],
    image: '/projects/portfolio.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/portf-lio-pessoal',
  },
  {
    title: 'FIFA Career Mode Manager',
    description:
      'Gerenciador para o modo carreira do FIFA: elenco, temporadas e estatísticas salvos no banco, com autenticação de usuário.',
    stack: ['React', 'Tailwind', 'Express', 'Prisma', 'JWT'],
    image: '/projects/fifa-manager.svg',
    codeUrl: 'https://github.com/FGabriel-Lima/fifa-career-mode-manager',
  },
]

export const about = [
  'Sou Gabriel, desenvolvedor full stack de Quixadá, no sertão do Ceará. Estudo Engenharia de Software na UFC e, fora da sala de aula, construo sites e sistemas que resolvem problema de verdade, do portal de vagas ao gerenciador de carreira.',
  'Gosto de trabalhar perto do cliente: entender o que o negócio precisa, entregar algo simples que funcione e evoluir a partir daí. Se você tem uma ideia ou um problema que um site resolve, me chama.',
]

export const skills = {
  Front: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  Back: ['Node.js', 'Express', 'Java', 'PostgreSQL', 'MongoDB', 'Prisma'],
  Ferramentas: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Notion', 'Vercel'],
}
