import { projects } from '../data'
import { ArrowIcon } from '../icons'
import { card, container, eyebrow, h2, link } from '../styles'

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 py-20 md:py-28">
      <div className={container}>
        <p className={eyebrow}>Projetos</p>
        <h2 className={h2}>Coisas que eu construí</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const shownUrl = (p.liveUrl ?? p.codeUrl).replace(/^https?:\/\//, '')
            return (
              <article key={p.title} className={`${card} overflow-hidden`}>
                <div className="flex items-center gap-1.5 border-b border-border bg-bg/60 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="ml-2 truncate font-mono text-xs text-muted">{shownUrl}</span>
                </div>
                <img
                  src={p.image}
                  alt={`Tela principal do projeto ${p.title}`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias usadas">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-6">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={link}>
                        Ver site <ArrowIcon className="h-4 w-4" />
                      </a>
                    )}
                    <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className={link}>
                      Código <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
