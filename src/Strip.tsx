import { useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { projects, stack, whatsappUrl } from './data'
import Horizon from './Horizon'
import { WhatsAppIcon } from './icons'

// Faixa horizontal do topo, inspirada no site do Ryan Mulligan: o trabalho vem antes do texto.
// Os cartões inclinam conforme a velocidade da rolagem; "Desentortar" desliga o efeito.

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Tile({ href, label, className, children }: { href: string; label: string; className: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`tile relative block shrink-0 overflow-hidden rounded-lg outline-offset-4 ${className}`}
    >
      {children}
    </a>
  )
}

const deployDay = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', timeZone: 'America/Fortaleza' })
  .format(new Date(__BUILD__.at))
  .replace('.', '')

export default function Strip() {
  const ref = useRef<HTMLDivElement>(null)
  const last = useRef(0)
  const settle = useRef(0)
  const [progress, setProgress] = useState(0)
  const [skew, setSkew] = useState(0)
  const [straight, setStraight] = useState(reducedMotion)

  function onScroll() {
    const el = ref.current!
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? Math.round((el.scrollLeft / max) * 1000) : 0)
    if (!straight) {
      const speed = el.scrollLeft - last.current
      setSkew(Math.max(-9, Math.min(9, -speed * 0.3)))
      clearTimeout(settle.current)
      settle.current = window.setTimeout(() => setSkew(0), 90)
    }
    last.current = el.scrollLeft
  }

  function onRange(value: number) {
    const el = ref.current!
    el.scrollLeft = (value / 1000) * (el.scrollWidth - el.clientWidth)
  }

  const [ottolog, fifa, portfolio] = projects
  const projectTile = (p: (typeof projects)[number]) => (
    <Tile href={p.liveUrl ?? p.codeUrl} label={p.title} className="h-72 w-[30rem] bg-bg-soft max-sm:w-[22rem]">
      <img src={p.image} alt="" width={1280} height={720} className="h-full w-full object-cover object-left-top" />
    </Tile>
  )

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        style={{ '--skew': `${straight ? 0 : skew}deg` } as CSSProperties}
        className="flex gap-4 overflow-x-auto py-6 ps-[max(1rem,calc((100%-72rem)/2+1.5rem))] pe-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projectTile(ottolog)}

        <div className="flex shrink-0 flex-col gap-4">
          <Tile href="#sobre" label="Quixadá, CE" className="h-[8.5rem] w-48 bg-[#1a1b36]">
            <Horizon className="absolute inset-x-0 bottom-0 h-24 w-full" />
            <span className="absolute left-3 top-3 font-mono text-[11px] text-[#f1ece2]">quixadá, ce</span>
          </Tile>
          <Tile href={whatsappUrl} label="Falar no WhatsApp" className="flex h-[8.5rem] w-48 flex-col justify-between bg-whatsapp p-4 text-[#06301a]">
            <WhatsAppIcon className="h-6 w-6" />
            <span className="font-display text-2xl uppercase leading-none">Seu site aqui? Me chama</span>
          </Tile>
        </div>

        {projectTile(fifa)}

        <div className="flex shrink-0 flex-col gap-4">
          <Tile href="#sobre" label="Ferramentas que eu uso" className="h-[8.5rem] w-48 bg-theme p-4">
            <span className="font-mono text-xs leading-relaxed text-text">
              {stack.map((s) => s.toLowerCase()).join(' · ')}
            </span>
          </Tile>
          <Tile href="#inicio" label={`Último deploy em ${deployDay}`} className="flex h-[8.5rem] w-48 flex-col justify-between bg-[#17151f] p-4 font-mono text-xs text-[#f2eee6]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4ade80]" /> no ar
            </span>
            <span>
              deploy · {deployDay}
              <br />
              <span className="text-[#b9b3c7]">vercel</span>
            </span>
          </Tile>
        </div>

        {projectTile(portfolio)}
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 font-mono text-xs uppercase sm:px-6">
        <input
          type="range"
          min={0}
          max={1000}
          value={progress}
          onChange={(e) => onRange(+e.target.value)}
          aria-label="Rolar a faixa de trabalhos"
          className="w-56"
        />
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" checked={straight} onChange={(e) => setStraight(e.target.checked)} />
          Desentortar
        </label>
      </div>
    </div>
  )
}
