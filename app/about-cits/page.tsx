/* 
  New About CITS page
  - Standalone page using the existing cyberpunk styling
  - Sections match the requested structure exactly
*/
"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* ---------- Small hologram widgets (lightweight + performant) ---------- */

/* Holo-1: Rotating globe with pulsing focus markers (simple canvas illusion) */
function HoloGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let raf = 0

    function resize() {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    function draw() {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)

      // background glow
      ctx.save()
      ctx.filter = "blur(8px)"
      ctx.globalAlpha = 0.25
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.46, 0, Math.PI * 2)
      ctx.fillStyle = "#00E5FF"
      ctx.fill()
      ctx.restore()

      // wireframe sphere (latitude/longitude)
      const r = Math.min(w, h) * 0.42
      const cx = w / 2
      const cy = h / 2
      ctx.strokeStyle = "rgba(255,255,255,0.35)"
      ctx.lineWidth = 1

      // longitudes
      for (let i = 0; i < 12; i++) {
        const t = (i / 12) * Math.PI
        ctx.beginPath()
        for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.02) {
          const x = cx + r * Math.cos(a) * Math.cos(t + frame * 0.01)
          const y = cy + r * Math.sin(a)
          if (a === -Math.PI / 2) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // latitudes
      for (let i = -4; i <= 4; i++) {
        const lat = (i / 5) * (Math.PI / 2) * 0.9
        ctx.beginPath()
        for (let t = 0; t <= Math.PI * 2; t += 0.02) {
          const x = cx + r * Math.cos(lat) * Math.cos(t + frame * 0.01)
          const y = cy + r * Math.sin(lat)
          if (t === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Focus regions (pulsing)
      // Note: positions are approximate; we place a few markers to suggest regions.
      const markers = [
        // Africa
        { x: -10, y: 8 }, // South Sudan approx
        { x: 32, y: 1 }, // Ethiopia
        { x: 33, y: -1 }, // Kenya
        { x: 30, y: -1 }, // Uganda
        { x: 28, y: -15 }, // Zambia
        { x: -1, y: 7 }, // Ghana
        { x: 30, y: -2 }, // Rwanda
        { x: -16, y: 13 }, // Gambia
        { x: 17, y: -12 }, // Angola
        { x: 8, y: 9 }, // Nigeria
        { x: -7, y: 32 }, // Morocco
        // Asia
        { x: 80, y: 7 }, // Sri Lanka
        { x: 45, y: 40 }, // Armenia
        { x: 71, y: 38 }, // Tajikistan
      ]

      const pulse = 0.6 + 0.4 * Math.sin(frame * 0.1)
      markers.forEach((m) => {
        // project lon/lat to simple equirectangular and rotate over time
        const rot = frame * 0.6
        const lon = (m.x + rot) % 360
        const lonRad = (lon * Math.PI) / 180
        const latRad = (m.y * Math.PI) / 180
        const x = cx + r * Math.cos(latRad) * Math.cos(lonRad)
        const y = cy + r * Math.sin(latRad)

        ctx.beginPath()
        ctx.arc(x, y, 3 + pulse, 0, Math.PI * 2)
        ctx.fillStyle = "#00E5FF"
        ctx.globalAlpha = 0.9
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 8 + pulse * 3, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(0,229,255,0.4)"
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.globalAlpha = 1
      })

      frame++
      raf = requestAnimationFrame(draw)
    }

    function onResize() {
      resize()
    }

    resize()
    draw()
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={cn("relative rounded-md border border-white/10 bg-black/40 p-2", className)} title="Focus Regions">
      <canvas ref={canvasRef} className="block h-40 w-full rounded-sm" />
      <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-cyan-400/30" />
      <p className="mt-2 text-center text-xs text-white/70">Focus Regions</p>
    </div>
  )
}

/* Holo-2: Engagement chips */
function HoloEngagement({ className }: { className?: string }) {
  const chips = [
    { label: "PPP", desc: "Public–Private Partnerships" },
    { label: "SVP", desc: "Strategic Vendor Partnerships" },
    { label: "BOT", desc: "Build–Operate–Transfer" },
  ]
  return (
    <div className={cn("relative rounded-md border border-white/10 bg-black/40 p-4", className)}>
      <div className="grid grid-cols-3 items-center gap-3">
        {chips.map((c) => (
          <div
            key={c.label}
            className="group relative select-none rounded-md border border-cyan-400/40 bg-black/30 px-3 py-6 text-center text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-transform duration-200 hover:-rotate-1 hover:scale-[1.03]"
            title={c.desc}
          >
            <span className="text-lg font-semibold">{c.label}</span>
            <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-cyan-400/20" />
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-white/70">Engagement Models</p>
    </div>
  )
}

/* Holo-3: Ecosystem network (SVG) */
function HoloNetwork({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative rounded-md border border-white/10 bg-black/40 p-2", className)}
      title="Government • Enterprises • SMBs • Multilaterals • NGOs"
    >
      <svg viewBox="0 0 300 160" className="h-40 w-full">
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* central node */}
        <circle cx="150" cy="80" r="8" fill="#00E5FF" />
        <circle cx="150" cy="80" r="18" fill="url(#g)">
          <animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* orbiting nodes */}
        {[
          { x: 60, y: 30 },
          { x: 240, y: 35 },
          { x: 275, y: 120 },
          { x: 150, y: 145 },
          { x: 30, y: 120 },
        ].map((n, i) => (
          <g key={i}>
            <line x1="150" y1="80" x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r="5" fill="#00E5FF" />
          </g>
        ))}
      </svg>
      <p className="mt-2 text-center text-xs text-white/70">Government • Enterprises • SMBs • Multilaterals • NGOs</p>
      <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-cyan-400/30" />
    </div>
  )
}

export default function AboutCITSPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white">
      {/* 1) Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">About CITS Global</h1>
        <p className="mt-4 text-pretty text-base text-white/80 md:text-lg">
          Solution integrators enabling national-scale ICT transformation across developing nations.
        </p>
        <p className="mt-2 text-sm text-white/60">
          Formed by a consortium of multiple IT companies—leveraging technology, solutions, and deep industry expertise.
        </p>
      </header>

      {/* 2) Hologram Row */}
      <section aria-label="Hologram widgets" className="mb-12">
        <div className="grid gap-4 md:grid-cols-3">
          <HoloGlobe />
          <HoloEngagement />
          <HoloNetwork />
        </div>
      </section>

      {/* 3) Who We Are */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="mt-3 text-pretty text-white/80">
          Consortium Of IT Services (CITS) Global is a solution integrators organization formed by multiple IT companies
          to leverage technology, solutions, and industry expertise. We engage with Governments, Enterprises, and SMBs
          to deliver national-scale ICT outcomes.
        </p>
      </section>

      {/* 4) Our Focus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Our Focus</h2>
        <p className="mt-3 text-pretty text-white/80">
          CITS Global focuses on emerging and developing economies where digital infrastructure, policy, and capability
          development can deliver outsized impact.
        </p>
        <p className="mt-3 text-sm text-white/70">
          South Sudan • Uganda • Kenya • Ethiopia • Zambia • Ghana • Rwanda • Gambia • Angola • Nigeria • Sri Lanka •
          Morocco • Armenia • Tajikistan
        </p>
      </section>

      {/* 5) How We Engage */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">How We Engage</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "PPP Projects",
              d: "Structuring public–private partnerships for sustainable ICT impact and delivery.",
            },
            { t: "SVP Programs", d: "Strategic vendor partnerships that deliver value at scale." },
            { t: "BOT Models", d: "Build–Operate–Transfer initiatives with long-term governance and handover." },
          ].map((card) => (
            <div key={card.t} className="rounded-md border border-white/10 bg-black/40 p-4">
              <h3 className="text-lg text-white">{card.t}</h3>
              <p className="mt-2 text-sm text-white/75">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6) What We Do */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <p className="mt-3 text-pretty text-white/80">
          We co-design and integrate national platforms and enterprise modernization programs. Our teams bring
          cross-disciplinary expertise across policy, technology, operations, security, and governance to accelerate
          country-level ICT transformation.
        </p>
      </section>

      {/* 7) Media */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Inspiration</h2>
        <div className="mt-4 overflow-hidden rounded-md border border-white/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/tUP5S4YdEJo?autoplay=0&mute=1&controls=1&loop=1&playlist=tUP5S4YdEJo"
              title="A vision of transformation."
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="bg-black/40 px-3 py-2 text-xs text-white/70">A vision of transformation.</div>
        </div>
      </section>

      {/* 8) Impact Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Our Impact Principles</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
          <li>Inclusivity and accessibility for citizens and businesses</li>
          <li>Security, privacy, and trust by design</li>
          <li>Interoperability and open standards</li>
          <li>Sustainability and local capacity building</li>
          <li>Transparent governance and measurable outcomes</li>
        </ul>
      </section>

      {/* 9) Call to Action */}
      <section className="mb-4 rounded-md border border-white/10 bg-black/40 p-6 text-center">
        <h2 className="text-2xl font-semibold">Collaborate with CITS Global</h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-white/80">
          Partner with us to accelerate your national digital strategy and deliver resilient growth.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/#solutions"
            className="rounded-md border border-cyan-400/40 bg-black/60 px-4 py-2 text-sm text-cyan-200 hover:bg-black/40"
          >
            Explore Partner Solutions
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
