export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading" data-reveal>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <span>{children}</span>}
    </div>
  )
}
