"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Lightbulb, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Strategic Marketing",
    description: "Data-driven campaigns that deliver measurable results and elevate your brand's market position.",
    link: "/services#marketing",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Cutting-edge websites and applications that engage users and drive conversions.",
    link: "/services#development",
  },
  {
    icon: TrendingUp,
    title: "Brand Development",
    description: "Create a lasting impression with powerful branding that resonates with your target audience.",
    link: "/services#branding",
  },
  {
    icon: DollarSign,
    title: "Capital Raising",
    description: "Secure funding and optimize investor relations to fuel your business growth.",
    link: "/services#capital",
  },
]

export default function FeaturedServices() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <section className="py-section bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-heading tracking-[0.3em] text-primary mb-3">OUR EXPERTISE</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading mb-4">
            EMPOWERING YOUR <span className="gradient-text">DIGITAL PRESENCE</span>
          </h3>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light">
            We combine creativity with technology to deliver exceptional results that drive growth
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="cyber-card p-8 h-full flex flex-col justify-between transition-all duration-500">
                <div>
                  <div className="w-12 h-12 mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform group-hover:scale-[1.2] transition-transform duration-500" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 hoverable font-heading"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
