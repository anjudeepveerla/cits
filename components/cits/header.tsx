"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/about-cits", label: "About" },
  { href: "/partner-solutions", label: "Solutions" },
  { href: "/partner-tech-specialization", label: "Technology" },
  { href: "/partners", label: "Partners" },
  { href: "/consortium", label: "Governance" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Close mobile drawer when navigating
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-[#1a1f2b] bg-black/70 backdrop-blur" : "border-transparent bg-black/50",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-4" aria-label="CITS Global - Home">
          <img
            src="/new-logo.png.jpg"
            alt="CITS Global Logo"
            width={96}
            height={96}
            className="h-20 w-20 md:h-24 md:w-24 object-contain hover:scale-105 transition-transform duration-200"
          />
          <span className="text-xl font-bold tracking-wider text-white md:text-2xl hover:text-[#00e5ff] transition-colors duration-200">CITS GLOBAL</span>
        </Link>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded px-3 py-2 text-white/90 ring-1 ring-white/10 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
        </button>

        <nav className="hidden items-center gap-4 md:flex">
          {nav.map((item) => {
            const base = item.href.split("#")[0] || "/"
            const isAnchor = item.href.includes("#")
            const isActive = !isAnchor && pathname === base
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]",
                  isActive ? "text-white" : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile drawer navigation */}
      <nav
        id="primary-nav"
        className={cn("md:hidden border-t border-white/10 bg-black/80 backdrop-blur", mobileOpen ? "block" : "hidden")}
        aria-label="Mobile"
      >
        <ul className="mx-auto max-w-6xl px-4 py-3">
          {nav.map((item) => {
            const base = item.href.split("#")[0] || "/"
            const isAnchor = item.href.includes("#")
            const isActive = !isAnchor && pathname === base
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff]",
                    isActive ? "text-white" : "text-white/80 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
