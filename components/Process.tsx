"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, CheckCircle } from "lucide-react"

const steps = [
  { icon: Search, title: "Discovery", description: "We analyze your needs and market position" },
  { icon: Lightbulb, title: "Strategy", description: "Develop a tailored plan for your success" },
  { icon: Rocket, title: "Implementation", description: "Execute the strategy with precision" },
  { icon: CheckCircle, title: "Optimization", description: "Continuously improve and refine results" },
]

export default function Process() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center mb-8"
          >
            <div className="bg-blue-500 p-4 rounded-full mr-6">
              <step.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-blue-200">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
