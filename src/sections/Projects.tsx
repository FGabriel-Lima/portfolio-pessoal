import { profile, projects } from '../data'
import { ArrowIcon, GitHubIcon } from '../icons'
import { container, h2, lead, link, panel, section, comment } from '../styles'

export default function Projects() {
  return (
    <section id="projetos" className={section}>
      <div className={container}>
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={comment}>// projetos</p>
            <h2 className={h2}>Projetos recentes</h2>
            <p className={lead}>Sistemas completos, do banco de dados à tela.</p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
            <GitHubIcon className="h-4 w-4" /> Ver tudo no GitHub
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const featured = i === 0
            return (
              <article
                key={p.title}
                className={`${panel} reveal group overflow-hidden hover:border-ochre/50 ${featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.3fr_1fr]' : ''}`}
                style={{ animationDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="overflow-hidden border-b border-line bg-night lg:border-b-0">
                  <img
                    src={p.image}
                    alt={`Tela do projeto ${p.title}`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="aspect-video h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className={`flex flex-col p-6 sm:p-8 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
                  <h3 className={`font-display font-semibold tracking-tight ${featured ? 'text-3xl' : 'text-2xl'}`}>
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-granite">{p.description}</p>
                  <p className="mt-5 font-mono text-xs leading-relaxed text-granite">{p.stack.join('  ·  ')}</p>
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
