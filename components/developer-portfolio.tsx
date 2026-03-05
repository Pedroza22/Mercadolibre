import { Github, ExternalLink } from "lucide-react"

interface Developer {
  id: number
  name: string
  role: string
  description: string
  avatar: string
  services: string[]
  technologies: string[]
  github: string
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Desarrollador 1",
    role: "Frontend Developer",
    description:
      "Especialista en interfaces de usuario modernas y responsivas. Apasionado por crear experiencias digitales excepcionales.",
    avatar: "",
    services: [
      "Desarrollo de componentes UI",
      "Integracion de APIs",
      "Optimizacion de rendimiento",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    id: 2,
    name: "Desarrollador 2",
    role: "Full Stack Developer",
    description:
      "Desarrollador full stack con experiencia en arquitectura de software y bases de datos escalables.",
    avatar: "",
    services: [
      "Arquitectura de software",
      "Desarrollo backend",
      "Gestion de bases de datos",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker"],
    github: "https://github.com",
  },
  {
    id: 3,
    name: "Desarrollador 3",
    role: "UI/UX Designer & Developer",
    description:
      "Combinando diseno y desarrollo para crear productos digitales centrados en el usuario.",
    avatar: "",
    services: [
      "Diseno de interfaces",
      "Prototipado",
      "Desarrollo frontend",
    ],
    technologies: ["Figma", "React", "CSS", "JavaScript"],
    github: "https://github.com",
  },
  {
    id: 4,
    name: "Desarrollador 4",
    role: "DevOps Engineer",
    description:
      "Experto en automatizacion, CI/CD y despliegue de aplicaciones en la nube.",
    avatar: "",
    services: [
      "Integracion continua",
      "Despliegue automatizado",
      "Monitoreo de aplicaciones",
    ],
    technologies: ["AWS", "GitHub Actions", "Terraform", "Kubernetes"],
    github: "https://github.com",
  },
]

function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="bg-secondary px-5 pb-12 pt-5">
        <p className="text-xs font-medium text-secondary-foreground/70">
          {developer.role}
        </p>
      </div>

      {/* Avatar */}
      <div className="relative -mt-8 px-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-card bg-primary text-xl font-bold text-primary-foreground">
          {developer.name.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 pt-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">
            {developer.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {developer.description}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Servicios
          </h4>
          <ul className="flex flex-col gap-1">
            {developer.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tecnologias
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {developer.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/30 px-2.5 py-0.5 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-auto pt-2">
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-ml-dark px-4 py-2 text-sm font-medium text-card transition-opacity hover:opacity-90"
          >
            <Github className="h-4 w-4" />
            Ver perfil en GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function DeveloperPortfolio() {
  return (
    <section className="bg-muted py-12" aria-label="Equipo de desarrollo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Equipo de Desarrollo
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Conoce a los desarrolladores detras de este proyecto colaborativo
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {developers.map((dev) => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      </div>
    </section>
  )
}
