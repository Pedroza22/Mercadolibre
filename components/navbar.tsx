"use client"

import { useState } from "react"
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
          <a href="#" className="flex shrink-0 items-center gap-1">
            <svg
              viewBox="0 0 134 54"
              className="h-9 w-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="67" cy="27" rx="67" ry="27" fill="#FFE600" />
              <path
                d="M67 8C51.536 8 39 18.745 39 32c0 7.348 3.768 13.89 9.662 18.254C43.81 46.368 40.5 39.71 40.5 32.25 40.5 19.552 52.36 9.25 67 9.25s26.5 10.302 26.5 23c0 7.46-3.31 14.118-8.162 18.004C91.232 45.89 95 39.348 95 32 95 18.745 82.464 8 67 8z"
                fill="#2D3277"
              />
              <circle cx="57" cy="26" r="4" fill="#2D3277" />
              <circle cx="77" cy="26" r="4" fill="#2D3277" />
              <path
                d="M56 35c0 0 4 7 11 7s11-7 11-7"
                stroke="#2D3277"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden text-lg font-bold text-ml-dark lg:block">
              mercado<br />libre
            </span>
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
      <div className="border-t border-primary/60 bg-card">
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-1.5 lg:flex">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Ingresa tu ubicación</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-foreground">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className="relative flex items-center gap-0.5 transition-colors hover:text-secondary"
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
          <div className="w-32" />
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
