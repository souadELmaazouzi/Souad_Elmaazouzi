import { Mail, Phone, Github, ArrowUpRight, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Contact</h2>
      </div>
      <div className="rounded-lg border border-border/50 bg-card/50 p-4 sm:p-6 md:p-8">
        <h3 className="mb-3 text-base font-medium text-secondary-foreground sm:mb-4 sm:text-lg">
          Travaillons ensemble
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
          Je suis actuellement à la recherche de nouvelles opportunités. N&apos;hésitez pas à me contacter si vous
          souhaitez discuter d&apos;un projet ou simplement dire bonjour !
        </p>

        <div className="space-y-3 sm:space-y-4">
          <a
            href="mailto:elmaazouzisouad8@gmail.com"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary sm:gap-3 sm:text-base"
          >
            <Mail className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            <span className="break-all">elmaazouzisouad8@gmail.com</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </a>
          <a
            href="tel:+212601349426"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary sm:gap-3 sm:text-base"
          >
            <Phone className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            <span>+212 601 349 426</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </a>
          <a
            href="https://github.com/souadELmaazouzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary sm:gap-3 sm:text-base"
          >
            <Github className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            <span className="truncate">github.com/souadELmaazouzi</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/souad-elmaazouzi-124798250/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary sm:gap-3 sm:text-base"
          >
            <Linkedin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            <span className="truncate">linkedin.com/in/souad-elmaazouzi</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>

      <footer className="mt-8 px-4 text-center text-xs text-muted-foreground sm:mt-12 sm:text-sm md:mt-16">
        <p>
          Conçu avec <span className="text-primary">♥</span> par Souad El Maazouzi
        </p>
        <p className="mt-1">© 2025 Tous droits réservés</p>
      </footer>
    </section>
  )
}
