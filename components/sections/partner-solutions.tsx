const items = [
  { title: "Cloud & Infrastructure", desc: "Hybrid cloud, data centers, and network modernization." },
  { title: "Cybersecurity", desc: "Threat detection, SOC, and governance frameworks." },
  { title: "e-Government Platforms", desc: "Citizen services, digital identity, and portals." },
  { title: "Connectivity", desc: "Last-mile, backbone, and rural access programs." },
  { title: "AI & Analytics", desc: "Decision intelligence for public services and enterprises." },
  { title: "Payments & FinTech", desc: "Inclusive digital payments and settlement systems." },
]

export function PartnerSolutions() {
  return (
    <section id="solutions" className="relative py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-mono text-white text-balance">Partner Solutions</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">
          A portfolio of technology solution areas that enable national platforms and enterprise modernization:
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-lg border border-white/10 bg-black/40 p-5 hover:border-cyan-400/60 transition-colors"
            >
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
