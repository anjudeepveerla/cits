"use client"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SiteFooter } from "@/components/cits/footer"

// Technology data
const technologyData = [
  {
    technology: "IT HW - EUC & IT Infra",
    partner1: "NWD (New World Distribution)",
    partner2: "",
    partner3: "",
    partner4: "",
  },
  {
    technology: "DS Build",
    partner1: "NexTurn",
    partner2: "",
    partner3: "",
    partner4: "",
  },
  {
    technology: "Workplace Solutions or EUC Support Services",
    partner1: "Wissen",
    partner2: "Karvy InnoTech",
    partner3: "",
    partner4: "",
  },
  {
    technology: "IT - Info-Security",
    partner1: "NexTurn",
    partner2: "SanStark",
    partner3: "Effecience",
    partner4: "Othware",
  },
  {
    technology: "Cloud (Huawei, AWS, Azure & GCP)",
    partner1: "NexTurn",
    partner2: "DataFlix",
    partner3: "Effecience",
    partner4: "Othware",
  },
  {
    technology: "Data, Big Data",
    partner1: "DataFlix",
    partner2: "NexTurn",
    partner3: "Effecience",
    partner4: "",
  },
  {
    technology: "Analytics",
    partner1: "DataFlix",
    partner2: "Effecience",
    partner3: "NexTurn",
    partner4: "",
  },
  {
    technology: "AI",
    partner1: "DataFlix",
    partner2: "Effecience",
    partner3: "NexTurn",
    partner4: "Glitex Solutions Limited",
  },
  {
    technology: "Automations",
    partner1: "DataFlix",
    partner2: "Effecience",
    partner3: "NexTurn",
    partner4: "",
  },
  {
    technology: "IoT",
    partner1: "Exiga",
    partner2: "Karvy InnoTech",
    partner3: "",
    partner4: "",
  },
  {
    technology: "SAP",
    partner1: "Exiga",
    partner2: "ROBOXA",
    partner3: "Arc Technology",
    partner4: "Techsavanna",
  },
  {
    technology: "Oracle",
    partner1: "Beon IT",
    partner2: "Abacus",
    partner3: "",
    partner4: "",
  },
]

export default function ConsortiumClientPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden" aria-labelledby="consortium-hero">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
          <h1 id="consortium-hero" className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Consortium Of IT Services – Global (CITS-Global)
          </h1>
          <p className="mt-4 text-lg text-white/70">Founders, Investors & Global Operations</p>
          <div className="mx-auto mt-6 h-px w-24 overflow-hidden rounded bg-white/10">
            <span className="block h-px w-1/3 animate-[slide_2s_ease-in-out_infinite] bg-cyan-400" />
          </div>
        </div>
      </section>

      {/* Regional Blocks */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Africa */}
          <div className="group relative overflow-hidden rounded-xl border border-green-400/30 bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-[0_0_24px_rgba(34,197,94,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-green-300">Consortium of IT Services – Africa (CITS-A)</h2>
              <p className="mt-2 text-sm text-green-200/80">Regional Director, CGO & Strategic Partners</p>
              <div className="mt-4 h-0.5 w-16 rounded bg-gradient-to-r from-green-400 to-green-600" />
            </div>
          </div>

          {/* GCC */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-slate-800/10 p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-blue-300">Consortium of IT Services – GCC (CITS-GCC)</h2>
              <p className="mt-2 text-sm text-blue-200/80">Regional Director, CGO & Strategic Partners</p>
              <div className="mt-4 h-0.5 w-16 rounded bg-gradient-to-r from-blue-400 to-slate-600" />
            </div>
          </div>

          {/* Sri Lanka */}
          <div className="group relative overflow-hidden rounded-xl border border-yellow-400/30 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 p-6 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_24px_rgba(234,179,8,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-yellow-300">Consortium of IT Services – Sri Lanka (CITS-S)</h2>
              <p className="mt-2 text-sm text-yellow-200/80">Regional Director, CGO & Strategic Partners</p>
              <div className="mt-4 h-0.5 w-16 rounded bg-gradient-to-r from-yellow-400 to-yellow-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Table Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Technology Partnerships</h2>
          <p className="mt-2 text-sm text-white/70">Consortium partners across different technology domains</p>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded bg-gradient-to-r from-cyan-400 to-violet-500" />
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_0_28px_rgba(34,211,238,0.15)]">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="h-12 px-4 text-left font-semibold text-white/90">Technology</TableHead>
                <TableHead className="h-12 px-4 text-left font-semibold text-white/90">Consortium Partner-1</TableHead>
                <TableHead className="h-12 px-4 text-left font-semibold text-white/90">Consortium Partner-2</TableHead>
                <TableHead className="h-12 px-4 text-left font-semibold text-white/90">Consortium Partner-3</TableHead>
                <TableHead className="h-12 px-4 text-left font-semibold text-white/90">Consortium Partner-4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {technologyData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className={cn(
                    "border-white/10 transition-colors hover:bg-white/5",
                    index % 2 === 0 ? "bg-white/2" : "bg-white/5"
                  )}
                >
                  <TableCell className="px-4 py-3 font-medium text-white/90">{row.technology}</TableCell>
                  <TableCell className="px-4 py-3 text-white/80">{row.partner1 || "-"}</TableCell>
                  <TableCell className="px-4 py-3 text-white/80">{row.partner2 || "-"}</TableCell>
                  <TableCell className="px-4 py-3 text-white/80">{row.partner3 || "-"}</TableCell>
                  <TableCell className="px-4 py-3 text-white/80">{row.partner4 || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
