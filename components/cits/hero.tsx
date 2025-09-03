"use client"

export function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      {/* Background video (YouTube embed) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/65" />
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/tUP5S4YdEJo?autoplay=1&mute=1&controls=0&loop=1&playlist=tUP5S4YdEJo&modestbranding=1&showinfo=0"
          title="Inspiration"
          loading="lazy"
          referrerPolicy="no-referrer"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center md:py-36">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-white drop-shadow md:text-5xl">
          Consortium Of IT Services (CITS) Global
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/85 md:text-lg">
          Empowering ICT Transformation Across Developing Nations
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded border border-[#00e5ff] bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_0_12px_#00e5ff] transition-colors hover:bg-[#0f1116] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0080]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
