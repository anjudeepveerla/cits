import { Hero } from "@/components/hero"
import { KeyCountries } from "@/components/key-countries"
import { AboutCITS } from "@/components/sections/about-cits"
import { SiteFooter } from "@/components/cits/footer"

export default function CITSHomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <SiteHeader /> */} {/* header moved to layout */}
      <Hero />
      <AboutCITS />
      <KeyCountries />
      <SiteFooter />
    </main>
  )
}
