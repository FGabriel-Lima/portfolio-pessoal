import { about, facts } from '../data'
import { container, h2, meta, section, comment } from '../styles'

export default function About() {
  return (
    <section id="sobre" className={`${section} bg-sky`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20`}>
        <div className="reveal">
          <p className={comment}>// sobre</p>
          <h2 className={h2}>Prazer, Gabriel.</h2>
          {about.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-granite">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="reveal self-end" style={{ animationDelay: '100ms' }}>
          {facts.map((f) => (
            <div key={f.label} className="border-t border-line py-5">
              <dt className={meta}>{f.label}</dt>
              <dd className="mt-2 text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
