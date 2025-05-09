"use client"

import { motion } from "framer-motion"
import { Handshake } from "lucide-react"

export default function SweatEquity() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-navy-900 to-charcoal-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Handshake className="w-16 h-16 mx-auto mb-6 text-neon-pink" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-pink"
        >
          Sweat Equity & Project Partnership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          We don't just work for you—we work with you. For select projects, we offer our expertise in exchange for a
          shared stake in your success. It's more than a service; it's a partnership built on mutual growth and
          innovation.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-electric-blue to-neon-pink text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow"
        >
          Explore Partnership Opportunities
        </motion.button>
      </div>
    </section>
  )
}
