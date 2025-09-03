import { Hero } from "@/components/hero"
import { KeyCountries } from "@/components/key-countries"
import { AboutCITS } from "@/components/sections/about-cits"
import { PartnerSolutions } from "@/components/sections/partner-solutions"
import { Competencies } from "@/components/sections/competencies"
import { Governance } from "@/components/sections/governance"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/cits/footer"

export default function CITSHomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <SiteHeader /> */} {/* header moved to layout */}
      <Hero />
      <KeyCountries />
      <AboutCITS />
      <PartnerSolutions />
      <Competencies />
      <Governance />
      <Contact />
      <SiteFooter />
    </main>
  )
}
