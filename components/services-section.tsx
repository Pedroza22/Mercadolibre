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
    title: "Envío gratis",
    description: "Beneficio por ser tu primera compra.",
    action: "Mostrar productos",
  },
  {
    icon: UserCircle,
    title: "Ingresa a tu cuenta",
    description: "Disfruta de ofertas y compra sin límites.",
    action: "Ingresar a tu cuenta",
  },
  {
    icon: MapPin,
    title: "Ingresa tu ubicación",
    description: "Consulta costos y tiempos de entrega.",
    action: "Ingresar ubicación",
  },
  {
    icon: CreditCard,
    title: "Medios de pago",
    description: "Paga tus compras de forma rápida y segura.",
    action: "Conocer medios de pago",
  },
  {
    icon: DollarSign,
    title: "Menos de $40.000",
    description: "Descubre productos con precios bajos.",
    action: "Mostrar productos",
  },
  {
    icon: TrendingUp,
    title: "Más vendidos",
    description: "Explora los productos que son tendencia.",
    action: "Ir a Más vendidos",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-24 pb-8" aria-label="Servicios destacados">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="group flex flex-col items-center justify-between rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg h-full min-h-[220px]"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-slate-100">
                  <service.icon className="h-10 w-10 text-slate-700" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 w-full rounded-md bg-blue-50 py-1.5 text-[11px] font-medium text-blue-600 transition-colors group-hover:bg-blue-100">
                {service.action}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
