import { services } from '../data'
import { card, container, eyebrow, h2 } from '../styles'

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28">
      <div className={container}>
        <p className={eyebrow}>Serviços</p>
        <h2 className={h2}>O que eu posso construir para você</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className={`${card} p-6`}>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted">{s.description}</p>
              <p className="mt-6 font-mono text-xs leading-relaxed">
                <span className="text-accent">Ideal para </span>
                <span className="text-muted">{s.forWhom}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
