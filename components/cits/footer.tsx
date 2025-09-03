import Image from "next/image"

export function SiteFooter() {
  const year = 2025
  return (
    <footer className="border-t border-[#1a1f2b] bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/cits-logo.png"
            alt="CITS Global logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            sizes="32px"
          />
          <span className="text-sm font-medium tracking-wide text-white md:text-base">CITS GLOBAL</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            className="h-8 w-8 rounded-sm border border-[#00e5ff] shadow-[0_0_8px_#00e5ff]"
          />
          <a
            href="https://www.youtube.com"
            aria-label="YouTube"
            className="h-8 w-8 rounded-sm border border-[#ff0080] shadow-[0_0_8px_#ff0080]"
          />
        </div>
        <p className="text-xs text-white/70">Copyright © {year} CITS Global. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
