import { SECTIONS, type SectionId } from '../data'

type Props = {
  active: SectionId
  onChange: (id: SectionId) => void
}

/**
 * O menu é a navegação do site: cada item mostra só a sua seção.
 * São links de verdade (`#lore`), então deep link e botão voltar funcionam.
 */
export default function Nav({ active, onChange }: Props) {
  return (
    <nav className="nav" aria-label="seções">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? 'page' : undefined}
          onClick={() => onChange(section.id)}
        >
          <span className="num">{section.num}</span>/ {section.label}
        </a>
      ))}
    </nav>
  )
}
