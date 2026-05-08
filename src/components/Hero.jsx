import { MatrixCanvas } from "./MatrixCanvas"
import { metrics, profile, roles } from "../data"
import { useTypewriter } from "../hooks/useTypewriter"

export function Hero() {
  const typedRole = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      <MatrixCanvas />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-shell">
        <div className="terminal-window" data-reveal>
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <p>izan@portfolio:~/frontend</p>
          </div>
          <div className="terminal-body">
            <p className="prompt"><span>$</span> whoami</p>
            <h1>{profile.name}</h1>
            <p className="prompt"><span>$</span> role --current</p>
            <p className="hero-role">{typedRole}<span className="caret">_</span></p>
            <p className="hero-summary">I build polished frontend experiences with readable React, semantic HTML, responsive CSS, accessibility awareness, and the engineering discipline that comes from .NET, SQL, QA, and research work.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects"><i className="bx bx-terminal" /> View work</a>
              <a className="button ghost" href={profile.resume} target="_blank" rel="noreferrer"><i className="bx bx-file" /> Resume</a>
            </div>
          </div>
        </div>

        <aside className="identity-panel" data-reveal>
          <div className="scanline-card">
            <div className="portrait-frame">
              <img src={profile.image} alt="Izan Khan" />
            </div>
            <div className="identity-copy">
              <p>Frontend Developer</p>
              <h2>Rebuilt portfolio with modern React.</h2>
            </div>
          </div>
        </aside>
      </div>

      <div className="metric-strip" aria-label="Portfolio highlights">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card" data-reveal>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
