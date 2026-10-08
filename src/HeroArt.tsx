// Ilustração do hero: blocos de vidro com os logos da stack, ligados como uma rede.
// Mesma linguagem do site de referência (cor viva, brilho, cartões flutuantes), forma própria.

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`

// x/y e size em % da largura do quadro (escala junto no celular); from/to = cores do degradê.
const blocks = [
  { icon: 'react', x: 52, y: 47, size: 27.9, from: 'oklch(62% 0.22 280)', to: 'oklch(55% 0.24 300)', delay: 0 },
  { icon: 'typescript', text: 'TS', x: 22, y: 26, size: 19.1, from: 'oklch(62% 0.24 340)', to: 'oklch(52% 0.24 320)', delay: -2 },
  { icon: 'vercel', x: 80, y: 27, size: 17.6, from: 'oklch(75% 0.14 220)', to: 'oklch(60% 0.2 250)', delay: -4 },
  { icon: 'tailwindcss', x: 13, y: 58, size: 13.2, from: 'oklch(65% 0.17 220)', to: 'oklch(50% 0.18 245)', delay: -1 },
  { icon: 'postgresql', x: 84, y: 72, size: 17.6, from: 'oklch(68% 0.22 330)', to: 'oklch(56% 0.24 300)', delay: -3 },
  { icon: 'prisma', x: 48, y: 86, size: 13.2, from: 'oklch(60% 0.2 255)', to: 'oklch(50% 0.22 275)', delay: -5 },
]

const center = blocks[0]

export default function HeroArt() {
  return (
    <div aria-hidden="true" className="@container relative mx-auto aspect-square w-full max-w-[34rem] select-none">
      <div className="absolute inset-[10%] rounded-full bg-purple/25 blur-3xl" />
      <div className="absolute right-0 top-[5%] h-1/2 w-1/2 rounded-full bg-blue/20 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(78% 0.15 220)" stopOpacity="0.7" />
            <stop offset="1" stopColor="oklch(65% 0.25 295)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {blocks.slice(1).map((b) => (
          <path
            key={b.icon}
            d={`M${center.x} ${center.y} Q ${(center.x + b.x) / 2 + (b.y - center.y) * 0.25} ${(center.y + b.y) / 2 - (b.x - center.x) * 0.25} ${b.x} ${b.y}`}
            fill="none"
            stroke="url(#wire)"
            strokeWidth="0.35"
          />
        ))}
        {[
          [35, 12], [92, 45], [8, 48], [66, 95], [30, 92], [70, 6], [95, 92],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.6" fill="oklch(85% 0.08 240)" opacity="0.6" />
        ))}
      </svg>

      {blocks.map((b) => (
        <div
          key={b.icon}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
        >
          <div
            className="grid animate-float place-items-center rounded-[28%] border border-white/25 shadow-2xl backdrop-blur-md"
            style={{
              width: `${b.size}cqw`,
              height: `${b.size}cqw`,
              animationDelay: `${b.delay}s`,
              background: `linear-gradient(145deg, ${b.from}, ${b.to})`,
              boxShadow: `0 20px 60px -15px ${b.to}, inset 0 1px 0 rgb(255 255 255 / 0.35)`,
            }}
          >
            {'text' in b ? (
              <span className="font-display text-[8cqw] font-bold text-white">{b.text}</span>
            ) : (
              <img src={devicon(b.icon)} alt="" className="w-1/2 brightness-0 invert" />
            )}
          </div>
        </div>
      ))}

      <div
        className="absolute left-[46%] top-[1%] hidden animate-float rounded-xl border border-white/10 bg-card/80 px-4 py-2.5 backdrop-blur sm:block"
        style={{ animationDelay: '-2.5s' }}
      >
        <p className="text-xs text-fg-muted">Formação</p>
        <p className="font-display font-bold">Eng. de Software · UFC</p>
      </div>
      <div
        className="absolute bottom-[8%] left-[2%] hidden animate-float rounded-xl border border-white/10 bg-card/80 px-4 py-2.5 backdrop-blur sm:block"
        style={{ animationDelay: '-4.5s' }}
      >
        <p className="text-xs text-fg-muted">Seu site</p>
        <p className="text-grad font-display font-bold">No ar e responsivo</p>
      </div>
    </div>
  )
}
