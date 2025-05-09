"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              GET IN <span className="gradient-text">TOUCH</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden rounded-md border border-primary/20 p-8">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png"
                    alt="Contact"
                    fill
                    className="object-cover opacity-10"
                  />
                  <div className="absolute inset-0 bg-background/80" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-heading mb-6">Schedule a Call</h2>
                  <p className="text-white/70 mb-6">
                    Book a discovery call with our team to discuss your project and explore how we can help you achieve
                    your goals.
                  </p>
                  <a
                    href="https://calendly.com/diamondtiersolutions/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-primary border border-primary px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Discovery Call
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-md border border-primary/20 p-8">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg"
                    alt="Contact Information"
                    fill
                    className="object-cover opacity-10"
                  />
                  <div className="absolute inset-0 bg-background/80" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-heading mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-4" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a
                          href="mailto:info@diamondtier.solutions"
                          className="text-white/70 hover:text-primary transition-colors"
                        >
                          info@diamondtier.solutions
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-4" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <a href="tel:+13059223379" className="text-white/70 hover:text-primary transition-colors">
                          (305) 922-3379
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-4 mt-1" />
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-white/70">1501 Biscayne Blvd Suite 501</p>
                        <p className="text-white/70">Miami, FL 33132</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
