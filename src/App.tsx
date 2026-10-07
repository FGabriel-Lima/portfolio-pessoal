import { profile, whatsappUrl } from './data'
import { WhatsAppIcon } from './icons'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import { container } from './styles'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function App() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 h-16 border-b border-border bg-bg/80 backdrop-blur">
        <nav className={`${container} flex h-full items-center justify-between`} aria-label="Principal">
          <a href="#inicio" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <ul className="hidden gap-8 font-mono text-sm text-muted md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="rounded-lg bg-accent p-2 text-bg transition hover:bg-accent-hover md:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-border py-8">
        <div className={`${container} flex flex-col gap-2 text-sm text-muted sm:flex-row sm:justify-between`}>
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="font-mono text-xs">Feito com React e Tailwind, publicado na Vercel.</p>
        </div>
      </footer>
    </>
  )
}
