import {
  BUGS,
  HEADINGS,
  LINKS,
  PROJECTS,
  STACK,
  TIMELINE,
  type Mode,
} from '../data'
import { BugArt, Check, GitHub, LinkedIn, Mail } from './Icons'

type ModeProps = { mode: Mode }

/* -------------------------------------------------------------- 01 */
export function Work({ mode }: ModeProps) {
  return (
    <section>
      <h2>{HEADINGS.trabalho[mode]}</h2>

      <div className="cards">
        {PROJECTS.map((project) => (
          <article className="card" key={project.id}>
            <div className="logo" data-variant={project.logo.variant} aria-hidden="true">
              {project.logo.text}
            </div>

            <div>
              <h3>{project.name}</h3>
              <p>{project.description[mode]}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <p className="note">
              {project.note[mode]}
              {project.id === 'unicarona' && (
                <span className="mark">
                  <Check />
                </span>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- 02 */
export function Lore({ mode }: ModeProps) {
  return (
    <section className="measure">
      <h2>{HEADINGS.lore[mode]}</h2>

      <ol className="timeline">
        {TIMELINE.map((entry) => (
          <li key={entry.year}>
            <span className="year">{entry.year}</span>
            <span className="dot" aria-hidden="true">
              <i />
            </span>
            <span>{entry.text[mode]}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* -------------------------------------------------------------- 03 */
export function Stack({ mode }: ModeProps) {
  return (
    <section className="measure">
      <h2>{HEADINGS.tecnologias[mode]}</h2>

      <div className="stack">
        {STACK.map((group) => (
          <div key={group.title.pro}>
            <h3>{group.title[mode]}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- 04 */
export function Bugs({ mode }: ModeProps) {
  return (
    <section className="measure">
      <h2>{HEADINGS.bugs[mode]}</h2>

      <div className="bugs">
        <BugArt />
        <ul>
          {BUGS.map((bug) => (
            <li key={bug.pro}>{bug[mode]}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- 05 */
export function Contact({ mode }: ModeProps) {
  return (
    <section className="measure">
      <h2>{HEADINGS.contato[mode]}</h2>

      <div className="contact">
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
          <span className="ico">
            <LinkedIn />
          </span>
          linkedin
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
          <span className="ico" data-flat="true">
            <GitHub />
          </span>
          github
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        <a href={`mailto:${LINKS.email}`}>
          <span className="ico" data-flat="true">
            <Mail />
          </span>
          email
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  )
}
