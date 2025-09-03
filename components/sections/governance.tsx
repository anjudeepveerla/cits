const items = [
  { title: "PPP Projects", desc: "Structuring public-private partnerships for sustainable ICT impact." },
  { title: "SVP Programs", desc: "Strategic vendor partnerships delivering value at scale." },
  { title: "BOT Models", desc: "Build-Operate-Transfer initiatives with long-term governance." },
]

export function Governance() {
  return (
    <section id="governance" className="relative py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-mono text-white text-balance">Governance</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">
          Executing PPP, SVP, and BOT programs with strong risk management and transparent delivery:
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-lg border border-white/10 bg-black/40 p-6">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
