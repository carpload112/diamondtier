"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Proven Track Record",
    description:
      "Our portfolio of successful projects speaks to our ability to deliver exceptional results across industries.",
  },
  {
    title: "Innovative Strategies",
    description: "We develop custom approaches tailored to your unique business needs and market position.",
  },
  {
    title: "Expert Team",
    description: "Our specialists bring years of industry experience and cutting-edge knowledge to every project.",
  },
  {
    title: "Advanced Technology",
    description: "We leverage the latest tools and technologies to create solutions that stand the test of time.",
  },
  {
    title: "Transparent Communication",
    description: "We maintain clear, consistent reporting and open dialogue throughout our partnership.",
  },
  {
    title: "Results-Driven Approach",
    description: "We focus on delivering measurable outcomes that directly impact your business growth.",
  },
]

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 noise-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="section-subtitle">Partner with Diamond Tier Agency and experience the difference</p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="glass-card p-8 h-full transition-all duration-500 hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform group-hover:scale-[1.2] transition-transform duration-500" />
                    <CheckCircle className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-normal mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 text-xs font-light leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
