const skillCategories = [
  {
    title: "Développement Web",
    skills: ["Laravel", "PHP", "React", "JavaScript", "HTML/CSS", "Bootstrap", "WordPress"],
  },
  {
    title: "Back-end & Desktop",
    skills: ["C#", ".NET", "JSP", "Node.js"],
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "SQL Server", "Oracle", "MongoDB", "NoSQL", "Merise", "UML"],
  },
  {
    title: "Data Science & IA",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
  },
  {
    title: "Design & Outils",
    skills: ["Figma", "Adobe XD", "Photoshop", "Git", "Scrum", "Agile"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Compétences">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">
          Compétences
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
