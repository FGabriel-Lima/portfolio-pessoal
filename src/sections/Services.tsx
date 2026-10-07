import { services } from '../data'
import { container, h2, lead, section, comment } from '../styles'

export default function Services() {
  return (
    <section id="servicos" className={section}>
      <div className={container}>
        <div className="reveal">
          <p className={comment}>// serviços</p>
          <h2 className={h2}>O que eu posso construir para você</h2>
          <p className={lead}>Do primeiro site da sua empresa ao sistema que organiza o dia a dia.</p>
        </div>

        <div className="mt-14 grid border-t border-line md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal border-b border-line py-8 md:px-8 ${i % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}
              style={{ animationDelay: `${(i % 2) * 80}ms` }}
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-granite">{s.description}</p>
              <p className="mt-5 text-sm">
                <span className="text-granite">Ideal para </span>
                <span className="text-ochre">{s.forWhom}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
