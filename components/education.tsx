import { GraduationCap } from "lucide-react"

const education = [
  {
    period: "2024 — 2026",
    degree: "Master en Sciences des Données et Analyse",
    institution: "Université Cadi Ayyad",
    location: "Safi",
    status: "En cours (2ème année)",
  },
  {
    period: "2022 — 2023",
    degree: "Licence Professionnelle en Administration de Base de Données",
    institution: "Université Chouaib Doukkali",
    location: "El Jadida",
    status: "Diplômée",
  },
  {
    period: "2020 — 2022",
    degree: "Diplôme Technicien Spécialisé en Développement Informatique",
    institution: "ISTA NTIC",
    location: "Safi",
    status: "Diplômée",
  },
  {
    period: "2020",
    degree: "Baccalauréat",
    institution: "Lycée Hassan II",
    location: "Safi",
    status: "Diplômée",
  },
]

export function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Formation">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Formation</h2>
      </div>
      <div className="relative">
        <div className="absolute left-[7px] top-3 h-[calc(100%-24px)] w-px bg-border" />
        <ol className="space-y-8">
          {education.map((edu, index) => (
            <li key={index} className="relative pl-8">
              <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                <GraduationCap className="h-2.5 w-2.5 text-primary-foreground" />
              </div>
              <div className="group">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {edu.period}
                </span>
                <h3 className="text-base font-medium leading-snug text-secondary-foreground">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}, {edu.location}
                </p>
                <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {edu.status}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Languages */}
      <div className="mt-12 rounded-lg border border-border/50 bg-card/50 p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Langues</h3>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇫🇷</span>
            <span className="text-secondary-foreground">Français</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇬🇧</span>
            <span className="text-secondary-foreground">Anglais</span>
          </div>
        </div>
      </div>
    </section>
  )
}
