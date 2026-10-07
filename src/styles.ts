// Classes Tailwind reutilizadas em mais de um lugar. Estilo, não conteúdo.
export const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6'
export const section = 'scroll-mt-20 py-20 md:py-28'
export const h2 = 'font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl md:text-4xl'
// Rótulo de seção em forma de comentário de código.
export const comment = 'mb-4 font-mono text-sm text-ochre'
export const lead = 'mt-4 max-w-2xl text-lg leading-relaxed text-granite'
export const meta = 'font-mono text-xs uppercase tracking-[0.12em] text-granite'

const focus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-night'
export const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-lg bg-ochre px-6 py-3.5 font-mono text-sm font-semibold text-night transition hover:bg-ochre-soft ${focus}`
export const link = `inline-flex items-center gap-1.5 rounded font-mono text-sm font-medium text-ochre underline-offset-4 transition hover:underline ${focus}`

export const panel = 'rounded-2xl border border-line bg-surface transition-colors'
