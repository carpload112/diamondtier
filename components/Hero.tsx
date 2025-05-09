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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-20 px-3 md:px-4"
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-3 flex flex-col items-center text-center mt-0 md:mt-0">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] md:text-xs font-heading tracking-[0.3em] mb-3 text-primary"
          >
            DIGITAL INNOVATION STUDIO
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-4 leading-tight"
          >
            <span className="block mb-1 md:mb-2">WE CRAFT</span>
            <span className="block mb-1 md:mb-2 purple-pink-gradient">DIGITAL EXPERIENCES</span>
            <span className="block text-white">THAT TRANSFORM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg mb-6 text-white/70 max-w-xl mx-auto font-light"
          >
            Elevating brands through innovative design, cutting-edge technology, and strategic marketing solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="https://calendly.com/diamondtiersolutions/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button hoverable text-xs"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-3 w-3 inline" />
            </a>
            <Link
              href="/work"
              className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wider group text-xs"
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
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-primary/50 to-primary animate-pulse-slow" />
          <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-heading">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}
