"use client"

import { useState, useEffect, useMemo } from "react"
import { Truck, AlertCircle } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

// --- Types & Constants ---
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

const COP_EXCHANGE_RATE = 4000
const PLACEHOLDER_IMAGE = "/placeholder.svg"

// --- Helper Functions ---
const formatPrice = (price: number) => `$ ${price.toLocaleString("es-CO")}`

// --- Sub-components ---

/**
 * Handles image loading state, transitions, and fallback.
 */
function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative aspect-square overflow-hidden rounded-lg bg-muted ${className}`}>
      {!isLoaded && !error && <Skeleton className="absolute inset-0 z-10" />}
      <div className="flex h-full items-center justify-center bg-card p-4">
        <img
          src={error ? PLACEHOLDER_IMAGE : src}
          alt={alt}
          className={`h-full w-full object-contain transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setError(true)
            setIsLoaded(true)
          }}
        />
      </div>
    </div>
  )
}

/**
 * Loading skeleton for a product card.
 */
function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-3 w-1/3" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  )
}

/**
 * Standard product card for the grid.
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#" className="group flex flex-col gap-2">
      <ProductImage src={product.image} alt={product.name} />
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
            {product.installments.count} cuotas de {formatPrice(product.installments.price)} con 0% interes
          </p>
        )}
        {product.freeShipping && (
          <div className="flex items-center gap-1 text-xs font-semibold text-accent">
            <Truck className="h-3 w-3" />
            Envio gratis
            <span className="font-normal text-muted-foreground"> por ser tu primera compra</span>
          </div>
        )}
        <p className="mt-1 text-xs text-secondary group-hover:text-secondary/80 line-clamp-2">
          {product.name}
        </p>
      </div>
    </a>
  )
}

// --- Main Component ---

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch("https://fakestoreapi.com/products?limit=5")
        if (!response.ok) throw new Error("Error al obtener los productos")
        
        const data = await response.json()
        
        const mapped = data.map((item: any) => {
          const priceInCop = Math.round(item.price * COP_EXCHANGE_RATE)
          const discount = Math.floor(Math.random() * 30) + 20
          const originalPrice = Math.round(priceInCop / (1 - discount / 100))
          
          return {
            id: item.id,
            name: item.title,
            image: item.image,
            price: priceInCop,
            originalPrice: originalPrice,
            discount: discount,
            installments: {
              count: 3,
              price: Math.round(priceInCop / 3)
            },
            freeShipping: true
          }
        })

        setProducts(mapped)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Derived state for clarity
  const dailyDeal = products[0]
  const offers = products.slice(1)

  if (error) {
    return (
      <section className="bg-background py-6">
        <div className="mx-auto max-w-7xl px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error}. Por favor, intenta recargar la página más tarde.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-6" aria-label="Productos y ofertas">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          
          {/* Daily Deal Section */}
          <div className="rounded-lg bg-card p-5 shadow-sm lg:w-[340px]">
            <h2 className="mb-4 text-xl font-bold text-foreground">Oferta del dia</h2>
            {loading || !dailyDeal ? (
              <ProductSkeleton />
            ) : (
              <a href="#" className="group block">
                <ProductImage src={dailyDeal.image} alt={dailyDeal.name} className="mb-3" />
                <p className="text-sm text-foreground group-hover:text-secondary line-clamp-2">
                  {dailyDeal.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground line-through">
                  {formatPrice(dailyDeal.originalPrice)}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-normal text-foreground">{formatPrice(dailyDeal.price)}</span>
                  <span className="text-sm font-semibold text-accent">{dailyDeal.discount}% OFF</span>
                </div>
                {dailyDeal.installments && (
                  <p className="text-xs text-accent">
                    {dailyDeal.installments.count} cuotas de {formatPrice(dailyDeal.installments.price)} con 0% interes
                  </p>
                )}
                {dailyDeal.freeShipping && (
                  <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent">
                    <Truck className="h-3 w-3" />
                    Envio gratis
                    <span className="font-normal text-muted-foreground"> por ser tu primera compra</span>
                  </div>
                )}
              </a>
            )}
          </div>

          {/* Offers Grid Section */}
          <div className="flex-1 rounded-lg bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Ofertas</h2>
              <a href="#" className="text-sm font-medium text-secondary hover:text-secondary/80">
                Mostrar todas las ofertas
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => <ProductSkeleton key={i} />)
              ) : (
                offers.map((product) => <ProductCard key={product.id} product={product} />)
              )}
            </div>
          </div>
        </div>

        {/* Meli+ Banner */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-lg bg-ml-dark px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-accent px-2 py-1 text-sm font-bold text-accent-foreground">meli+</span>
            <p className="text-sm font-bold tracking-wide text-card">VIVE MERCADO LIBRE COMO UN EXPERTO</p>
          </div>
          <a href="#" className="rounded-full border-2 border-card/30 px-6 py-2 text-sm font-medium text-card transition-colors hover:bg-card/10">
            Suscribirme desde $ 9.900
          </a>
        </div>
      </div>
    </section>
  )
}

