const items = [
  {
    title: "PPP Projects",
    desc: "Structuring public-private partnerships for sustainable ICT impact.",
  },
  {
    title: "SVP Programs",
    desc: "Strategic vendor partnerships delivering value at scale.",
  },
  {
    title: "BOT Models",
    desc: "Build-Operate-Transfer initiatives with long-term governance.",
  },
]

export function Governance() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((i) => (
        <article key={i.title} className="rounded border border-[#1a1f2b] bg-black p-5">
          <h3 className="text-white">{i.title}</h3>
          <p className="mt-2 text-sm text-white/80">{i.desc}</p>
        </article>
      ))}
    </div>
  )
}
