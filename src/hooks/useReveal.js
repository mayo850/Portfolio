import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])
}
