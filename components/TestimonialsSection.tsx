"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Elena Rodriguez",
    position: "Marketing Director, Cabana Miami",
    quote:
      "Diamond Tier Agency transformed our digital presence with a stunning website that perfectly captures our sustainable luxury ethos. Their attention to detail and understanding of our brand values resulted in a 65% increase in qualified leads and numerous compliments from our clients on the user experience.",
  },
  {
    name: "Michael Rodriguez",
    position: "CEO, Washee",
    quote:
      "Diamond Tier Agency completely transformed our business model. Their team built our mobile app from scratch and implemented a marketing strategy that helped us acquire over 500 users in our first month. Their technical expertise and business acumen are truly exceptional.",
  },
  {
    name: "Sarah Thompson",
    position: "Marketing Director, Cedar Home Loans",
    quote:
      "Working with Diamond Tier has increased our mortgage application rate by 43%. Their redesign of our website and implementation of targeted digital campaigns has given us an edge in a highly competitive market. They truly understand the financial services sector.",
  },
  {
    name: "David Chen",
    position: "Founder, Trucutz",
    quote:
      "After struggling with three different agencies, Diamond Tier finally delivered the platform we envisioned. Their team took the time to understand our unique business model and created a solution that both barbers and clients love. Our bookings have increased by 78% since launch.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false })

  useEffect(() => {
    if (!autoplay || !isInView) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay, isInView])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} className="py-section relative overflow-hidden bg-deep-black">
      <div className="grid-bg" />
      <div className="absolute inset-0 noise-bg" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">TESTIMONIALS</h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-6">
            WHAT OUR <span className="gradient-text">CLIENTS SAY</span>
          </h3>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Hear from the businesses we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative h-[300px] md:h-[250px] flex items-center justify-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="cyber-card p-6 md:p-10 relative">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10 absolute top-6 left-6" />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl lg:text-2xl font-light mb-6 md:mb-8 text-white/90">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-heading text-primary text-base md:text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-white/60 text-xs md:text-sm">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-primary/10 border border-primary text-primary p-2 rounded-full hover:bg-primary hover:text-background transition-colors duration-300 z-20 hoverable"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 md:translate-x-6 bg-primary/10 border border-primary text-primary p-2 rounded-full hover:bg-primary hover:text-background transition-colors duration-300 z-20 hoverable"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 hoverable ${
                  index === currentIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
