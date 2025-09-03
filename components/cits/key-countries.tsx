const countries = [
  "South Sudan",
  "Uganda",
  "Kenya",
  "Ethiopia",
  "Zambia",
  "Ghana",
  "Rwanda",
  "Gambia",
  "Angola",
  "Nigeria",
  "Sri Lanka",
  "Morocco",
  "Armenia",
  "Tajikistan",
]

export function KeyCountries() {
  return (
    <section aria-label="Key Countries" className="border-y border-[#1a1f2b] bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-white">
            Driving Digital Growth in Emerging Economies
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {countries.map((c) => (
            <div key={c} className="flex items-center gap-2 rounded border border-[#1a1f2b] bg-black p-3">
              <img
                src={`/abstract-geometric-shapes.png?height=20&width=28&query=${encodeURIComponent(`flag of ${c}`)}`}
                alt={`${c} flag`}
                className="h-5 w-7 rounded-sm border border-[#1a1f2b]"
              />
              <span className="text-xs text-white/85">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
