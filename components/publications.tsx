import { Award, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const publications = [
  {
    title: "Ontology-Based Representation of the Traditional Practices of Moroccan Safi Pottery",
    conference:
      "IEEE International Conference on Advances in Data-Driven Analytics and Intelligent Systems (ADACIS 2025)",
    location: "Sousse, Tunisie",
    date: "November 20-22, 2025",
    type: "Conference Paper",
    certificateImage: "/images/certificate-ieee.jpg",
  },
]

export function Publications() {
  return (
    <section
      id="publications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Publications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">
          Publications
        </h2>
      </div>
      <div>
        {publications.map((pub, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden rounded-xl border border-border bg-secondary/30 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              {/* Certificate Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <Image
                  src={pub.certificateImage || "/placeholder.svg"}
                  alt={`Certificate for ${pub.title}`}
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-snug text-secondary-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pub.conference}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {pub.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    {pub.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
