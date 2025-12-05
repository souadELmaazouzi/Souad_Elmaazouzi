import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Gradient background effect */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl sm:h-[500px] sm:w-[500px]" />
        <div className="absolute bottom-0 -right-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-4 py-12 sm:px-6 md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        {/* Left side - Fixed header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Hero />
          <Navigation />
        </header>

        {/* Right side - Scrollable content */}
        <main className="pt-16 sm:pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Publications />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  )
}
