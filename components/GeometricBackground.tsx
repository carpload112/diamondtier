"use client"

import { useEffect, useRef } from "react"

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawPolygon = (x: number, y: number, radius: number, sides: number) => {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2
        const px = x + Math.cos(angle) * radius
        const py = y + Math.sin(angle) * radius
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 25, 47, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const count = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 50 + 10
        const sides = Math.floor(Math.random() * 3) + 3

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(time)

        const hue = (time * 10 + i * 50) % 360
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.1)`
        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.2)`

        drawPolygon(0, 0, size, sides)
        ctx.fill()
        ctx.stroke()

        ctx.restore()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
