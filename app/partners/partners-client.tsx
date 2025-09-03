"use client"

import { SiteFooter } from "@/components/cits/footer"

type Partner = { name: string; src: string; alt: string }

const partners: Partner[] = [
  { name: "WISSEN", src: "/partners/wissen.png", alt: "WISSEN logo" },
  { name: "KARVY InnoTech", src: "/partners/karvy-innotech.png", alt: "KARVY InnoTech logo" },
  { name: "EXIGA Software Services", src: "/partners/exiga.png", alt: "EXIGA Software Services logo" },
  { name: "NWD", src: "/partners/nwd.png", alt: "NWD logo" },
  { name: "DATAFLIX", src: "/partners/dataflix.png", alt: "DATAFLIX logo" },
  { name: "NEXTURN", src: "/partners/nexturn.png", alt: "NEXTURN logo" },
]

export default function PartnersClientPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden" aria-labelledby="partners-hero">
        {/* subtle blue→violet radial accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
          <h1 id="partners-hero" className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Our Partners
          </h1>
          <p className="mt-4 text-lg text-white/70">Proudly Collaborating with Industry Leaders</p>
          {/* animated underline */}
          <div className="mx-auto mt-6 h-px w-24 overflow-hidden rounded bg-white/10">
            <span className="block h-px w-1/3 animate-[slide_2s_ease-in-out_infinite] bg-cyan-400" />
          </div>
        </div>
      </section>

      {/* Optional intro */}
      <section className="mx-auto max-w-3xl px-6 py-4">
        <p className="text-center text-pretty text-white/70">
          We are proud to collaborate with leading organizations across the globe, driving innovation and ICT
          transformation together.
        </p>
      </section>

      {/* Holographic Globe Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
          <div className="relative w-full h-full">
            {/* Holographic globe effect with dots */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/10 via-transparent to-transparent">
              {Array.from({ length: 50 }).map((_, i) => {
                const angle = (i / 50) * Math.PI * 2
                const radius = 120 + Math.random() * 60
                const x = Math.cos(angle) * radius + 192
                const y = Math.sin(angle) * radius + 192
                const size = Math.max(1, 4 - (i / 50) * 3)
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      width: `${size}px`,
                      height: `${size}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Logos grid */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3" role="list" aria-label="Partner logos">
          {partners.map((p) => (
            <article
              key={p.name}
              className="group relative aspect-[4/3] rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.25)] hover:scale-105 focus-within:border-cyan-400/70 backdrop-blur-sm"
              aria-label={p.name}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative flex h-full items-center justify-center">
                <img
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  className="max-h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  style={{ filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              
              {/* Partner name overlay */}
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="text-xs font-medium text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {p.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(-66%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(66%);
          }
        }
      `}</style>
    </main>
  )
}
