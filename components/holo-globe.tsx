"use client"

import { useEffect, useRef } from "react"

export function HoloGlobe({
  className,
  lineColor = "#00E5FF",
  bgColor = "transparent",
}: {
  className?: string
  lineColor?: string
  bgColor?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let width = 0
    let height = 0
    const start = performance.now()
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    function resize() {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      width = Math.max(200, Math.floor(rect.width))
      height = Math.max(200, Math.floor(rect.height))
      canvas.width = Math.floor(width * DPR)
      canvas.height = Math.floor(height * DPR)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    if (containerRef.current) ro.observe(containerRef.current)

    function project([x, y, z]: [number, number, number], size: number, rotY: number, rotX: number) {
      // rotate around Y then X
      const cosY = Math.cos(rotY),
        sinY = Math.sin(rotY)
      const x1 = cosY * x + sinY * z
      const z1 = -sinY * x + cosY * z

      const cosX = Math.cos(rotX),
        sinX = Math.sin(rotX)
      const y2 = cosX * y - sinX * z1
      const z2 = sinX * y + cosX * z1

      // orthographic projection
      const sx = width / 2 + x1 * size
      const sy = height / 2 + y2 * size
      const depth = (z2 + size) / (2 * size) // used to fade lines
      return { sx, sy, depth }
    }

    function draw(now: number) {
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, width, height)
      if (bgColor !== "transparent") {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, width, height)
      }

      const radius = Math.min(width, height) * 0.42
      const rotY = t * 0.6
      const rotX = Math.sin(t * 0.5) * 0.2

      ctx.save()
      ctx.shadowColor = lineColor
      ctx.shadowBlur = 12
      ctx.lineWidth = 1.25
      ctx.strokeStyle = lineColor

      // latitude lines
      const latSteps = 9
      for (let i = 1; i < latSteps; i++) {
        const v = -Math.PI / 2 + (i * Math.PI) / latSteps
        const pts: Array<[number, number, number]> = []
        const steps = 96
        for (let j = 0; j <= steps; j++) {
          const u = (j / steps) * Math.PI * 2
          const x = Math.cos(u) * Math.cos(v)
          const y = Math.sin(v)
          const z = Math.sin(u) * Math.cos(v)
          pts.push([x, y, z])
        }
        ctx.beginPath()
        pts.forEach((p, idx) => {
          const { sx, sy } = project(p, radius, rotY, rotX)
          if (idx === 0) ctx.moveTo(sx, sy)
          else ctx.lineTo(sx, sy)
        })
        ctx.globalAlpha = 0.7
        ctx.stroke()
      }

      // longitude lines
      const lonSteps = 12
      for (let i = 0; i < lonSteps; i++) {
        const u = (i / lonSteps) * Math.PI * 2
        const pts: Array<[number, number, number]> = []
        const steps = 96
        for (let j = 0; j <= steps; j++) {
          const v = -Math.PI / 2 + (j / steps) * Math.PI
          const x = Math.cos(u) * Math.cos(v)
          const y = Math.sin(v)
          const z = Math.sin(u) * Math.cos(v)
          pts.push([x, y, z])
        }
        ctx.beginPath()
        pts.forEach((p, idx) => {
          const pr = project(p, radius, rotY, rotX)
          const alpha = 0.4 + 0.6 * (1 - pr.depth)
          ctx.globalAlpha = alpha
          if (idx === 0) ctx.moveTo(pr.sx, pr.sy)
          else ctx.lineTo(pr.sx, pr.sy)
        })
        ctx.stroke()
      }

      // core glow
      ctx.globalAlpha = 0.12
      ctx.fillStyle = lineColor
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, radius * 0.95, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [bgColor, lineColor])

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} aria-label="Rotating holographic globe" />
    </div>
  )
}
