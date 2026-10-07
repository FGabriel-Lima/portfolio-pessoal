import { profile, whatsappUrl } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from '../icons'
import { btnPrimary, container, eyebrow, h2, link } from '../styles'

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-28">
      <div className={`${container} flex flex-col items-center text-center`}>
        <p className={eyebrow}>Contato</p>
        <h2 className={h2}>Vamos conversar?</h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Me conta o que você precisa e eu te respondo com uma proposta simples e direta.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnPrimary} mt-10 px-8 py-4 text-lg`}
        >
          <WhatsAppIcon className="h-6 w-6" />
          Falar no WhatsApp
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <li>
            <a href={`mailto:${profile.email}`} className={link}>
              <MailIcon className="h-4 w-4" /> {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
