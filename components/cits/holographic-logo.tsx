"use client"

import { useEffect, useRef } from "react"

interface HolographicLogoProps {
  size?: number
  className?: string
}

export function HolographicLogo({ size = 96, className = "" }: HolographicLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Create structured holographic globe effect
    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.42

    // Create a structured grid pattern that follows spherical curvature
    const gridSize = 16
    const dotCount = gridSize * gridSize

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        // Convert grid coordinates to spherical coordinates
        const u = (i / (gridSize - 1)) * Math.PI * 2 // Longitude (0 to 2π)
        const v = (j / (gridSize - 1)) * Math.PI - Math.PI / 2 // Latitude (-π/2 to π/2)
        
        // Calculate 3D position on sphere
        const x3D = Math.cos(v) * Math.cos(u)
        const y3D = Math.sin(v)
        const z3D = Math.cos(v) * Math.sin(u)
        
        // Project to 2D (orthographic projection)
        const x = centerX + x3D * radius
        const y = centerY + y3D * radius
        
        // Calculate depth for size and opacity
        const depth = (z3D + 1) / 2 // 0 to 1 (back to front)
        
        // Only draw dots within the sphere bounds
        const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        if (distanceFromCenter <= radius) {
          // Calculate dot size based on depth and position
          const baseSize = 2.5
          const sizeVariation = 2.5
          const dotSize = baseSize + (depth * sizeVariation)
          
          // Calculate opacity based on depth and position
          const opacity = 0.3 + (depth * 0.7)
          
          // Draw the dot
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
          
          // Add subtle glow for depth
          if (depth > 0.7) {
            ctx.save()
            ctx.globalAlpha = 0.1
            ctx.fillStyle = "rgba(255, 255, 255, 1)"
            ctx.beginPath()
            ctx.arc(x, y, dotSize * 1.5, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          }
        }
      }
    }

    // Add subtle outer glow
    ctx.save()
    ctx.globalCompositeOperation = "source-over"
    ctx.filter = "blur(2px)"
    ctx.globalAlpha = 0.15
    
    // Create radial gradient for outer glow
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.2)
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
    gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.05)")
    gradient.addColorStop(1, "transparent")
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

  }, [size])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={`${className}`}
      style={{ width: size, height: size }}
      aria-label="CITS Global Holographic Globe Logo"
    />
  )
}
