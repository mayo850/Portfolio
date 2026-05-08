import { profile } from "../data"
import { Cat } from "./Cat"
import { SectionHeading } from "./SectionHeading"

export function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <SectionHeading eyebrow="Contact" title="Let’s connect">
        Yes!, my cat is still here and is part of this redesign.
      </SectionHeading>

      <div className="contact-grid">
        <article className="panel cat-panel" data-reveal>
          <Cat />
        </article>

        <aside className="panel contact-card" data-reveal>
          <h3>Contact Info</h3>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}><i className="bx bxs-envelope" /><span>{profile.email}</span></a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}><i className="bx bxs-phone" /><span>{profile.phone}</span></a>
          </div>
          <p>Visit my social profiles and get connected.</p>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bx bxl-github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar"><i className="bx bxs-graduation" /></a>
            <a href={profile.researchGate} target="_blank" rel="noreferrer" aria-label="ResearchGate"><i className="bx bx-network-chart" /></a>
          </div>
        </aside>
      </div>
    </section>
  )
}
