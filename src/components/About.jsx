import { profile } from "../data"
import { SectionHeading } from "./SectionHeading"

export function About() {
  return (
    <section id="about" className="section-shell about-section">
      <SectionHeading eyebrow="About" title="Not just a theme switch. A cleaner version of the original idea.">
        The rebuild keeps the matrix landing page, bold neon accents, Boxicons, research history, and personal details while moving the site into a modern component structure.
      </SectionHeading>

      <div className="about-grid">
        <article className="panel about-copy" data-reveal>
          <h3>Frontend craft with engineering depth</h3>
          <p>My background combines application development, quality assurance, database work, and technical research. That mix helps me build interfaces that are not only clean, but also easier to test, maintain, and reason about.</p>
          <p>I care about semantic markup, layout systems, responsive behavior, accessibility, and small interaction details that make a site feel intentionally built.</p>
        </article>

        <aside className="panel profile-card" data-reveal>
          <div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><span>Phone</span><a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a></div>
          <div><span>Location</span><p>{profile.location}</p></div>
          <a className="cert-link" href={profile.certification} target="_blank" rel="noreferrer"><i className="bx bxl-microsoft" /> Microsoft Azure Certification</a>
        </aside>
      </div>
    </section>
  )
}
