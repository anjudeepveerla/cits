const competencies = [
  "Program Management (PPP, SVP, BOT)",
  "Vendor Management & Procurement",
  "Standards & Compliance",
  "Capacity Building & Change Management",
  "Rural Connectivity & Inclusion",
  "Data Platforms & Interoperability",
  "Sovereign Cloud & Residency",
  "Monitoring & Evaluation (M&E)",
]

export function Competencies() {
  return (
    <section id="competencies" className="relative py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-mono text-white text-balance">Competencies</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">
          Cross-disciplinary expertise across policy, technology, operations, and governance:
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((c) => (
            <li key={c} className="rounded-md border border-white/10 bg-black/40 p-4 text-white/90">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
