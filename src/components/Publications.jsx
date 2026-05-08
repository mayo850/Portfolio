import { publications } from "../data"
import { SectionHeading } from "./SectionHeading"

export function Publications() {
  return (
    <section id="publications" className="section-shell publications-section">
      <SectionHeading eyebrow="Publications" title="Published work and technical writing">
        Research experience adds depth to how I investigate problems, communicate tradeoffs, and document solutions.
      </SectionHeading>

      <div className="publication-grid">
        {publications.map((publication) => (
          <a key={publication.title} className="publication-card" href={publication.href} target="_blank" rel="noreferrer" data-reveal>
            <img src={publication.image} alt="" />
            <div>
              <h3>{publication.title}</h3>
              <p>{publication.description}</p>
              <span>Open paper <i className="bx bx-link-external" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
