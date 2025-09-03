import Link from "next/link"
import { HoloGlobe } from "./holo-globe"

export function Hero() {
  return (
    <section id="hero" className="w-full bg-black text-white" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Title, subtitle, CTA */}
          <div className="space-y-6">
            <h1 id="hero-title" className="text-pretty text-4xl font-bold tracking-tight md:text-6xl">
              Consortium Of IT Services (CITS) Global
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Empowering ICT Transformation Across Developing Nations
            </p>
            <div>
              <Link
                href="#countries"
                className="inline-block rounded-md border border-[#00E5FF] px-6 py-3 text-base font-medium text-white shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-colors hover:bg-[#00E5FF] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-black"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Hologram globe */}
          <div className="relative">
            <div className="rounded-xl border border-cyan-400/30 p-2 shadow-[0_0_40px_rgba(0,229,255,0.15)]">
              <HoloGlobe className="h-[320px] w-full md:h-[420px]" />
            </div>
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-[#00E5FF]/0 blur-[20px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
