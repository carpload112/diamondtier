"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Extra Shutters",
    category: "E-commerce & Manufacturing",
    description: "Premium American-Made Shutters for Wholesalers & Resellers",
    image:
      "https://sjc.microlink.io/QfCLcOs9FkGOgIGdB7QYNvLudSPVU7iawhv75ymKg2-546WRb1QYErLqIZ94ytkC6Kk7WQjPlKlUkePpfeLRHA.jpeg",
    link: "https://www.extrashutters.com",
  },
  {
    title: "Hoss Medical",
    category: "Healthcare Technology",
    description: "AI-powered healthcare workflow platform",
    image:
      "https://sjc.microlink.io/kQgT-jD5F1L5PM6d6acXEFBUrCmX3BaIF-RLh-8ZzWI7UKvdE5MYkSjgYpbRMz4qrmxMe2lofEG35SGtgXaBww.jpeg",
    link: "https://www.hossmedical.com",
  },
  {
    title: "Cabana Miami",
    category: "Luxury Interior Design",
    description: "Sustainable luxury design for oceanfront living",
    image:
      "https://sjc.microlink.io/bmWbL4uqzYyeMk-4Z4pGNH3hyRVqAdVXHBzq8cLa6x0ZJgDZqVcqKX_xZJQVEtLmr8NhKy5iz2WbOgUNh3_dqw.jpeg",
    link: "https://www.cabana-miami.com",
  },
  {
    title: "Jean-Georges Residences",
    category: "Luxury Real Estate",
    description: "Where culinary mastery meets waterfront living",
    image:
      "https://sjc.microlink.io/l7EdWyfwVIIe2r4N2LaUUNYA9xu6orO6LnyCGfHM1rQy9YkaCYEPmrrDMkHnQr98-8JMm5DEX5RogNR9dlgfdg.jpeg",
    link: "https://www.jeangeorgesresidences.com",
  },
  {
    title: "Washee",
    category: "Mobile App Development",
    description: "Luxury residential car wash service at your doorstep",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    link: "https://www.thewashee.app",
  },
  {
    title: "Diamond Tier Capital",
    category: "Web Development & Branding",
    description: "Premium business funding solutions",
    image:
      "https://sjc.microlink.io/UccQeUyGxOVbAB1hMYhcHDIKjaagFV6gSldwbel4zQ4zW45lk1QhMesggZmS2aIgjeq43O-76hp5mhbjkDxhKg.jpeg",
    link: "https://www.diamondtiercapital.com",
  },
  {
    title: "Trucutz",
    category: "Platform Development",
    description: "Premium barbershop experience platform",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2012.37.52%E2%80%AFAM-Vo1cChLSjbUwLCOvl3ALQNek10Cb9z.png",
    link: "https://www.trucutz.com",
  },
  {
    title: "Cedar Home Loans",
    category: "Financial Services",
    description: "Local Colorado mortgage experts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    link: "https://cedarhomeloan.com",
  },
]

export default function ShowcaseSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <section className="py-section bg-background relative overflow-hidden">
      <div className="grid-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">FEATURED WORK</h2>
          <h3 className="text-4xl md:text-5xl font-heading mb-6">
            A GLIMPSE OF OUR <span className="gradient-text">PORTFOLIO</span>
          </h3>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            A selection of our most impactful projects from our extensive portfolio spanning various industries and
            technologies
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block hoverable">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />

                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Border that animates on hover */}
                    <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-xs text-primary font-heading tracking-wider block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading mb-2 text-white">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">
            With over 500+ successful projects delivered, we've helped businesses across diverse industries achieve
            their digital goals.
          </p>
          <Link href="/work" className="neon-button hoverable">
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
