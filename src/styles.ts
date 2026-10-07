// Classes Tailwind reutilizadas em mais de um lugar. Estilo, não conteúdo.
export const container = 'mx-auto w-full max-w-5xl px-4 sm:px-6'
export const eyebrow = 'font-mono text-xs uppercase tracking-[0.2em] text-accent'
export const h2 = 'mt-3 text-3xl font-bold tracking-tight sm:text-4xl'
export const card =
  'rounded-2xl border border-border bg-surface transition hover:-translate-y-0.5 hover:border-accent/60'

const btn =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
export const btnPrimary = `${btn} bg-accent text-bg hover:bg-accent-hover`
export const btnOutline = `${btn} border border-border text-text hover:border-accent/60 hover:text-accent`

export const link =
  'inline-flex items-center gap-1 rounded font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
