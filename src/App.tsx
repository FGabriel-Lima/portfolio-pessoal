import { useState, type ReactNode } from 'react'
import { about, faq, joys, listening, process, profile, projects, services, whatsappUrl } from './data'
import { GitHubIcon, LinkedInIcon, MailIcon, MonitorIcon, MoonIcon, SunIcon, WhatsAppIcon } from './icons'
import Strip from './Strip'

// Fatos do último build, no estilo "o site foi publicado de manhã e fazia 18 °C".
const tz = 'America/Fortaleza'
const builtAt = new Date(__BUILD__.at)
const day = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', timeZone: tz }).format(builtAt)
const hour = +new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', hourCycle: 'h23', timeZone: tz }).format(builtAt)
const period = hour < 12 ? 'manhã' : hour < 18 ? 'tarde' : 'noite'

// Códigos de clima da Open-Meteo (WMO), resumidos.
function sky(code: number) {
  if (code === 0) return 'céu limpo'
  if (code <= 2) return 'poucas nuvens'
  if (code === 3) return 'céu nublado'
  if (code <= 48) return 'neblina'
  if (code <= 57) return 'garoa'
  if (code <= 67) return 'chuva'
  if (code <= 82) return 'pancadas de chuva'
  return 'trovoadas'
}

type Theme = 'system' | 'light' | 'dark'

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem('tema') as Theme) || 'system'
    } catch {
      return 'system'
    }
  })

  function choose(t: Theme) {
    setTheme(t)
    if (t === 'system') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = t
    try {
      localStorage.setItem('tema', t)
    } catch {}
  }

  const options = [
    { value: 'system' as const, label: 'Tema do sistema', Icon: MonitorIcon },
    { value: 'light' as const, label: 'Tema claro', Icon: SunIcon },
    { value: 'dark' as const, label: 'Tema escuro', Icon: MoonIcon },
  ]
  return (
    <div role="group" aria-label="Tema" className="flex rounded-full bg-theme p-1">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => choose(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={`grid h-8 w-8 place-items-center rounded-full transition ${theme === value ? 'bg-bg text-offset shadow-sm' : 'text-text-soft hover:text-text'}`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-20 scroll-mt-8">
      <h2 className="heading">{title}</h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  )
}

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function App() {
  const w = __BUILD__.weather
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 pt-8 text-lg sm:px-6">
        <nav aria-label="Principal" className="flex gap-6">
          <a href="#projetos" className="hover:text-offset">
            Projetos
          </a>
          <a href="#contato" className="hover:text-offset">
            Contato
          </a>
        </nav>
        <ThemeToggle />
      </header>

      <main id="inicio">
        <h1 className="sr-only">{profile.name}, desenvolvedor web em {profile.location}</h1>
        <Strip />

        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="max-w-[42rem] text-lg leading-relaxed">
            <p className="mt-10">
              Este é um site feito por mim, <strong>{profile.name}</strong>, desenvolvedor web de Quixadá, no sertão
              do Ceará. Eu crio sites e sistemas para negócios e empresas.
            </p>
            <ul className="mt-5 list-disc space-y-1 ps-6">
              <li>
                O último deploy deste site foi na {period} de {day}.
              </li>
              {w && (
                <li>
                  Na hora, fazia {w.temp} °C em Quixadá, com {sky(w.code)}.
                </li>
              )}
              <li>O código dele tem {__BUILD__.lines.toLocaleString('pt-BR')} linhas, entre TypeScript e CSS.</li>
              {listening.song && (
                <li>
                  Eu estava ouvindo{' '}
                  <a className="link" href={listening.url} {...ext}>
                    {listening.song}
                  </a>{' '}
                  de {listening.artist}.
                </li>
              )}
            </ul>

            <Section id="servicos" title="O que eu faço">
              <ul className="space-y-4">
                {services.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}:</strong> {s.description}
                  </li>
                ))}
              </ul>
              <p>
                Quer um orçamento?{' '}
                <a className="link" href={whatsappUrl} {...ext}>
                  Me chama no WhatsApp
                </a>{' '}
                👋
              </p>
            </Section>

            <Section id="projetos" title="Projetos">
              <ul className="space-y-6">
                {projects.map((p) => (
                  <li key={p.title}>
                    <p className="font-mono text-xs text-text-soft">{p.stack.join(' · ')}</p>
                    <a className="link text-xl" href={p.liveUrl ?? p.codeUrl} {...ext}>
                      {p.title}
                    </a>
                    <p className="mt-1 text-text-soft">{p.description}</p>
                  </li>
                ))}
              </ul>
              <p>
                <a className="link" href={profile.github} {...ext}>
                  Ver tudo no GitHub
                </a>{' '}
                →
              </p>
            </Section>

            <Section id="como-funciona" title="Como funciona">
              <ol className="list-decimal space-y-2 ps-6 marker:font-mono marker:text-offset">
                {process.map((step) => (
                  <li key={step} className="ps-1">
                    {step}
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="sobre" title="Um pouco sobre mim">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Section>

            <Section id="faq" title="Perguntas frequentes">
              <div className="divide-y divide-text/10 border-y border-text/10">
                {faq.map((item) => (
                  <details key={item.q} className="group py-4">
                    <summary className="cursor-pointer list-none font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="me-2 inline-block font-mono text-offset transition group-open:rotate-45">+</span>
                      {item.q}
                    </summary>
                    <p className="mt-2 ps-6 text-text-soft">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section id="contato" title="Onde me achar">
              <p>O jeito mais rápido de falar comigo é pelo WhatsApp. Respondo também por e-mail e nas redes.</p>
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                <li>
                  <a className="link inline-flex items-center gap-2" href={whatsappUrl} {...ext}>
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a className="link inline-flex items-center gap-2" href={`mailto:${profile.email}`}>
                    <MailIcon className="h-4 w-4" /> {profile.email}
                  </a>
                </li>
                <li>
                  <a className="link inline-flex items-center gap-2" href={profile.linkedin} {...ext}>
                    <LinkedInIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a className="link inline-flex items-center gap-2" href={profile.github} {...ext}>
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </a>
                </li>
              </ul>
            </Section>

            {joys.length > 0 && (
              <Section id="curto" title="Coisas que eu curto">
                <ul className="list-disc gap-x-10 ps-6 sm:columns-2">
                  {joys.map((j) => (
                    <li key={j}>{j}</li>
                  ))}
                </ul>
              </Section>
            )}
          </div>

          <footer className="mt-24 text-sm">
            <p>
              © <strong>{profile.name}</strong>, de 2026 até este exato momento.
            </p>
            <p>Feito em {profile.location} e publicado na Vercel.</p>
          </footer>
        </div>
      </main>

      <a
        href={whatsappUrl}
        {...ext}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  )
}
