import Navbar from "@/components/navbar"
import HeroBanner from "@/components/hero-banner"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import DeveloperPortfolio from "@/components/developer-portfolio"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <ServicesSection />
        <ProductsSection />
        <DeveloperPortfolio />
      </main>
      <Footer />
    </div>
  )
}
