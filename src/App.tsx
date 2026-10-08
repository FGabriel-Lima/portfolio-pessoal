import { useEffect, useState, type ReactNode } from 'react'
import {
  faq,
  heroStats,
  highlights,
  pillars,
  process,
  profile,
  projects,
  services,
  stack,
  whatsappUrl,
} from './data'
import HeroArt from './HeroArt'
import { GitHubIcon, Icon, LinkedInIcon, WhatsAppIcon } from './icons'

const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6'
const ext = { target: '_blank', rel: 'noopener noreferrer' }
const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`

const btnPrimary =
  'bg-grad inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-[0_10px_40px_-10px_oklch(55%_0.26_295)] transition hover:brightness-110'
const btnOutline =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-blue/40 bg-card/60 px-6 py-3.5 font-semibold transition hover:border-purple/70'
const iconTile = 'bg-grad grid h-11 w-11 place-items-center rounded-xl text-white'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 font-display text-lg font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-card">
        <span className="text-grad text-sm font-bold">GL</span>
      </span>
      <span>
        gabriel<span className="text-grad">.lima</span>
      </span>
    </a>
  )
}

function Heading({ eyebrow, children, sub }: { eyebrow: string; children: ReactNode; sub?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-fg-muted">{sub}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Logo />
        <nav aria-label="Principal" className="hidden gap-7 text-sm text-fg-muted lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={whatsappUrl} {...ext} className={`${btnPrimary} !px-4 !py-2 text-sm max-sm:hidden`}>
            Solicitar orçamento
          </a>
          <details className="relative lg:hidden">
            <summary
              aria-label="Abrir menu"
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl border border-line [&::-webkit-details-marker]:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </summary>
            <nav className="card absolute right-0 mt-2 flex w-48 flex-col p-2 text-sm">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 hover:bg-muted">
                  {l.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(30%_0.15_280/0.55),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(35%_0.18_250/0.25),transparent_60%)]" />
      <div className={`${container} relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24`}>
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1.5 text-xs text-fg-muted">
            <Icon name="sparkles" className="h-3.5 w-3.5 text-cyan" />
            Disponível para novos projetos
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-fg-muted sm:text-lg">{profile.role}</p>
          <p className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
            Crio <span className="text-grad">sites e sistemas web</span> que colocam o seu negócio na internet do
            jeito certo.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-fg-muted">
            Do site institucional ao sistema com login e banco de dados: páginas rápidas, bonitas no celular e
            feitas para trazer clientes até você.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappUrl} {...ext} className={btnPrimary}>
              Solicitar orçamento <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href="#portfolio" className={btnOutline}>
              <Icon name="folder" className="h-4 w-4" /> Ver projetos
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
            {heroStats.map((s, i) => (
              <div key={s.label} className={i > 0 ? 'border-l border-line pl-6' : ''}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-bold">{s.value}</dd>
                <dd className="text-sm text-fg-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroArt />
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="border-y border-line bg-card/40">
      <div className={`${container} grid grid-cols-2 gap-8 py-12 lg:grid-cols-4`}>
        {highlights.map((h, i) => (
          <div key={h.value} className="reveal text-center" style={{ animationDelay: `${i * 80}ms` }}>
            <span className={`${iconTile} mx-auto`}>
              <Icon name={h.icon} className="h-5 w-5" />
            </span>
            <p className="text-grad mt-4 font-display text-xl font-bold sm:text-3xl">{h.value}</p>
            <p className="mt-1 text-sm text-fg-muted">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2`}>
        <div className="reveal">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Sites que <span className="text-grad">trabalham</span> pelo seu negócio.
          </h2>
          <p className="mt-6 leading-relaxed text-fg-muted">
            Sou desenvolvedor full stack e estudo Engenharia de Software na Universidade Federal do Ceará, em
            Quixadá. Já construí sistemas completos, do banco de dados à tela, como um portal de vagas com painel
            administrativo e um gerenciador de modo carreira.
          </p>
          <p className="mt-4 leading-relaxed text-fg-muted">
            Trabalho perto de quem contrata: entendo o que o negócio precisa, entrego algo simples que funcione e
            melhoro a partir daí.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="card card-hover reveal p-6" style={{ animationDelay: `${i * 80}ms` }}>
              <span className={iconTile}>
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-24">
      <div className={container}>
        <Heading eyebrow="Serviços" sub="Do primeiro site da sua empresa ao sistema que organiza o dia a dia.">
          Soluções para o <span className="text-grad">seu negócio</span>
        </Heading>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card card-hover reveal flex flex-col p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={iconTile}>
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-fg-muted">{s.description}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-cyan">{s.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="tecnologias" className="scroll-mt-20 py-24">
      <div className={container}>
        <Heading eyebrow="Stack">
          Tecnologias que <span className="text-grad">eu uso</span>
        </Heading>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([group, items], i) => (
            <div key={group} className="card reveal p-6" style={{ animationDelay: `${i * 80}ms` }}>
              <h3 className="font-display font-bold text-cyan">{group}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {items.map((t) => (
                  <li key={t.name} className="flex items-center gap-3">
                    <img
                      src={devicon(t.icon)}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      className={`h-5 w-5 ${t.dark ? 'invert' : ''}`}
                    />
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="processo" className="scroll-mt-20 py-24">
      <div className={container}>
        <Heading eyebrow="Processo">
          Do primeiro contato <span className="text-grad">ao site no ar</span>
        </Heading>
        <ol className="relative mx-auto mt-14 max-w-4xl space-y-8 md:space-y-0">
          <span className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue via-purple to-transparent md:left-1/2" />
          {process.map((step, i) => {
            const right = i % 2 === 1
            return (
              <li key={step.title} className="reveal relative md:grid md:grid-cols-2 md:gap-16 md:py-4">
                <span className="absolute left-5 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-blue shadow-[0_0_20px_oklch(65%_0.21_250)] md:left-1/2" />
                <div
                  className={`card card-hover ml-12 p-6 md:ml-0 ${right ? 'md:col-start-2' : 'md:text-right'}`}
                >
                  <p className="text-grad font-display text-3xl font-bold">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-24">
      <div className={container}>
        <Heading eyebrow="Portfólio" sub="Sistemas completos, do banco de dados à tela.">
          Projetos que eu <span className="text-grad">construí</span>
        </Heading>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`card card-hover reveal group overflow-hidden ${i === projects.length - 1 && projects.length % 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
              style={{ animationDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="overflow-hidden border-b border-line">
                <img
                  src={p.image}
                  alt={`Tela do projeto ${p.title}`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
                  {p.stack.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-muted/60 px-2.5 py-1 text-xs text-fg-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-5 text-sm font-semibold">
                  {p.liveUrl && (
                    <a href={p.liveUrl} {...ext} className="inline-flex items-center gap-1.5 text-cyan hover:underline">
                      Ver site <Icon name="external" className="h-4 w-4" />
                    </a>
                  )}
                  <a href={p.codeUrl} {...ext} className="inline-flex items-center gap-1.5 text-cyan hover:underline">
                    <GitHubIcon className="h-4 w-4" /> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className={container}>
        <Heading eyebrow="FAQ">
          Perguntas <span className="text-grad">frequentes</span>
        </Heading>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="card reveal group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="chevron" className="h-4 w-4 shrink-0 text-fg-muted transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-24">
      <div className={container}>
        <div className="card reveal relative overflow-hidden px-6 py-16 text-center sm:px-12">
          <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-purple/25 blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Contato</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Vamos tirar o seu <span className="text-grad">projeto do papel?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fg-muted">
              Me conta o que você precisa e eu respondo com uma proposta simples e direta.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} {...ext} className={btnPrimary}>
                <WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp
              </a>
              <a href={`mailto:${profile.email}`} className={btnOutline}>
                <Icon name="mail" className="h-5 w-5" /> Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const socials = [
    { href: profile.github, label: 'GitHub', node: <GitHubIcon className="h-4 w-4" /> },
    { href: profile.linkedin, label: 'LinkedIn', node: <LinkedInIcon className="h-4 w-4" /> },
    { href: `mailto:${profile.email}`, label: 'E-mail', node: <Icon name="mail" className="h-4 w-4" /> },
    { href: whatsappUrl, label: 'WhatsApp', node: <WhatsAppIcon className="h-4 w-4" /> },
  ]
  return (
    <footer className="border-t border-line">
      <div className={`${container} grid gap-10 py-14 md:grid-cols-3`}>
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            Desenvolvedor full stack criando sites e sistemas sob medida em {profile.location}.
          </p>
        </div>
        <div>
          <p className="font-display font-bold">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-fg-muted">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold">Conecte-se</p>
          <ul className="mt-4 flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('mailto:') ? {} : ext)}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card transition hover:border-purple/60"
                >
                  {s.node}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-fg-muted">{profile.email}</p>
        </div>
      </div>
      <div className={`${container} flex flex-col justify-between gap-2 border-t border-line py-6 text-xs text-fg-muted sm:flex-row`}>
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <p>Feito em {profile.location}.</p>
      </div>
    </footer>
  )
}

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-center gap-3">
      {showTop && (
        <a
          href="#inicio"
          aria-label="Voltar ao topo"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card/90 backdrop-blur transition hover:border-purple/60"
        >
          <Icon name="arrowUp" className="h-4 w-4" />
        </a>
      )}
      <a
        href={whatsappUrl}
        {...ext}
        aria-label="Falar no WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_0_0_6px_rgb(37_211_102/0.15)] transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}

export default function App() {
  // Revela cada .reveal uma única vez, quando entra na tela.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Stack />
        <Process />
        <Portfolio />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
