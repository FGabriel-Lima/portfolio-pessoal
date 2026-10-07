import { about, skills } from '../data'
import { container, eyebrow, h2 } from '../styles'

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 md:py-28">
      <div className={`${container} grid gap-12 md:grid-cols-5`}>
        <div className="md:col-span-3">
          <p className={eyebrow}>Sobre</p>
          <h2 className={h2}>Prazer, Gabriel</h2>
          {about.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="space-y-6 md:col-span-2 md:pt-16">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <dt className={eyebrow}>{group}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
