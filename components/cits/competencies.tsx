const competencies = [
  "Program Management (PPP, SVP, BOT)",
  "Vendor Management & Procurement",
  "Standards & Compliance",
  "Capacity Building & Change Mgmt",
  "Rural Connectivity & Inclusion",
  "Data Platforms & Interoperability",
  "Sovereign Cloud & Residency",
  "Monitoring & Evaluation (M&E)",
]

export function Competencies() {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {competencies.map((c) => (
        <li key={c} className="rounded border border-[#1a1f2b] bg-black p-4 text-sm text-white/90">
          {c}
        </li>
      ))}
    </ul>
  )
}
