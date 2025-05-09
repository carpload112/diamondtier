"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<{
    submitting: boolean
    success: boolean
    error: string | null
  }>({
    submitting: false,
    success: false,
    error: null,
  })

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus({ ...subscribeStatus, submitting: true })

    try {
      // EmailJS credentials
      const serviceId = "service_ytsfmye"
      const templateId = "template_6pseikw"
      const publicKey = "m48gXc9XiqzgFu9r4"

      await emailjs.send(
        serviceId,
        templateId,
        {
          subscriber_email: email,
          subscription_type: "Newsletter",
        },
        publicKey,
      )

      setEmail("")
      setSubscribeStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Reset success status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus({
          submitting: false,
          success: false,
          error: null,
        })
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubscribeStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <footer className="bg-deep-black relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />
      <div className="absolute inset-0 noise-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png"
                alt="Diamond Tier Agency"
                width={150}
                height={112}
                className="h-auto w-auto"
              />
            </div>
            <p className="text-white/60 text-xs font-light mb-4">
              Elevating brands through innovation, strategy, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-primary transition-colors duration-300 hoverable">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors duration-300 hoverable">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors duration-300 hoverable">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors duration-300 hoverable">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-primary mb-4 font-heading">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    Work
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/agency"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-xs font-light hoverable group"
                >
                  <span className="relative">
                    Terms & Conditions
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-primary mb-4 font-heading">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-white/60 text-xs font-light">
                <Mail className="w-3 h-3 mr-2 text-primary" />
                <a
                  href="mailto:info@diamondtier.solutions"
                  className="hover:text-primary transition-colors duration-300 hoverable"
                >
                  info@diamondtier.solutions
                </a>
              </li>
              <li className="flex items-center text-white/60 text-sm font-light">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href="tel:+13059223379" className="hover:text-primary transition-colors duration-300 hoverable">
                  (305) 922-3379
                </a>
              </li>
              <li className="flex items-start text-white/60 text-sm font-light">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1" />
                <div>
                  <p>1501 Biscayne Blvd Suite 501</p>
                  <p>Miami, FL 33132</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-primary mb-4 font-heading">Subscribe</h4>
            <p className="text-white/60 text-xs font-light mb-3">Stay updated with our latest insights and news</p>
            <form className="flex flex-col space-y-4" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:border-primary transition-colors duration-300 text-sm"
              />
              <button type="submit" className="neon-button text-sm" disabled={subscribeStatus.submitting}>
                <span>{subscribeStatus.submitting ? "Subscribing..." : "Subscribe"}</span>
              </button>

              {subscribeStatus.success && (
                <div className="flex items-center text-primary text-sm mt-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Successfully subscribed!</span>
                </div>
              )}

              {subscribeStatus.error && <div className="text-red-500 text-sm mt-2">{subscribeStatus.error}</div>}
            </form>
          </motion.div>
        </div>

        <div className="py-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs font-light">
            &copy; {currentYear} Diamond Tier Agency. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-primary text-xs transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-primary text-xs transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
