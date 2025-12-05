export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="À propos de moi">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">À propos</h2>
      </div>
      <div className="space-y-4">
        <p className="leading-relaxed">
          Développeuse en informatique avec{" "}
          <span className="text-secondary-foreground">trois ans d&apos;expérience</span> en développement
          d&apos;applications desktop, web et en gestion de bases de données. Actuellement en deuxième année de{" "}
          <span className="text-secondary-foreground">Master en Sciences des Données et Analyse</span> à
          l&apos;Université Cadi Ayyad de Safi.
        </p>
        <p className="leading-relaxed">
          Je développe de nouvelles compétences en <span className="text-secondary-foreground">analyse de données</span>
          , <span className="text-secondary-foreground">intelligence artificielle</span> et{" "}
          <span className="text-secondary-foreground">visualisation des données</span>. Ma passion est de créer des
          solutions technologiques qui automatisent et optimisent les processus métiers.
        </p>
        <p className="leading-relaxed">
          Mon approche combine une solide expertise technique avec une compréhension approfondie des besoins
          utilisateurs, me permettant de concevoir des interfaces intuitives et des systèmes robustes.
        </p>
      </div>
    </section>
  )
}
