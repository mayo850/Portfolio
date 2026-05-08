import { projects } from "../data"
import { SectionHeading } from "./SectionHeading"

export function Projects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <SectionHeading eyebrow="Projects" title="Selected work themes">
        Portfolio sections are intentionally framed around frontend decisions, engineering depth, and quality mindset. I do more too!
      </SectionHeading>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card" data-reveal>
            <span className="project-index">0{index + 1}</span>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
