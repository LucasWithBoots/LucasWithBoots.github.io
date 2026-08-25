import { useEffect, useState } from "react";
import { HERO, TERMINAL, type Mode } from "../data";
import { Fingers, Smiley } from "./Icons";

export default function Hero({ mode }: { mode: Mode }) {
  return (
    <div className="hero">
      <div>
        <h1>
          {HERO.name}
          <Smiley />
        </h1>
        <p className="role">{HERO.role}</p>
        <p className="tagline">{HERO.tagline[mode]}</p>

        <ul className="chips">
          {HERO.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div>

      <Terminal mode={mode} />
    </div>
  );
}

/**
 * O café e o foco oscilam sozinhos porque, na vida real, também oscilam.
 * "bugs resolvidos" fica parado — o asterisco já explica tudo.
 */
function Terminal({ mode }: { mode: Mode }) {
  const [drift, setDrift] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setDrift((n) => n + 1), 2600);
    return () => clearInterval(id);
  }, []);

  const jitter = (value: number, i: number) => {
    if (i > 1) return value;
    // variação determinística e pequena, só pra dar sinal de vida.
    const wave = Math.sin(drift * (i + 1.7)) * 3;
    return Math.max(0, Math.min(100, Math.round(value + wave)));
  };

  return (
    <aside className="terminal" aria-label="status atual">
      <div className="inner">
        <div className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <hr className="rule" />
        <ul>
          <li>
            <span>{TERMINAL.path}</span>
          </li>
          {TERMINAL.stats.map((stat, i) => (
            <li key={stat.label}>
              <span>{stat.label}:</span>
              <b>
                {jitter(stat.value, i)}
                {stat.suffix}
              </b>
            </li>
          ))}
        </ul>
      </div>
      <p className="foot">
        <span aria-hidden="true">\_</span>
        {TERMINAL.footnote[mode]}
        <Fingers />
      </p>
    </aside>
  );
}
