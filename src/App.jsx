import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Expertise } from "./components/Expertise"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Publications } from "./components/Publications"
import { useReveal } from "./hooks/useReveal"
import "./styles.css"

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
