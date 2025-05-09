"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "framer-motion"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: false })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 md:pt-32 px-4 md:px-6"
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-0 md:mt-0">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs md:text-sm font-heading tracking-[0.3em] mb-5 text-primary"
          >
            DIGITAL INNOVATION STUDIO
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading mb-6 leading-tight"
          >
            <span className="block mb-2 md:mb-3">WE CRAFT</span>
            <span className="block mb-2 md:mb-3 purple-pink-gradient">DIGITAL EXPERIENCES</span>
            <span className="block text-white">THAT TRANSFORM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl mb-10 text-white/70 max-w-2xl mx-auto font-light"
          >
            Elevating brands through innovative design, cutting-edge technology, and strategic marketing solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="https://calendly.com/diamondtiersolutions/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button hoverable"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <Link
              href="/work"
              className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wider group text-sm"
            >
              <span className="relative">
                Explore Our Work
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/50 to-primary animate-pulse-slow" />
          <span className="text-white/40 text-xs uppercase tracking-widest mt-2 font-heading">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}
