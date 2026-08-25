// Todos os desenhos são SVG inline — nenhuma dependência de ícones.

type P = { size?: number; className?: string }

export function Smiley({ size = 74 }: P) {
  return (
    <svg
      className="smiley"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M36 20c13.8 0 25 11.2 25 25S49.8 70 36 70 11 58.8 11 45 22.2 20 36 20Z" />
      <path d="M27.5 40c.4-2.2.6-3.4.4-4.8M45.6 40c.4-2.2.6-3.4.4-4.8" />
      <path d="M25.5 50.5c2.6 4.4 6.2 6.6 10.6 6.6s8-2.2 10.6-6.6" />
      <path d="M62 22.5 67 17.5M65.5 31.5l6.5-2M56.5 15.5l2-6" strokeWidth="2" />
    </svg>
  )
}

export function BugArt({ size = 78 }: P) {
  return (
    <svg
      className="art"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ color: 'var(--accent)' }}
      aria-hidden="true"
    >
      <path d="M33 16c1.5 3 2.5 5 3.5 6.5M47 16c-1.5 3-2.5 5-3.5 6.5" />
      <ellipse cx="40" cy="30" rx="8" ry="7" fill="var(--accent-dim)" stroke="currentColor" />
      <ellipse cx="40" cy="49" rx="14" ry="17" fill="var(--accent-dim)" stroke="currentColor" />
      <path d="M40 34v31" />
      <path d="M26 40 14 34M26 50H12M26 59l-11 6M54 40l12-6M54 50h14M54 59l11 6" />
      <circle cx="33" cy="44" r="2" fill="currentColor" stroke="none" />
      <circle cx="46" cy="53" r="2" fill="currentColor" stroke="none" />
      <circle cx="34" cy="57" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="37" cy="28" r="1.3" fill="var(--bg)" stroke="none" />
      <circle cx="43" cy="28" r="1.3" fill="var(--bg)" stroke="none" />
    </svg>
  )
}

export function Fingers({ size = 16 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M9 21V10a1.6 1.6 0 0 1 3.2 0v3" />
      <path d="M12.2 12V9a1.6 1.6 0 0 1 3.2 0v4" />
      <path d="M15.4 13.5V6.5a1.6 1.6 0 0 1 3.2 0V17a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4l-1.6-3a1.5 1.5 0 0 1 2.4-1.6L9 14" />
      <path d="M13.4 3.5 15 5.2" />
    </svg>
  )
}

export function Check({ size = 17 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.5 2.5 4.7-5" />
    </svg>
  )
}

export function Heart({ size = 15 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20Z" />
    </svg>
  )
}

export function Users({ size = 16 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 5.2M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
    </svg>
  )
}

export function LinkedIn({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.9 8.6H3.7V21h3.2V8.6ZM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.7c0-3.2-1.7-4.7-4-4.7a3.4 3.4 0 0 0-3.1 1.7V8.6H9.9V21H13v-6.5c0-1.7.4-2.7 1.9-2.7s2.2.9 2.2 2.7V21h3.2v-7.3Z" />
    </svg>
  )
}

export function GitHub({ size = 20 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function Mail({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </svg>
  )
}
