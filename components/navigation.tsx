"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "about", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Compétences" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-medium transition ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-secondary-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop navigation */}
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center py-3 ${activeSection === item.id ? "active" : ""}`}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-secondary-foreground group-focus-visible:w-16 group-focus-visible:bg-secondary-foreground ${
                    activeSection === item.id ? "w-16 bg-secondary-foreground" : "w-8 bg-muted-foreground"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition group-hover:text-secondary-foreground group-focus-visible:text-secondary-foreground ${
                    activeSection === item.id ? "text-secondary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
