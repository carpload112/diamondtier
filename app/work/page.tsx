"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Extra Shutters",
    category: "E-commerce & Manufacturing",
    description:
      "We developed a comprehensive e-commerce platform for Extra Shutters, showcasing their premium American-made shutters. The website caters to wholesalers and resellers, featuring detailed product information, a quote request system, and a partner login area.",
    image:
      "https://sjc.microlink.io/QfCLcOs9FkGOgIGdB7QYNvLudSPVU7iawhv75ymKg2-546WRb1QYErLqIZ94ytkC6Kk7WQjPlKlUkePpfeLRHA.jpeg",
    link: "https://www.extrashutters.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
  },
  {
    title: "Hoss Medical",
    category: "Healthcare Technology",
    description:
      "We developed an AI-powered healthcare workflow platform for Hoss Medical, revolutionizing healthcare operations. The platform addresses key challenges in healthcare workflow management, improving efficiency and patient care.",
    image:
      "https://sjc.microlink.io/kQgT-jD5F1L5PM6d6acXEFBUrCmX3BaIF-RLh-8ZzWI7UKvdE5MYkSjgYpbRMz4qrmxMe2lofEG35SGtgXaBww.jpeg",
    link: "https://www.hossmedical.com",
    technologies: ["AI/Machine Learning", "React", "Node.js", "AWS", "Healthcare APIs"],
  },
  {
    title: "Cabana Miami",
    category: "Luxury Interior Design",
    description:
      "We developed a complete digital presence for Cabana Miami, a luxury sustainable design firm. The website showcases their oceanfront properties and commitment to sustainable luxury living.",
    image:
      "https://sjc.microlink.io/bmWbL4uqzYyeMk-4Z4pGNH3hyRVqAdVXHBzq8cLa6x0ZJgDZqVcqKX_xZJQVEtLmr8NhKy5iz2WbOgUNh3_dqw.jpeg",
    link: "https://www.cabana-miami.com",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful CMS"],
  },
  {
    title: "Jean-Georges Residences",
    category: "Luxury Real Estate",
    description:
      "For Jean-Georges Miami Tropic Residences, we created an immersive digital experience that highlights the unique combination of culinary excellence and luxury waterfront living. The site features stunning visuals and seamless user experience.",
    image:
      "https://sjc.microlink.io/l7EdWyfwVIIe2r4N2LaUUNYA9xu6orO6LnyCGfHM1rQy9YkaCYEPmrrDMkHnQr98-8JMm5DEX5RogNR9dlgfdg.jpeg",
    link: "https://www.jeangeorgesresidences.com",
    technologies: ["React", "GSAP Animations", "Headless CMS", "Custom Property Listings"],
  },
  {
    title: "Washee",
    category: "Mobile App Development",
    description:
      "Luxury residential car wash service at your doorstep. We developed a complete mobile platform that connects customers with premium car wash services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    link: "https://www.thewashee.app",
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
  },
  {
    title: "Diamond Tier Capital",
    category: "Web Development & Branding",
    description:
      "Premium business funding solutions including SBA loans, 0% credit lines, and unsecured financing options. We developed a complete brand identity and interactive web platform with loan calculator functionality.",
    image:
      "https://sjc.microlink.io/UccQeUyGxOVbAB1hMYhcHDIKjaagFV6gSldwbel4zQ4zW45lk1QhMesggZmS2aIgjeq43O-76hp5mhbjkDxhKg.jpeg",
    link: "https://www.diamondtiercapital.com",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "HubSpot"],
  },
  {
    title: "Trucutz",
    category: "Platform Development",
    description:
      "We developed a premium barbershop booking platform for Trucutz, featuring a sleek mobile-first design with integrated appointment scheduling. The platform showcases their modern facilities with custom lighting and premium service offerings, while streamlining the booking experience for their clientele.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2012.37.52%E2%80%AFAM-Vo1cChLSjbUwLCOvl3ALQNek10Cb9z.png",
    link: "https://www.trucutz.com",
    technologies: ["React", "Express", "MongoDB", "AWS", "Mobile-First Design", "Real-time Booking"],
  },
  {
    title: "Cedar Home Loans",
    category: "Financial Services",
    description:
      "Local Colorado mortgage experts with a focus on personalized service. We developed a complete digital presence and lead generation system.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    link: "https://cedarhomeloan.com",
    technologies: ["WordPress", "Custom PHP", "MySQL", "Google Analytics"],
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              OUR <span className="gradient-text">WORK</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore a selection from our extensive portfolio of 500+ successful projects across various industries.
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/2 relative aspect-video overflow-hidden rounded-md">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>

                <div className="w-full md:w-1/2">
                  <span className="text-xs uppercase tracking-wider text-primary">{project.category}</span>
                  <h2 className="text-2xl font-heading mt-2 mb-4">{project.title}</h2>
                  <p className="text-white/70 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-primary/30 text-primary/80 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-primary border border-primary px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
