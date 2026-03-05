"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  {
    title: "3/3 FECHAS DOBLES",
    subtitle: "Ultimo dia",
    offers: ["HASTA 50% OFF", "HASTA 12 CUOTAS 0% INTERES"],
    bgGradient: "from-primary via-primary to-primary/80",
  },
  {
    title: "OFERTAS IMPERDIBLES",
    subtitle: "Solo hoy",
    offers: ["HASTA 40% OFF", "ENVIO GRATIS"],
    bgGradient: "from-secondary via-secondary to-secondary/80",
  },
  {
    title: "TECNOLOGIA",
    subtitle: "Los mejores precios",
    offers: ["HASTA 30% OFF", "6 CUOTAS SIN INTERES"],
    bgGradient: "from-ml-blue via-ml-blue to-ml-blue/80",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const banner = banners[currentSlide]

  return (
    <section className="relative overflow-hidden bg-primary" aria-label="Promociones destacadas">
      <div className={`flex min-h-[280px] items-center justify-center px-4 py-12 transition-all duration-500 md:min-h-[340px] ${banner.bgGradient}`}>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <span className="rounded-sm bg-ml-dark px-4 py-1 text-xs font-bold tracking-wider text-card">
            {banner.title}
          </span>
          <h2 className="text-4xl font-black italic text-ml-dark md:text-6xl">
            {banner.subtitle}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {banner.offers.map((offer, i) => (
              <div
                key={i}
                className="rounded-lg border-2 border-ml-dark/30 bg-card/90 px-6 py-3 text-center shadow-sm"
              >
                <p className="text-lg font-extrabold text-ml-dark md:text-xl">
                  {offer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
        aria-label="Banner siguiente"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentSlide
                ? "w-4 bg-secondary"
                : "bg-ml-dark/30"
            }`}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
