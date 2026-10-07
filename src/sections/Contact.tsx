import { profile, whatsappUrl } from '../data'
import { WhatsAppIcon } from '../icons'
import { btnPrimary, container, link, section, comment } from '../styles'

export default function Contact() {
  return (
    <section id="contato" className={`${section} border-t border-line`}>
      <div className={`${container} reveal`}>
        <p className={comment}>// contato</p>
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          Vamos tirar o seu site <span className="text-ochre">do papel?</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-granite">
          Me conta o que você precisa e eu respondo com uma proposta simples e direta.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <WhatsAppIcon className="h-5 w-5" />
            Conversar no WhatsApp
          </a>
          <a href={`mailto:${profile.email}`} className={link}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  )
}
