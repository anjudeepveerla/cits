"use client"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="text-white/70 text-sm flex flex-wrap gap-x-4 gap-y-2">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#solutions" className="hover:text-cyan-400">
            Solutions
          </a>
          <a href="#competencies" className="hover:text-cyan-400">
            Competencies
          </a>
          <a href="#partners" className="hover:text-cyan-400">
            Partners
          </a>
          <a href="#governance" className="hover:text-cyan-400">
            Governance
          </a>
          <a href="/contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>
        <p className="text-white/60 text-sm text-center md:text-right">
          Copyright © 2025 CITS Global. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
