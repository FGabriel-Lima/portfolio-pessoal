// Cartão-postal de Quixadá: os monólitos ao entardecer, com a Pedra da Galinha Choca à direita,
// desenhados como um escaneamento (linhas de varredura e curvas de contorno).
const ridge =
  'M0 300 C60 296 120 290 170 280 C190 200 230 125 300 118 C370 112 410 190 425 280 C470 286 520 284 560 270 C580 240 610 225 640 228 C672 231 690 255 700 275 C760 285 840 282 880 276 C885 230 900 180 925 150 C915 128 925 104 950 100 C975 97 990 115 985 135 C1040 140 1120 170 1160 230 C1175 255 1180 270 1185 280 C1260 288 1350 286 1440 290 L1440 360 L0 360 Z'

export default function Horizon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className={className}>
      <defs>
        <pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.5" x2="6" y2="0.5" stroke="#e9b26a" strokeOpacity="0.2" strokeWidth="1" />
        </pattern>
        <clipPath id="ridge-clip">
          <path d={ridge} />
        </clipPath>
      </defs>
      <circle cx="760" cy="238" r="52" fill="#e9b26a" />
      <path
        fill="#22244a"
        d="M0 250 C80 230 140 200 210 205 C280 210 300 240 360 238 C430 236 470 190 560 192 C640 194 660 235 740 236 C820 237 860 210 930 212 C1010 214 1040 240 1120 236 C1200 232 1250 200 1330 204 C1390 207 1420 225 1440 230 L1440 360 L0 360 Z"
      />
      <path fill="#14152b" d={ridge} />
      <path fill="url(#scan)" d={ridge} />
      <g clipPath="url(#ridge-clip)" fill="none" stroke="#e9b26a">
        <path d={ridge} transform="translate(0 18)" strokeOpacity="0.3" />
        <path d={ridge} transform="translate(0 38)" strokeOpacity="0.15" />
      </g>
      <path fill="none" stroke="#e9b26a" strokeWidth="2" d={ridge} />
    </svg>
  )
}
