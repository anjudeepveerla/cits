const solutions = [
  { title: "Cloud & Infrastructure", desc: "Hybrid cloud, data centers, and network modernization." },
  { title: "Cybersecurity", desc: "Threat detection, SOC, and governance frameworks." },
  { title: "e-Government Platforms", desc: "Citizen services, digital identity, and portals." },
  { title: "Connectivity", desc: "Last-mile, backbone, and rural access programs." },
  { title: "AI & Analytics", desc: "Decision intelligence for public services and enterprises." },
  { title: "Payments & FinTech", desc: "Inclusive digital payments and settlement systems." },
]

export function PartnerSolutions() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((s) => (
        <div key={s.title} className="rounded border border-[#1a1f2b] bg-black p-5">
          <div
            className="mb-3 h-8 w-8 rounded-sm border border-[#ff0080] shadow-[0_0_10px_#ff0080]"
            aria-hidden="true"
          />
          <h3 className="text-white">{s.title}</h3>
          <p className="mt-2 text-sm text-white/80">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
