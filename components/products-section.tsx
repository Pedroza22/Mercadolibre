import { Truck } from "lucide-react"

interface Product {
  id: number
  name: string
  image: string
  originalPrice: number
  price: number
  discount: number
  installments?: { count: number; price: number }
  freeShipping?: boolean
}

const dailyDeal: Product = {
  id: 1,
  name: "Bascula Personal Inteligente Bluetooth Balanza Digital De Peso",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K1tl17yKMqT16K504Y8dxP4xIj8dUR.png",
  originalPrice: 109900,
  price: 63000,
  discount: 42,
  installments: { count: 3, price: 21000 },
  freeShipping: true,
}

const offers: Product[] = [
  {
    id: 2,
    name: "Kit De Pesas Magnux Ejercicio Mancuernas Set Ki...",
    image: "/placeholder-product-1.jpg",
    originalPrice: 999833,
    price: 297900,
    discount: 70,
    installments: { count: 3, price: 99300 },
    freeShipping: true,
  },
  {
    id: 3,
    name: "Proyector Video Beam Portatil Fika P8 4k Hd 720p...",
    image: "/placeholder-product-2.jpg",
    originalPrice: 586385,
    price: 309429,
    discount: 47,
    installments: { count: 6, price: 51572 },
    freeShipping: true,
  },
  {
    id: 4,
    name: "Compresor De Aire Mini Electrico Portatil Magnux...",
    image: "/placeholder-product-3.jpg",
    originalPrice: 219800,
    price: 87900,
    discount: 60,
    installments: { count: 3, price: 29300 },
    freeShipping: true,
  },
  {
    id: 5,
    name: "Tensiometro Digital Bateria Recargable Usb Monit...",
    image: "/placeholder-product-4.jpg",
    originalPrice: 200000,
    price: 79000,
    discount: 60,
    installments: { count: 6, price: 13167 },
    freeShipping: true,
  },
]

function formatPrice(price: number) {
  return `$ ${price.toLocaleString("es-CO")}`
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#" className="group flex flex-col gap-2">
      <div className="aspect-square overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full items-center justify-center bg-card p-4">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
            Imagen del producto
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs text-muted-foreground line-through">
          {formatPrice(product.originalPrice)}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-normal text-foreground">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm font-semibold text-accent">
            {product.discount}% OFF
          </span>
        </div>
        {product.installments && (
          <p className="text-xs text-accent">
            {product.installments.count} cuotas de{" "}
            {formatPrice(product.installments.price)} con 0% interes
          </p>
        )}
        {product.freeShipping && (
          <div className="flex items-center gap-1 text-xs font-semibold text-accent">
            <Truck className="h-3 w-3" />
            Envio gratis
            <span className="font-normal text-muted-foreground">
              {" "}
              por ser tu primera compra
            </span>
          </div>
        )}
        <p className="mt-1 text-xs text-secondary group-hover:text-secondary/80">
          {product.name}
        </p>
      </div>
    </a>
  )
}

export default function ProductsSection() {
  return (
    <section className="bg-background py-6" aria-label="Productos y ofertas">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Daily deal */}
          <div className="rounded-lg bg-card p-5 shadow-sm lg:w-[340px]">
            <h2 className="mb-4 text-xl font-bold text-foreground">
              Oferta del dia
            </h2>
            <a href="#" className="group block">
              <div className="mb-3 aspect-square overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center rounded-md bg-muted p-4 text-xs text-muted-foreground">
                  Imagen del producto destacado
                </div>
              </div>
              <p className="text-sm text-foreground group-hover:text-secondary">
                {dailyDeal.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground line-through">
                {formatPrice(dailyDeal.originalPrice)}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-normal text-foreground">
                  {formatPrice(dailyDeal.price)}
                </span>
                <span className="text-sm font-semibold text-accent">
                  {dailyDeal.discount}% OFF
                </span>
              </div>
              {dailyDeal.installments && (
                <p className="text-xs text-accent">
                  {dailyDeal.installments.count} cuotas de{" "}
                  {formatPrice(dailyDeal.installments.price)} con 0% interes
                </p>
              )}
              {dailyDeal.freeShipping && (
                <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent">
                  <Truck className="h-3 w-3" />
                  Envio gratis
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    por ser tu primera compra
                  </span>
                </div>
              )}
            </a>
          </div>

          {/* Offers grid */}
          <div className="flex-1 rounded-lg bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Ofertas</h2>
              <a
                href="#"
                className="text-sm font-medium text-secondary hover:text-secondary/80"
              >
                Mostrar todas las ofertas
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {offers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Meli+ banner */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-lg bg-ml-dark px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-accent px-2 py-1 text-sm font-bold text-accent-foreground">
              meli+
            </span>
            <p className="text-sm font-bold tracking-wide text-card">
              VIVE MERCADO LIBRE COMO UN EXPERTO
            </p>
          </div>
          <a
            href="#"
            className="rounded-full border-2 border-card/30 px-6 py-2 text-sm font-medium text-card transition-colors hover:bg-card/10"
          >
            Suscribirme desde $ 9.900
          </a>
        </div>
      </div>
    </section>
  )
}
