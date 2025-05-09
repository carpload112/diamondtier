"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X } from "lucide-react"

const phoneNumber = "+13059223379"

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleWidget = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex flex-col space-y-3 absolute bottom-full right-0 min-w-[140px]"
          >
            <a
              href={`sms:${phoneNumber}`}
              className="glass-card px-4 py-3 rounded-md flex items-center justify-center hover:border-primary transition-all duration-300 text-sm text-white/80 hover:text-primary hoverable"
            >
              <MessageCircle className="mr-2" size={16} />
              Text Us
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="glass-card px-4 py-3 rounded-md flex items-center justify-center hover:border-primary transition-all duration-300 text-sm text-white/80 hover:text-primary hoverable"
            >
              <Phone className="mr-2" size={16} />
              Call Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={toggleWidget}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center hoverable overflow-hidden shadow-lg shadow-primary/20"
        aria-label="Contact options"
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={20} /> : <Phone size={20} />}
        </motion.div>
        <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </motion.button>
    </div>
  )
}
