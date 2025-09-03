"use client"

import { useEffect } from "react"

export function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-animate], main section"))

    nodes.forEach((el) => {
      if (el.dataset.revealInit === "true") return
      el.dataset.revealInit = "true"
      el.style.willChange = "opacity, transform"
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700", "ease-out")
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6")
            entry.target.classList.add("opacity-100", "translate-y-0")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    )

    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
