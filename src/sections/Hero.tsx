import { profile, whatsappUrl } from '../data'
import { ArrowIcon, WhatsAppIcon } from '../icons'
import { btnPrimary, container, link } from '../styles'
import Horizon from './Horizon'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-sky">
      <div className="blueprint absolute inset-0" />

      <div className={`${container} relative z-10 flex-1 pt-16 pb-60 sm:pt-24 sm:pb-80`}>
        <p className="settle font-mono text-xs text-granite sm:text-sm">
          <span className="text-ochre">~/quixada-ce</span> $ desenvolvedor-web<span className="hidden sm:inline"> --disponivel</span>
        </p>
        <h1
          className="settle cursor mt-8 max-w-5xl font-display text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '0.1s' }}
        >
          {profile.headline} <span className="text-ochre">{profile.headlineAccent}</span>
        </h1>
        <p
          className="settle mt-8 max-w-xl text-lg leading-relaxed text-granite"
          style={{ animationDelay: '0.2s' }}
        >
          {profile.proof}
        </p>
        <div className="settle mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ animationDelay: '0.3s' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <WhatsAppIcon className="h-5 w-5" />
            Conversar no WhatsApp
          </a>
          <a href="#projetos" className={link}>
            Ver projetos <ArrowIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>
      </div>

      <Horizon className="absolute inset-x-0 bottom-0 h-[220px] w-full sm:h-[300px] lg:h-[360px]" />
    </section>
  )
}
