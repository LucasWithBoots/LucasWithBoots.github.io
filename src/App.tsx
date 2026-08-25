import { useEffect, useState } from 'react'
import { FOOTER, THANKS, isSectionId, type Mode, type SectionId } from './data'
import Hero from './components/Hero'
import Nav from './components/Nav'
import TopBar from './components/TopBar'
import { Bugs, Contact, Lore, Stack, Work } from './components/Sections'
import { Heart } from './components/Icons'

const STORAGE_KEY = 'lucas.dev:modo'

function sectionFromHash(): SectionId {
  const hash = window.location.hash.replace('#', '')
  return isSectionId(hash) ? hash : 'trabalho'
}

export default function App() {
  // ?modo=pro já abre no modo recrutador — dá pra mandar o link direto pra alguém
  const [mode, setMode] = useState<Mode>(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('modo')
    if (fromUrl === 'pro' || fromUrl === 'meme') return fromUrl
    return (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? 'meme'
  })

  // a seção visível vive na URL, então voltar/avançar do navegador funciona
  const [section, setSection] = useState<SectionId>(sectionFromHash)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  useEffect(() => {
    const sync = () => setSection(sectionFromHash())
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <div className="shell">
      <TopBar mode={mode} onToggle={() => setMode((m) => (m === 'meme' ? 'pro' : 'meme'))} />

      <main>
        <Hero mode={mode} />
        <Nav active={section} onChange={setSection} />

        {/* a key remonta o painel a cada troca, o que reinicia a animação de entrada */}
        <div className="panel" key={section}>
          {section === 'trabalho' && <Work mode={mode} />}
          {section === 'lore' && <Lore mode={mode} />}
          {section === 'tecnologias' && <Stack mode={mode} />}
          {section === 'bugs' && <Bugs mode={mode} />}
          {section === 'contato' && <Contact mode={mode} />}
        </div>
      </main>

      <footer>
        <p className="left">
          <span className="prompt" aria-hidden="true">
            &gt;_
          </span>
          {FOOTER[mode]}
        </p>
        <p className="right">
          <Heart />
          {THANKS[mode]}
        </p>
      </footer>
    </div>
  )
}
