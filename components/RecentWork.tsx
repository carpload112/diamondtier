"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "Washee",
    description: "Luxury residential car wash service at your doorstep",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20WASHEE_black_transparent%20(1)-r8jwE8UuuR3n3aA2XM4tGKlhCndTBp.png",
    link: "https://www.thewashee.app",
    category: "Luxury Services",
  },
  {
    title: "Diamond Tier Capital",
    description: "Premium business funding solutions",
    image:
      "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
    link: "https://www.diamondtiercapital.com",
    category: "FinTech",
  },
  {
    title: "Trucutz",
    description: "Premium barbershop experience platform",
    image:
      "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
    link: "https://www.trucutz.com",
    category: "Lifestyle & Beauty",
    logo: "https://www.trucutz.com/uploads/b/183c1440-1d11-11ea-8d90-4556a8b0e190/Trucutz%20Logo%20Black.png",
  },
  {
    title: "Cedar Home Loans",
    description: "Local Colorado mortgage experts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    link: "https://cedarhomeloan.com",
    category: "Financial Services",
    logo: "https://cedarhomeloan.com/wp-content/uploads/2023/12/Cedar-Home-Loans-Logo.png",
  },
]

export default function RecentWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle">From startups to global brands, we deliver exceptional results</p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl -z-10 opacity-50" />

          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-normal text-white">{project.title}</h3>
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="text-primary hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                      <p className="text-white/70 mb-3 text-xs max-w-xs">{project.description}</p>
                      <span className="inline-block px-2 py-1 border border-primary text-primary text-xs uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
