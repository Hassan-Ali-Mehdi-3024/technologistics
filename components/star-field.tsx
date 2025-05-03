"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: Star[] = []
    const starCount = 200
    const maxSize = 2

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize,
        speed: 0.01 + Math.random() * 0.03, // Slower speed for more gentle twinkling
        brightness: Math.random(),
        color: Math.random() > 0.15 ? "#FFFFFF" : "#FF6B00",
      })
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = 0.2 + star.brightness * 0.8
        ctx.fill()

        // Twinkle effect - slower now
        star.brightness += star.speed
        if (star.brightness > 1 || star.brightness < 0) {
          star.speed = -star.speed
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

interface Star {
  x: number
  y: number
  size: number
  speed: number
  brightness: number
  color: string
}
