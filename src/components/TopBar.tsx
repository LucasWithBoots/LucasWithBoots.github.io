import type { Mode } from '../data'
import { Users } from './Icons'

type Props = {
  mode: Mode
  onToggle: () => void
}

export default function TopBar({ mode, onToggle }: Props) {
  const on = mode === 'pro'

  return (
    <header className="topbar">
      <div className="brand">
        <span className="prompt" aria-hidden="true">
          &gt;_
        </span>
        <span className="name">lucas.dev</span>
        <span className="build">/ build 2026</span>
      </div>

      <button
        type="button"
        className="toggle"
        data-on={on}
        onClick={onToggle}
        aria-pressed={on}
        title="troca todos os textos do site entre a versão honesta e a versão de currículo"
      >
        <Users />
        modo recrutador: <span className="state">{on ? 'on' : 'off'}</span>
      </button>
    </header>
  )
}
