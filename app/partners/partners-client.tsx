"use client"

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
      <section className="mx-auto max-w-3xl px-6">
        <p className="text-center text-pretty text-white/70">
          We are proud to collaborate with leading organizations across the globe, driving innovation and ICT
          transformation together.
        </p>
      </section>

      {/* Logos grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4" role="list" aria-label="Partner logos">
          {partners.map((p) => (
            <article
              key={p.name}
              className="group aspect-[4/3] rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_0_24px_rgba(34,211,238,0.15)] focus-within:border-cyan-400/60"
              aria-label={p.name}
            >
              <div className="flex h-full items-center justify-center">
                <img
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  className="max-h-14 w-auto object-contain opacity-90 transition group-hover:opacity-100"
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="/contact"
            className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          >
            Become a Partner
          </a>
        </div>
      </section>

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
