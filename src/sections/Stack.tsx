import { stack } from '../data'
import { container, h2, meta, section, comment } from '../styles'

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`

export default function Stack() {
  return (
    <section id="tecnologias" className={section}>
      <div className={container}>
        <div className="reveal">
          <p className={comment}>// stack</p>
          <h2 className={h2}>Ferramentas do dia a dia</h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([group, items], i) => (
            <div key={group} className="reveal" style={{ animationDelay: `${i * 70}ms` }}>
              <h3 className={`${meta} border-b border-line pb-3`}>{group}</h3>
              <ul className="mt-5 space-y-3.5">
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
