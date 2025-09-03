const partners = [
  "Partner 1 logo",
  "Partner 2 logo",
  "Partner 3 logo",
  "Partner 4 logo",
  "Partner 5 logo",
  "Partner 6 logo",
  "Partner 7 logo",
  "Partner 8 logo",
]

export function Partners() {
  return (
    <section id="partners" className="relative py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-mono text-white text-balance">Partners</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">Ecosystem partners that help deliver impact at scale:</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-16 rounded-md border border-white/10 bg-black/40"
              aria-label={name}
            >
              <img
                src={"/placeholder.svg?height=40&width=120&query=partner%20logo"}
                alt={name}
                className="opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
