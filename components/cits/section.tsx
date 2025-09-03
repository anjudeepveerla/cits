import type { ReactNode } from "react"

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-b border-[#1a1f2b] bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <header className="mb-8">
          <h2 id={`${id}-title`} className="text-pretty text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-sm text-white/80 md:text-base">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
