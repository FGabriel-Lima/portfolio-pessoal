// Assinatura do site: o horizonte de monólitos de Quixadá ao entardecer, desenhado como
// um escaneamento: linhas de varredura dentro das pedras e curvas de contorno empilhadas.
// A Pedra da Galinha Choca (à direita) leva uma anotação com as coordenadas da cidade.
// A última camada tem a cor do resto da página, então o hero "pousa" na seção seguinte.
const ridge =
  'M0 300 C60 296 120 290 170 280 C190 200 230 125 300 118 C370 112 410 190 425 280 C470 286 520 284 560 270 C580 240 610 225 640 228 C672 231 690 255 700 275 C760 285 840 282 880 276 C885 230 900 180 925 150 C915 128 925 104 950 100 C975 97 990 115 985 135 C1040 140 1120 170 1160 230 C1175 255 1180 270 1185 280 C1260 288 1350 286 1440 290 L1440 360 L0 360 Z'

export default function Horizon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className={className}>
      <defs>
        <pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0.5" x2="6" y2="0.5" stroke="#e9b26a" strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
        <clipPath id="ridge-clip">
          <path d={ridge} />
        </clipPath>
      </defs>

      <circle cx="760" cy="238" r="66" fill="none" stroke="#e9b26a" strokeWidth="1.5" className="rise" />
      <circle cx="760" cy="238" r="52" fill="#e9b26a" className="rise" />

      <path
        className="settle"
        style={{ animationDelay: '0.1s' }}
        fill="#22244a"
        d="M0 250 C80 230 140 200 210 205 C280 210 300 240 360 238 C430 236 470 190 560 192 C640 194 660 235 740 236 C820 237 860 210 930 212 C1010 214 1040 240 1120 236 C1200 232 1250 200 1330 204 C1390 207 1420 225 1440 230 L1440 360 L0 360 Z"
      />

      <g className="settle" style={{ animationDelay: '0.25s' }}>
        <path fill="#1c1e3d" d={ridge} />
        <path fill="url(#scan)" d={ridge} />
        <g clipPath="url(#ridge-clip)" fill="none" stroke="#e9b26a">
          <path d={ridge} transform="translate(0 18)" strokeOpacity="0.28" />
          <path d={ridge} transform="translate(0 38)" strokeOpacity="0.16" />
          <path d={ridge} transform="translate(0 60)" strokeOpacity="0.08" />
        </g>
        <path fill="none" stroke="#e9b26a" strokeWidth="1.5" strokeOpacity="0.9" d={ridge} />
      </g>

      <g className="settle" style={{ animationDelay: '0.6s' }} fontFamily="Martian Mono, monospace" fontSize="11">
        <circle cx="950" cy="100" r="3.5" fill="#e9b26a" />
        <path d="M953 97 L1000 50 L1180 50" fill="none" stroke="#a9a6bd" strokeOpacity="0.6" />
        <text x="1006" y="42" fill="#f1ece2">PEDRA DA GALINHA CHOCA</text>
        <text x="1006" y="66" fill="#a9a6bd">4°58′S  39°01′W</text>
        <circle cx="300" cy="118" r="3.5" fill="#e9b26a" />
        <path d="M297 115 L262 80 L120 80" fill="none" stroke="#a9a6bd" strokeOpacity="0.6" />
        <text x="120" y="72" fill="#a9a6bd">QUIXADÁ · CE</text>
      </g>

      <path
        className="settle"
        style={{ animationDelay: '0.4s' }}
        fill="#14152b"
        d="M0 330 C120 322 240 318 330 322 C360 300 395 292 420 300 C440 306 450 318 455 324 C600 330 780 334 960 330 C1100 326 1180 312 1240 316 C1270 318 1285 326 1290 330 C1350 332 1400 334 1440 334 L1440 360 L0 360 Z"
      />
      <path d="M0 334 L1440 334" stroke="#e9b26a" strokeOpacity="0.25" strokeDasharray="2 6" />
    </svg>
  )
}
