import { WhatsAppIcon } from './icons'

// Assinatura do site: a stack (em volta) alimenta o site do cliente (no centro).
// Pontos de luz percorrem os fios dos blocos até a janela: ferramenta virando site no ar.
// Coordenadas em % do quadro; tamanhos em cqw para escalar junto no celular.

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`

const blocks = [
  { icon: 'react', x: 13, y: 16, size: 17, from: 'oklch(62% 0.22 280)', to: 'oklch(55% 0.24 300)', end: [27, 31] },
  { icon: 'typescript', text: 'TS', x: 87, y: 14, size: 15, from: 'oklch(62% 0.24 340)', to: 'oklch(52% 0.24 320)', end: [76, 31] },
  { icon: 'tailwindcss', x: 8, y: 64, size: 13, from: 'oklch(65% 0.17 220)', to: 'oklch(50% 0.18 245)', end: [21, 58] },
  { icon: 'postgresql', x: 91, y: 66, size: 15, from: 'oklch(68% 0.22 330)', to: 'oklch(56% 0.24 300)', end: [81, 62] },
  { icon: 'vercel', x: 50, y: 91, size: 13, from: 'oklch(75% 0.14 220)', to: 'oklch(60% 0.2 250)', end: [50, 75] },
]

const wire = (b: (typeof blocks)[number]) => {
  const [ex, ey] = b.end
  const cx = (b.x + ex) / 2 + (ey - b.y) * 0.3
  const cy = (b.y + ey) / 2 - (ex - b.x) * 0.3
  return `M${b.x} ${b.y} Q ${cx} ${cy} ${ex} ${ey}`
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroArt() {
  return (
    <div aria-hidden="true" className="@container relative mx-auto aspect-square w-full max-w-[34rem] select-none">
      <div className="absolute inset-[12%] rounded-full bg-purple/25 blur-3xl" />
      <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-full bg-blue/20 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(78% 0.15 220)" stopOpacity="0.55" />
            <stop offset="1" stopColor="oklch(65% 0.25 295)" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {blocks.map((b, i) => (
          <g key={b.icon}>
            <path d={wire(b)} fill="none" stroke="url(#wire)" strokeWidth="0.35" />
            {!reducedMotion && (
              <circle r="0.9" fill="oklch(85% 0.12 220)">
                <animateMotion dur="2.8s" begin={`${-i * 0.55}s`} repeatCount="indefinite" path={wire(b)} />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* O site do cliente */}
      <div
        className="absolute overflow-hidden rounded-[2.5cqw] border border-white/15 bg-card/90 shadow-[0_30px_80px_-20px_oklch(55%_0.26_295/0.7)] backdrop-blur-md"
        style={{ left: '21%', top: '27%', width: '61%', height: '49%' }}
      >
        <div className="flex items-center gap-[1cqw] border-b border-white/10 bg-bg/60 px-[3cqw] py-[2cqw]">
          <span className="h-[1.6cqw] w-[1.6cqw] rounded-full bg-white/20" />
          <span className="h-[1.6cqw] w-[1.6cqw] rounded-full bg-white/20" />
          <span className="h-[1.6cqw] w-[1.6cqw] rounded-full bg-white/20" />
          <span className="ml-[2cqw] rounded-full bg-white/5 px-[2.5cqw] py-[0.6cqw] font-mono text-[2.6cqw] text-fg-muted">
            suaempresa.com.br
          </span>
        </div>
        <div className="space-y-[2.4cqw] p-[3.5cqw]">
          <div className="flex items-center gap-[1.5cqw]">
            <span className="bg-grad h-[3cqw] w-[3cqw] rounded-[0.8cqw]" />
            <span className="h-[1.2cqw] w-[10cqw] rounded-full bg-white/25" />
            <span className="ml-auto h-[1.2cqw] w-[6cqw] rounded-full bg-white/10" />
            <span className="h-[1.2cqw] w-[6cqw] rounded-full bg-white/10" />
          </div>
          <div className="space-y-[1.4cqw] pt-[1cqw]">
            <div className="h-[2.8cqw] w-[78%] rounded-full bg-white/85" />
            <div className="bg-grad h-[2.8cqw] w-[52%] rounded-full" />
            <div className="h-[1.2cqw] w-[66%] rounded-full bg-white/15" />
          </div>
          <span className="inline-flex items-center gap-[1cqw] rounded-full bg-whatsapp px-[2.6cqw] py-[1.2cqw] text-[2.4cqw] font-semibold text-white">
            <WhatsAppIcon className="h-[2.6cqw] w-[2.6cqw]" /> Fale conosco
          </span>
          <div className="grid grid-cols-3 gap-[1.5cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-[1cqw] rounded-[1.2cqw] border border-white/5 bg-white/[0.04] p-[1.8cqw]">
                <span className="bg-grad block h-[2.2cqw] w-[2.2cqw] rounded-[0.6cqw]" />
                <span className="block h-[1cqw] w-3/4 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <span
        className="absolute flex items-center gap-[1.2cqw] rounded-full border border-white/10 bg-bg/90 px-[2.6cqw] py-[1.2cqw] text-[2.6cqw] font-semibold"
        style={{ right: '15%', top: '23%' }}
      >
        <span className="h-[1.6cqw] w-[1.6cqw] rounded-full bg-whatsapp shadow-[0_0_10px_#25d366]" /> no ar
      </span>

      {blocks.map((b, i) => (
        <div
          key={b.icon}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
        >
          <div
            className="grid animate-float place-items-center rounded-[28%] border border-white/25"
            style={{
              width: `${b.size}cqw`,
              height: `${b.size}cqw`,
              animationDelay: `${-i * 1.3}s`,
              background: `linear-gradient(145deg, ${b.from}, ${b.to})`,
              boxShadow: `0 18px 50px -15px ${b.to}, inset 0 1px 0 rgb(255 255 255 / 0.35)`,
            }}
          >
            {'text' in b ? (
              <span className="font-display text-[6.5cqw] font-bold text-white">{b.text}</span>
            ) : (
              <img src={devicon(b.icon)} alt="" className="w-1/2 brightness-0 invert" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
