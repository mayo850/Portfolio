import { services, skillBars, skillGroups } from "../data"
import { SectionHeading } from "./SectionHeading"

export function Expertise() {
  return (
    <>
      <section id="services" className="section-shell services-section">
        <SectionHeading eyebrow="Services" title="What I bring to the screen">
          A focused mix of frontend UI, software engineering, QA, and technical communication.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card" data-reveal>
              <i className={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <SectionHeading eyebrow="Skills" title="Frontend knowledge backed by practical delivery">
        </SectionHeading>
        <div className="skills-grid">
          <div className="panel skill-cloud-panel" data-reveal>
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3><i className={group.icon} /> {group.title}</h3>
                <div>
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="panel skill-bars" data-reveal>
            {skillBars.map((skill) => (
              <div key={skill.label} className="skill-bar">
                <div><span>{skill.label}</span><strong>{skill.value}%</strong></div>
                <span style={{ "--value": `${skill.value}%` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
