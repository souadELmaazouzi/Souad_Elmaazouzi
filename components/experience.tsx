import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "Mars 2024 — Juin 2024",
    title: "Stagiaire Développeuse",
    company: "AppSynergy Service Informatique",
    location: "Safi",
    description: [
      "Création de maquettes et de logos pour les clients",
      "Gestion de projets R&D, de la conception à la réalisation",
      "Développement d'un site web de formation",
    ],
    technologies: ["Figma", "WordPress", "Design UI/UX"],
  },
  {
    period: "Juil 2022 — Sept 2023",
    title: "Stagiaire PFE - Développeuse Laravel",
    company: "OCP Service Informatique",
    location: "Safi",
    description: [
      "Création d'une application Laravel pour automatiser le processus de production",
      "Conception et développement d'une interface utilisateur intuitive",
      "Collaboration avec les équipes de production et IT",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    period: "Janv 2022 — Juil 2022",
    title: "Stagiaire Développeuse",
    company: "Ayman Bâtiment SARL",
    location: "Safi",
    description: [
      "Création d'une application de gestion de commandes et d'achats",
      "Automatisation des processus d'achat et de suivi des commandes",
      "Gestion des relations clients avec suivi régulier des demandes",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Gestion de projet"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Expérience professionnelle"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Expérience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-secondary-foreground">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-secondary-foreground group-hover:text-primary focus-visible:text-primary">
                        <span>
                          {exp.title} · {exp.company}
                        </span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                    <div className="text-muted-foreground">{exp.location}</div>
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm leading-normal">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                    {exp.technologies.map((tech, i) => (
                      <li key={i}>
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
