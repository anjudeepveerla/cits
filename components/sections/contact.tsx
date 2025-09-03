"use client"

import type React from "react"
import { useState } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    }
    try {
      setStatus("loading")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("success")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-4xl font-mono text-white text-balance">Contact Us</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">Reach out to collaborate or request a consultation.</p>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-white/80">Name</span>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-white/80">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-white/80">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
              placeholder="How can we help?"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md border border-cyan-400/70 bg-black px-5 py-2 text-white shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-400">Thanks! We’ll get back to you soon.</p>}
          {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
