import { profile, whatsappUrl } from '../data'
import { WhatsAppIcon } from '../icons'
import { btnOutline, btnPrimary, container } from '../styles'

export default function Hero() {
  return (
    <section id="inicio" className="horizon border-b border-accent/30">
      <div className={`${container} flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24`}>
        <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Disponível para projetos
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {profile.headline} <span className="text-accent">{profile.headlineAccent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.proof}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <a href="#projetos" className={btnOutline}>
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  )
}
