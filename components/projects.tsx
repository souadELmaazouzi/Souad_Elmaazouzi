"use client"

import { useState, useRef, useEffect } from "react"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Figma } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Credit Card Anomaly Detection",
    description:
      "Système de détection d'anomalies pour les transactions par carte de crédit utilisant des algorithmes de machine learning.",
    technologies: ["Python", "ML", "Scikit-learn"],
    github: "https://github.com/souadELmaazouzi/CreditCardAnomalyDetection",
    image: "/credit-card-fraud-detection-machine-learning-dashb.jpg",
  },
  {
    title: "CardioAI Assistant",
    description: "Évaluation intelligente et personnalisée de votre santé cardiovasculaire avec l'IA.",
    technologies: ["AI", "Healthcare", "Python"],
    github: "https://github.com/souadELmaazouzi/CardioAI-Assistant",
    image: "/cardio-health-ai-assistant-medical-dashboard.jpg",
  },
  {
    title: "WordPress Theme",
    description: "Thème WordPress personnalisé développé from scratch avec un design moderne.",
    technologies: ["WordPress", "PHP", "CSS"],
    github: "https://github.com/souadELmaazouzi/wordpress",
    image: "/wordpress-theme-modern-portfolio-design.jpg",
  },
  {
    title: "Doctor Landing Page",
    description: "Page d'accueil professionnelle pour un cabinet médical avec design responsive.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/souadELmaazouzi/doctor",
    live: "https://souadelmaazouzi.github.io/doctor/",
    image: "/doctor-medical-landing-page-clean-design.jpg",
  },
  {
    title: "EduSkillMentor",
    description: "Plateforme éducative pour l'apprentissage du développement web.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/souadELmaazouzi/eduskillmentor",
    image: "/e-learning-platform-education-dashboard-courses.jpg",
  },
  {
    title: "Automatisation Production",
    description: "Application d'automatisation des processus de production pour OCP.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/souadELmaazouzi/AUTOMATISATION_PROCESSUS_PRODUCTION",
    image: "/production-automation-factory-dashboard-industrial.jpg",
  },
  {
    title: "The Juice - Mobile App",
    description: "Design UI/UX pour une application mobile de jus et smoothies avec un style moderne.",
    technologies: ["Figma", "UI/UX", "Mobile"],
    figma:
      "https://www.figma.com/proto/R1quREr9wWeIAbMduI9Kia/Untitled?node-id=8-109&p=f&t=iFZBP9DbU0vYGeoL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A109",
    image: "/the-juice-mobile-app-ui-design.jpg",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState(1)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(2)
      } else if (window.innerWidth >= 640) {
        setVisibleCards(1)
      } else {
        setVisibleCards(1)
      }
    }
    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  const maxIndex = Math.max(0, projects.length - visibleCards)

  const scrollTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => scrollTo(currentIndex + 1)
  const prevSlide = () => scrollTo(currentIndex - 1)

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projets">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Projets</h2>
      </div>

      <div className="relative">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-secondary-foreground">Mes Projets</h3>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition hover:bg-secondary hover:text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition hover:bg-secondary hover:text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Projet suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full lg:min-w-[calc(50%-0.5rem)]">
                <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative h-40 w-full overflow-hidden sm:h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="flex flex-col p-4 sm:p-5">
                    <h4 className="text-base font-semibold text-secondary-foreground group-hover:text-primary transition-colors sm:text-lg">
                      {project.title}
                    </h4>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:text-sm">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary sm:px-3 sm:py-1 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-3 pt-3 border-t border-border/50 sm:mt-4 sm:gap-4 sm:pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-primary sm:gap-2 sm:text-sm"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-primary sm:gap-2 sm:text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-primary sm:gap-2 sm:text-sm"
                        >
                          <Figma className="h-4 w-4" />
                          Figma
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-4 flex justify-center gap-2 sm:mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Aller au groupe ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
