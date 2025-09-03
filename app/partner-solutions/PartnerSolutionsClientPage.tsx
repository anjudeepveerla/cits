"use client"
import {
  RadioTower,
  Network,
  Server,
  Cpu,
  Cloud,
  Building2,
  ShieldCheck,
  Landmark,
  Award as IdCard,
  BarChart3,
  Building,
  HeartPulse,
  GraduationCap,
  Factory,
  PlugZap,
  Car,
  Camera,
  Sprout,
  CreditCard,
  Rocket,
} from "lucide-react"
import type React from "react"

// Mapping each solution to a Lucide icon
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Telecom Infrastructure Deployment – 5G": RadioTower,
  "Broadband Expansion": Network,
  "IT – Infrastructure Development": Server,
  "AI Infrastructure Development": Cpu,
  "Cloud Data Centers Development": Cloud,
  "On-Premises Data Center Development": Building2,
  "Cybersecurity Initiatives": ShieldCheck,
  "E-Government Platforms": Landmark,
  "Citizen National Digital Identity Systems": IdCard,
  "Smart Governance and Data Management": BarChart3,
  "Smart City Initiatives": Building,
  "E-Health Initiatives": HeartPulse,
  "E-Education Platforms": GraduationCap,
  "Smart Manufacturing": Factory,
  "Smart Utilities": PlugZap,
  "Smart Transportation": Car,
  "Road / Public Safety": Camera,
  "Smart Agriculture": Sprout,
  "Digital Banking & BFSI Projects": CreditCard,
  "Ready-to-Deploy Industry Solutions": Rocket,
}

type Solution = { title: string; description: string }

const SOLUTIONS: Solution[] = [
  {
    title: "Telecom Infrastructure Deployment – 5G",
    description: "End-to-end 5G rollouts, RAN/Core integration, and optimization.",
  },
  { title: "Broadband Expansion", description: "Fiber and last-mile connectivity for urban and rural regions." },
  {
    title: "IT – Infrastructure Development",
    description: "Enterprise networks, compute, storage, and platform architecture.",
  },
  { title: "AI Infrastructure Development", description: "GPU clusters, MLOps pipelines, and AI-ready data stacks." },
  {
    title: "Cloud Data Centers Development",
    description: "Hyperscale cloud regions, interconnects, and reliability design.",
  },
  {
    title: "On-Premises Data Center Development",
    description: "Modular DCs, energy efficiency, and Tier III/IV standards.",
  },
  {
    title: "Cybersecurity Initiatives",
    description: "Zero-trust, SOC design, and national cyber resilience programs.",
  },
  { title: "E-Government Platforms", description: "Citizen services, portals, and interoperable digital rails." },
  {
    title: "Citizen National Digital Identity Systems",
    description: "Secure, scalable ID frameworks with privacy safeguards.",
  },
  {
    title: "Smart Governance and Data Management",
    description: "Open data, analytics, and policy-driven data governance.",
  },
  { title: "Smart City Initiatives", description: "IoT platforms, command centers, and urban digital twins." },
  { title: "E-Health Initiatives", description: "EMR, telemedicine, and national health data exchanges." },
  { title: "E-Education Platforms", description: "LMS, content delivery, and digital credentialing." },
  { title: "Smart Manufacturing", description: "Industry 4.0 automation, MES, and predictive maintenance." },
  { title: "Smart Utilities", description: "AMI, grid intelligence, and water/energy optimization." },
  { title: "Smart Transportation", description: "ITS, mobility platforms, and traffic intelligence." },
  { title: "Road / Public Safety", description: "CCTV, VMS, emergency response and analytics." },
  { title: "Smart Agriculture", description: "Agri IoT, satellite insights, and supply-chain digitization." },
  { title: "Digital Banking & BFSI Projects", description: "Core banking modernization and fintech ecosystems." },
  { title: "Ready-to-Deploy Industry Solutions", description: "Pre-integrated, rapidly deployable ICT solutions." },
]

// Tidy, equal-height card with consistent spacing and focus states
function SolutionCard({ title, description }: Solution) {
  const Icon = ICONS[title] ?? Rocket
  return (
    <article
      aria-label={title}
      className="group relative flex h-full min-h-[200px] flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
      style={{ boxShadow: "0 0 10px rgba(34,211,238,.18), inset 0 0 12px rgba(124,58,237,.12)" }}
      tabIndex={0}
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
          <span className="absolute inset-0 rounded-lg bg-cyan-500/15 blur-sm" aria-hidden />
          <Icon
            className="relative h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110"
            aria-hidden
          />
        </div>
        <h3 className="text-pretty text-base font-semibold leading-snug">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/75">{description}</p>

      {/* focus ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-focus-visible:ring-2 group-focus-visible:ring-cyan-400/60"
        aria-hidden
      />
    </article>
  )
}

export default function PartnerSolutionsClientPage() {
  // Color system (4): ink #0B0D12, white, cyan #22D3EE, violet #7C3AED (accents)
  return (
    <main className="relative min-h-screen bg-[#0B0D12] text-white">
      {/* subtle vignette instead of heavy gradients for better contrast */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pt-20 md:pt-28" data-animate="fade-up">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/80">{""}</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Partner Solutions</h1>
          <p className="mx-auto mt-4 text-pretty text-white/80">
            {"Driving ICT transformation with future-ready, scalable platforms and programs.\n\n\n\n"}
          </p>
          <span
            className="mx-auto mt-6 block h-0.5 w-40 rounded bg-gradient-to-r from-cyan-400 to-violet-500"
            aria-hidden
          />
        </header>
      </section>

      {/* Grid */}
      <section
        id="solutions"
        aria-labelledby="solutions-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-10 md:pb-14"
        data-animate="fade-up"
      >
        <h2 id="solutions-heading" className="sr-only">
          Solutions Grid
        </h2>

        {/* Use semantic list for accessibility */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {SOLUTIONS.map((s) => (
            <li key={s.title} className="h-full">
              <SolutionCard title={s.title} description={s.description} />
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:pb-24" data-animate="fade-up">
        <div className="rounded-xl border border-white/10 bg-black/40 p-8 text-center shadow-[0_0_28px_rgba(34,211,238,0.15)]">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Partner with CITS Global</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
            Let’s co‑create national-scale ICT programs and accelerate impact.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-md border border-cyan-400 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)] transition hover:bg-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              Get in touch
            </a>
            <a
              href="/partner-tech-specialization"
              className="rounded-md border border-white/15 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Explore Tech Specialization
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
