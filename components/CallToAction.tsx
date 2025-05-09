"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function CallToAction() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false })

  return (
    <section ref={containerRef} className="py-16 md:py-20 relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />
      <div className="absolute inset-0 noise-bg" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-3 relative z-10"
      >
        <div className="max-w-3xl mx-auto cyber-card p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading mb-3 leading-tight">
            READY TO <span className="gradient-text">TRANSFORM</span> YOUR DIGITAL PRESENCE?
          </h2>
          <p className="text-xs md:text-sm text-white/70 mb-6 font-light max-w-xl mx-auto">
            Let's collaborate to create something extraordinary that elevates your brand and drives exceptional results.
          </p>
          <div>
            <a
              href="https://calendly.com/diamondtiersolutions/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button hoverable inline-flex items-center text-xs"
            >
              <span className="flex items-center">
                Begin Your Journey
                <ArrowRight className="ml-2 h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
