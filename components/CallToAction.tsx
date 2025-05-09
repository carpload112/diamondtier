"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function CallToAction() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false })

  return (
    <section ref={containerRef} className="py-section relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />
      <div className="absolute inset-0 noise-bg" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
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
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto cyber-card p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading mb-4 leading-tight">
            READY TO <span className="gradient-text">TRANSFORM</span> YOUR DIGITAL PRESENCE?
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that elevates your brand and drives exceptional results.
          </p>
          <div>
            <a
              href="https://calendly.com/diamondtiersolutions/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button hoverable inline-flex items-center text-sm"
            >
              <span className="flex items-center">
                Begin Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
