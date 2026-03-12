"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = ["/prom1.jpg", "/prom2.jpg", "/prom3.jpg"]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative overflow-hidden bg-primary" aria-label="Promociones destacadas">
      <div className="relative min-h-[340px] md:min-h-[480px]">
        <Image
          key={images[currentSlide]}
          src={images[currentSlide]}
          alt="Promoción destacada"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Banner siguiente"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === currentSlide
                ? "w-8 bg-white shadow-md"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
