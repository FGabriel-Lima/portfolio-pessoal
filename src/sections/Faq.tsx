import { faq } from '../data'
import { container, h2, section, comment } from '../styles'

export default function Faq() {
  return (
    <section id="faq" className={section}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.6fr]`}>
        <div className="reveal">
          <p className={comment}>// faq</p>
          <h2 className={h2}>Perguntas frequentes</h2>
        </div>

        <div className="reveal border-t border-line" style={{ animationDelay: '100ms' }}>
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold tracking-tight transition hover:text-ochre [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="font-mono text-2xl font-normal text-ochre transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="-mt-2 pb-6 pr-10 leading-relaxed text-granite">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
