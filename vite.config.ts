import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Fatos "ao vivo" do site, calculados a cada build (no seu PC ou na Vercel).

// Clima atual em Quixadá pela Open-Meteo (grátis, sem chave). Se falhar, o site só omite a frase.
async function quixadaWeather() {
  try {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=-4.97&longitude=-39.02&current=temperature_2m,weather_code&timezone=America%2FFortaleza'
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    const { current } = await res.json()
    return { temp: Math.round(current.temperature_2m), code: current.weather_code as number }
  } catch {
    return null
  }
}

function countLines(dir: string) {
  return (readdirSync(dir, { recursive: true }) as string[])
    .filter((f) => /\.(tsx?|css)$/.test(f))
    .reduce((sum, f) => sum + readFileSync(join(dir, f), 'utf8').split('\n').length, 0)
}

export default defineConfig(async () => ({
  plugins: [react(), tailwindcss()],
  define: {
    __BUILD__: JSON.stringify({
      at: new Date().toISOString(),
      weather: await quixadaWeather(),
      lines: countLines('src'),
    }),
  },
}))
