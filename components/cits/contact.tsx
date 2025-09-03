"use client"

import type React from "react"
import { useState } from "react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      setStatus("loading")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={onSubmit} className="rounded border border-[#1a1f2b] bg-black p-5">
        <div className="grid gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-white/90">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded border border-[#1a1f2b] bg-[#0f121a] px-3 py-2 text-sm text-white outline-none focus:border-[#00e5ff]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-white/90">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded border border-[#1a1f2b] bg-[#0f121a] px-3 py-2 text-sm text-white outline-none focus:border-[#00e5ff]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-white/90">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded border border-[#1a1f2b] bg-[#0f121a] px-3 py-2 text-sm text-white outline-none focus:border-[#00e5ff]"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded border border-[#00e5ff] bg-black px-5 py-2 text-sm font-medium text-white shadow-[0_0_12px_#00e5ff] transition-colors hover:bg-[#0f1116] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0080]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="mt-2 text-sm text-white/80">Thanks! We’ll be in touch.</p>}
            {status === "error" && <p className="mt-2 text-sm text-white/80">Something went wrong. Try again.</p>}
          </div>
        </div>
      </form>

      <div className="overflow-hidden rounded border border-[#1a1f2b]">
        <iframe
          title="CITS Global Location Map"
          className="h-[360px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6382852.2264721405!2d25.0!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0"
        />
      </div>
    </div>
  )
}
