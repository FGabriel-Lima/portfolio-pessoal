import { process } from '../data'
import { container, h2, lead, section, comment } from '../styles'

export default function Process() {
  return (
    <section id="processo" className={`${section} bg-sky`}>
      <div className={container}>
        <div className="reveal">
          <p className={comment}>// processo</p>
          <h2 className={h2}>Como a gente trabalha junto</h2>
          <p className={lead}>Cinco passos, da primeira mensagem ao site no ar.</p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="reveal bg-sky p-6 lg:p-7"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="font-mono text-sm text-ochre">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-granite">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
