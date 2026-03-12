"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const navLinks = [
  { label: "Categorías", hasDropdown: true },
  { label: "Ofertas", href: "#" },
  { label: "Cupones", href: "#" },
  { label: "Supermercado", href: "#", badge: "NUEVO" },
  { label: "Moda", href: "#" },
  { label: "Vender", href: "#" },
  { label: "Portafolios", href: "/portafolio" },
  { label: "Ayuda / PQR", href: "#" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-primary">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center">
            <Image
              src="/mercado.svg"
              alt="Logo"
              width={140}
              height={70}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Search bar */}
          <div className="flex flex-1 items-center">
            <div className="flex w-full max-w-2xl overflow-hidden rounded-sm bg-card shadow-sm">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Buscar productos"
              />
              <button
                className="flex items-center justify-center border-l border-border bg-card px-4 text-muted-foreground transition-colors hover:bg-muted"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right actions (desktop) */}
          <nav className="hidden items-center gap-4 text-sm text-ml-dark lg:flex">
            <a href="#" className="transition-opacity hover:opacity-80">
              Crea tu cuenta
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              Ingresa
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              Mis compras
            </a>
            <a href="#" aria-label="Carrito de compras">
              <ShoppingCart className="h-5 w-5" />
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-ml-dark" />
            ) : (
              <Menu className="h-6 w-6 text-ml-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Nav links bar */}
      <div className="border-t border-primary/60 bg-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-1 md:px-4 md:py-1.5">
          <div className="hidden items-center gap-1 text-sm text-ml-dark md:flex">
            <MapPin className="h-4 w-4" />
            <span>Ingresa tu ubicación</span>
          </div>
          <nav className="flex items-center gap-3 overflow-x-auto whitespace-nowrap text-sm text-ml-dark md:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className="relative flex items-center gap-0.5 px-1 transition-colors hover:text-secondary md:px-0"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                {link.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
          <div className="hidden w-32 md:block" />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="flex flex-col gap-2 px-4 py-3 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Ingresa tu ubicación</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className="flex items-center gap-1 py-1 text-foreground"
              >
                {link.label}
                {link.badge && (
                  <span className="rounded-sm bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <hr className="border-border" />
            <a href="#" className="py-1 text-foreground">
              Crea tu cuenta
            </a>
            <a href="#" className="py-1 text-foreground">
              Ingresa
            </a>
            <a href="#" className="py-1 text-foreground">
              Mis compras
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
