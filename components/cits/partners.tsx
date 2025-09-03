const logos = Array.from({ length: 8 }, (_, i) => `Partner ${i + 1}`)

export function PartnersShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {logos.map((l) => (
        <div key={l} className="flex items-center justify-center rounded border border-[#1a1f2b] bg-black p-6">
          <img
            src={`/abstract-geometric-shapes.png?height=32&width=120&query=${encodeURIComponent(`${l} logo`)}`}
            alt={`${l} logo`}
            className="opacity-90"
          />
        </div>
      ))}
    </div>
  )
}
