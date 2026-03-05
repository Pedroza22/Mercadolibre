import { Github } from "lucide-react"

const footerLinks = {
  "Acerca de": [
    "Quienes somos",
    "Sustentabilidad",
    "Investor relations",
  ],
  "Otros sitios": [
    "Mercado Pago",
    "Mercado Shops",
    "Mercado Envios",
    "Portafolios",
  ],
  "Ayuda": [
    "Comprar",
    "Vender",
    "Resoluciones de problemas",
  ],
  "Redes sociales": [
    "Twitter",
    "Facebook",
    "Instagram",
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-bold text-foreground">
                {title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-ml-dark px-3 py-1.5 text-xs font-medium text-card transition-opacity hover:opacity-90"
              aria-label="Repositorio en GitHub"
            >
              <Github className="h-4 w-4" />
              Repositorio del proyecto
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Proyecto educativo - Clon de MercadoLibre Colombia. No es un
            sitio oficial.
          </p>
          <p className="text-xs text-muted-foreground">
            {"Copyright \u00a9 2026 - Equipo de Desarrollo"}
          </p>
        </div>
      </div>
    </footer>
  )
}
