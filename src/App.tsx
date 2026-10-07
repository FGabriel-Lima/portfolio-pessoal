import { useEffect } from 'react'
import { profile, whatsappUrl } from './data'
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './icons'
import About from './sections/About'
import Contact from './sections/Contact'
import Faq from './sections/Faq'
import Hero from './sections/Hero'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Stack from './sections/Stack'
import { container } from './styles'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'FAQ' },
]

const socials = [
  { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: 'E-mail', Icon: MailIcon },
]

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
      <header className="fixed inset-x-0 top-0 z-30 h-16 border-b border-line/60 bg-sky/85 backdrop-blur-md">
        <nav className={`${container} flex h-full items-center justify-between`} aria-label="Principal">
          <a href="#inicio" className="font-mono text-sm font-semibold">
            <span className="text-ochre">~/</span>gabriel-lima
          </a>
          <ul className="hidden gap-8 text-sm text-granite lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-bone">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-ochre/60 px-4 py-2 font-mono text-xs font-semibold text-ochre transition hover:bg-ochre hover:text-night sm:inline-block"
          >
            Pedir orçamento
          </a>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <Stack />
        <Faq />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div
          className={`${container} flex flex-col gap-6 py-10 text-sm text-granite sm:flex-row sm:items-center sm:justify-between`}
        >
          <p>
            © {new Date().getFullYear()} {profile.name} · Feito em {profile.location}
          </p>
          <ul className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line transition hover:border-ochre/60 hover:text-ochre"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/40 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  )
}
