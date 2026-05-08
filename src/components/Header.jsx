import { useEffect, useState } from "react"
import { navItems, profile } from "../data"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <a className="brand" href="#home" aria-label="Izan Khan home" onClick={closeMenu}>
        <span><i className="bx bxl-c-plus-plus" /></span>
        <strong>omputer Science</strong>
      </a>

      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
        <i className={open ? "bx bx-x" : "bx bx-menu"} />
      </button>

      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
        <a className="phone-link" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} onClick={closeMenu}><i className="bx bxs-phone" /> {profile.phone}</a>
      </nav>
    </header>
  )
}
