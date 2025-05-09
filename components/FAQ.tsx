"use client"

import { motion } from "framer-motion"

interface FAQProps {
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h4 className="text-xl font-medium mb-3 text-white">{faq.question}</h4>
          <p className="text-white/70 text-sm">{faq.answer}</p>
        </motion.div>
      ))}
    </div>
  )
}
