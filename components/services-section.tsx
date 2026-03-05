import {
  Package,
  UserCircle,
  MapPin,
  CreditCard,
  DollarSign,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Envio gratis",
    description: "Beneficio por ser tu primera compra.",
  },
  {
    icon: UserCircle,
    title: "Ingresa a tu cuenta",
    description: "Disfruta de ofertas y compra sin limites.",
  },
  {
    icon: MapPin,
    title: "Ingresa tu ubicacion",
    description: "Consulta costos y tiempos de entrega.",
  },
  {
    icon: CreditCard,
    title: "Medios de pago",
    description: "Paga tus compras de forma rapida y segura.",
  },
  {
    icon: DollarSign,
    title: "Menos de $40.000",
    description: "Descubre productos con precios bajos.",
  },
  {
    icon: TrendingUp,
    title: "Mas vendidos",
    description: "Explora los productos que son tendencia.",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-background py-6" aria-label="Servicios destacados">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="flex flex-col items-center gap-3 rounded-lg bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="h-12 w-12 text-secondary" strokeWidth={1.2} />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
