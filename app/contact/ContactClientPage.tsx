"use client"
import React from "react"
import { SiteFooter } from "@/components/cits/footer"

// Contact form client logic
function ContactForm() {
  const [state, setState] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = React.useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setState("submitting")
    setMessage(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          source: "contact-page",
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setState("success")
      setMessage("Thanks! We’ll be in touch shortly.")
      form.reset()
    } catch {
      setState("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-zinc-300">Name</span>
          <input
            name="name"
            required
            className="rounded-md border border-zinc-700 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-cyan-400"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-zinc-300">Email</span>
          <input
            type="email"
            name="email"
            required
            className="rounded-md border border-zinc-700 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-zinc-300">Message</span>
        <textarea
          name="message"
          rows={5}
          className="rounded-md border border-zinc-700 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
          placeholder="How can we help?"
          required
        />
      </label>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center rounded-md border border-cyan-500 bg-black px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(0,229,255,0.15)_inset] transition hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)_inset] focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {message && (
        <p
          className={`text-sm ${state === "success" ? "text-emerald-400" : state === "error" ? "text-red-400" : "text-zinc-400"}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  )
}

export default function ContactClientPage() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden" aria-labelledby="contact-title">
        {/* Subtle blue→violet gradient with fine tech grid overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A1F3C] via-[#0B0D12] to-[#3B1A66] opacity-80" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(transparent_23px,rgba(124,58,237,0.12)_24px),linear-gradient(90deg,transparent_23px,rgba(0,229,255,0.12)_24px)] bg-[size:24px_24px]"
        />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 id="contact-title" className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          {/* Animated underline */}
          <span className="mt-3 inline-block h-[2px] w-24 origin-left animate-[grow_1s_ease-out] bg-cyan-400/80 [box-shadow:0_0_12px_rgba(0,229,255,0.5)]" />
        </div>
        <style jsx>{`
          @keyframes grow {
            from { transform: scaleX(0); opacity: .4; }
            to { transform: scaleX(1); opacity: 1; }
          }
        `}</style>
      </section>

      {/* Offices */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-semibold">Global Offices</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-cyan-500/30 bg-black/40 p-5 shadow-[0_0_20px_rgba(0,229,255,0.06)_inset]">
            <h3 className="text-lg font-semibold">CITS – Global</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Dubai International Financial Centre (DIFC)
              <br /> Levels - 42, Emirates Towers
              <br /> Sheikh Zayed Rd – Trade Centre
            </p>
          </article>

          <article className="rounded-lg border border-cyan-500/30 bg-black/40 p-5 shadow-[0_0_20px_rgba(0,229,255,0.06)_inset]">
            <h3 className="text-lg font-semibold">CITS – Africa (Kenya)</h3>
            <p className="mt-2 text-sm text-zinc-300">
              7th Floor, Konza Complex
              <br /> Nairobi-Mombasa Road – Konza
              <br /> P. O. Box 1 – 90150 Konza
              <br /> Technopolis, Kenya
            </p>
          </article>

          <article className="rounded-lg border border-cyan-500/30 bg-black/40 p-5 shadow-[0_0_20px_rgba(0,229,255,0.06)_inset]">
            <h3 className="text-lg font-semibold">CITS – Africa (Sri Lanka)</h3>
            <p className="mt-2 text-sm text-zinc-300">
              EL -26, Reality Plaza
              <br /> Colombo Main Rd
              <br /> Ja-Ela 11350
              <br /> Sri Lanka
            </p>
          </article>
        </div>
      </section>

      {/* Contact Information + Form */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Email us at{" "}
              <a
                href="mailto:Info@citsglobal.org.in"
                className="text-cyan-300 underline decoration-cyan-400/60 underline-offset-4 hover:text-white"
              >
                Info@citsglobal.org.in
              </a>
              . We typically reply within 1–2 business days.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-black/40 p-6 shadow-[0_0_22px_rgba(0,229,255,0.08)_inset]">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
