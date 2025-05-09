"use client"

import { motion } from "framer-motion"
import { Palette, Code, TrendingUp, DollarSign } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Marketing & Branding",
    description: "Craft a compelling brand story and reach your target audience with precision.",
  },
  {
    icon: Code,
    title: "UI/UX & Product Development",
    description: "Build intuitive, scalable products that users love and businesses rely on.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Accelerate your growth with data-driven strategies and innovative tactics.",
  },
  {
    icon: DollarSign,
    title: "Capital Raising & Investor Relations",
    description: "Secure the funding you need and build lasting relationships with investors.",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-pink">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800 p-6 rounded-lg shadow-lg hover:shadow-electric-blue/20 transition duration-300"
            >
              <service.icon className="w-12 h-12 mb-4 text-neon-pink" />
              <h3 className="text-2xl font-semibold mb-2 text-electric-blue">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <button className="mt-4 text-neon-pink hover:text-electric-blue transition duration-300">
                Learn More &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
