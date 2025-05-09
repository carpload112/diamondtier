"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, TrendingUp, DollarSign } from "lucide-react"
import { GlowingOrb } from "./GeometricElements"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "Data-driven campaigns that deliver results",
  },
  {
    icon: Code,
    title: "Tech Innovation",
    description: "Cutting-edge solutions to drive your business forward",
  },
  {
    icon: TrendingUp,
    title: "Brand Development",
    description: "Create a lasting impression with powerful branding",
  },
  {
    icon: DollarSign,
    title: "Capital Raising",
    description: "Secure funding and investor relations support",
  },
]

export default function Services() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A1F3D] to-[#2E1250] clip-path-bottom">
      <GlowingOrb className="absolute top-1/4 left-1/4 opacity-50" />
      <GlowingOrb className="absolute bottom-1/4 right-1/4 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00E5FF]">Our Services</h2>
          <div className="w-24 h-1 bg-[#00E5FF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative hover-card"
            >
              <div className="absolute inset-0 bg-[#00E5FF] rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="glass-effect rounded-xl p-8 hover:border-[#00E5FF] transition-colors duration-300">
                <div className="relative w-16 h-16 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-md opacity-50" />
                  <div className="relative bg-[#2E1250] rounded-full p-4">
                    <service.icon className="w-8 h-8 text-[#00E5FF]" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white text-center">{service.title}</h3>
                <p className="text-gray-300 text-center">{service.description}</p>

                <div className="mt-6 text-center">
                  <Link href="/agency" className="text-[#00E5FF] hover:text-white transition-colors duration-300">
                    Learn More →
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
