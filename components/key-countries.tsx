const COUNTRIES: Array<{ name: string; flag: string }> = [
  { name: "South Sudan", flag: "🇸🇸" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Armenia", flag: "🇦🇲" },
  { name: "Tajikistan", flag: "🇹🇯" },
]

export function KeyCountries() {
  return (
    <section id="countries" aria-labelledby="countries-title" className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 id="countries-title" className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          Key Countries
        </h2>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" role="list">
          {COUNTRIES.map((c) => (
            <li key={c.name} className="rounded-lg border border-white/10 p-4 transition hover:bg-white/5">
              <div className="flex items-center gap-3">
                <span role="img" aria-label={`${c.name} flag`} className="text-2xl">
                  {c.flag}
                </span>
                <span className="text-base text-gray-200">{c.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
