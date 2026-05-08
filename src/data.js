export const profile = {
  name: "Izan Khan",
  email: "izan.mayo@hotmail.com",
  phone: "+1 (309) 317-5552",
  location: "Illinois, United States",
  image: "/images/izan.png",
  resume: "/documents/Izan_Khan_Software_Engineer.pdf",
  certification: "https://learn.microsoft.com/api/credentials/share/en-us/IzanMayo-1964/CBACB0E1052375EA?sharingId=CFBF1B7097437A69",
  github: "https://github.com/mayo850?tab=repositories",
  linkedin: "https://www.linkedin.com/in/izankhan/",
  scholar: "https://scholar.google.com/citations?user=vegxlyQAAAAJ&hl=en",
  researchGate: "https://www.researchgate.net/profile/Izan-Khan"
}

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" }
]

export const roles = ["Frontend Developer", "Software Engineer", ".NET Engineer"]

export const services = [
  {
    icon: "bx bxl-html5",
    title: "Interface Design",
    text: "Clean responsive pages with strong layout, accessible structure, and interaction details that feel built instead of generated."
  },
  {
    icon: "bx bx-code-curly",
    title: "Frontend Engineering",
    text: "Component-driven React, readable state, semantic markup, performance-minded CSS, and maintainable UI systems."
  },
  {
    icon: "bx bx-test-tube",
    title: "Quality Assurance",
    text: "A QA mindset across regression, compatibility, usability, localization, database, system, and user acceptance testing."
  }
]

export const skillGroups = [
  {
    title: "Frontend",
    icon: "bx bx-layout",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI", "Accessibility", "Vite"]
  },
  {
    title: "Engineering",
    icon: "bx bx-server",
    skills: ["C#", "VB.NET", "SQL Server", ".NET", "APIs", "Web Forms", "Git"]
  },
  {
    title: "Validation",
    icon: "bx bx-check-shield",
    skills: ["Selenium", "Appium", "STLC", "SDLC", "Regression", "UAT", "Test Data"]
  },
  {
    title: "Data & Research",
    icon: "bx bx-data",
    skills: ["SQL", "MongoDB", "Tableau", "Research", "Documentation", "Analysis"]
  }
]

export const skillBars = [
  { label: "HTML", value: 95 },
  { label: "CSS", value: 92 },
  { label: "JavaScript", value: 88 },
  { label: "SQL", value: 95 },
  { label: ".NET", value: 86 },
  { label: "Testing", value: 90 }
]

export const projects = [
  {
    type: "Frontend Architecture",
    title: "Matrix Portfolio Rebuild",
    description: "A React and Vite rebuild that keeps the original matrix identity, custom cat artwork, Boxicons, and personal visual style while making the codebase component-based and easier to maintain.",
    stack: ["React", "Vite", "CSS", "Canvas", "Accessibility"]
  },
  {
    type: "Software Engineering",
    title: ".NET Application Workflows",
    description: "Experience building and testing business-facing applications with .NET, SQL Server, stored procedures, QA validation, and production-minded debugging.",
    stack: [".NET", "SQL Server", "VB.NET", "C#", "Git"]
  },
  {
    type: "Quality & Research",
    title: "QA + Research Discipline",
    description: "A background in testing, technical research, and documentation that helps turn vague requirements into reliable user experiences.",
    stack: ["QA", "Research", "Documentation", "Testing"]
  }
]

export const metrics = [
  { value: "React", label: "Modern frontend" },
  { value: ".NET", label: "Engineering depth" },
  { value: "SQL", label: "Data logic" },
  { value: "QA", label: "Quality mindset" }
]

export const publications = [
  {
    title: "Dining App",
    description: "Android Studio dining app concept designed for college students.",
    href: "/documents/AppforAugie.pdf",
    image: "/images/photo1.jpg"
  },
  {
    title: "Covid-19 & Developers",
    description: "Research covering remote work and software development at larger scale.",
    href: "/documents/Covid19.pdf",
    image: "/images/photo2.jpg"
  },
  {
    title: "Quantum Computing",
    description: "Research paper focused on IBM Quantum Computing.",
    href: "/documents/IBM.pdf",
    image: "/images/photo3.jpeg"
  },
  {
    title: "TapStrap2 HCI",
    description: "IEEE paper exploring human-computer interaction through TapStrap2.",
    href: "/documents/TapStrap2.pdf",
    image: "/images/photo4.jpg"
  }
]
