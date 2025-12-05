import { Github, Mail, Phone, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="text-center lg:text-left">
      <div className="mb-6 flex justify-center lg:justify-start">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl shadow-primary/10 sm:h-40 sm:w-40">
          <Image src="/images/profile.png" alt="Souad El Maazouzi" fill className="object-cover" priority />
        </div>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
        <a href="/">Souad El Maazouzi</a>
      </h1>
      <h2 className="mt-3 text-base font-medium tracking-tight text-primary sm:text-lg lg:text-xl">
        Développeuse Full Stack & Data Scientist
      </h2>
      <p className="mx-auto mt-4 max-w-xs leading-relaxed text-muted-foreground lg:mx-0">
        Je crée des applications web élégantes et j&apos;explore le monde de la science des données et de
        l&apos;intelligence artificielle.
      </p>

      <ul className="mt-8 flex items-center justify-center gap-5 lg:justify-start" aria-label="Social media">
        <li>
          <a
            href="https://github.com/souadELmaazouzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/souad-elmaazouzi-124798250/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:elmaazouzisouad8@gmail.com"
            className="block text-muted-foreground transition hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="tel:+212601349426"
            className="block text-muted-foreground transition hover:text-primary"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  )
}
