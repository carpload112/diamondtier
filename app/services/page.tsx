"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Palette, Code, TrendingUp, DollarSign, Smartphone, Server, Handshake, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    slug: "branding-identity",
    description:
      "Developing memorable brand identities, including logos, style guides, and messaging that resonates with your target audience.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
  },
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description:
      "Building high-performance websites and applications using cutting-edge technologies, customized to your business needs.",
    image:
      "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Creating intuitive, user-focused mobile applications designed to boost engagement and streamline user flows.",
    image:
      "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategies",
    slug: "growth-strategies",
    description:
      "Implementing data-driven strategies to help you thrive in an evolving marketplace and maximize your ROI.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
  },
  {
    icon: Server,
    title: "Enterprise Solutions",
    slug: "enterprise-solutions",
    description:
      "Delivering robust, scalable, and secure systems tailored for large-scale operations and complex business needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
  },
  {
    icon: DollarSign,
    title: "Capital Raising",
    slug: "capital-raising",
    description:
      "Assisting in securing funding through pitch deck creation, investor networking, and ongoing stakeholder management.",
    image:
      "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
  },
  {
    icon: Handshake,
    title: "Sweat Equity Partnerships",
    slug: "sweat-equity",
    description: "Offering strategic collaboration and development support in exchange for equity in select projects.",
    image:
      "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
  },
  {
    icon: BarChart,
    title: "Analytics & Optimization",
    slug: "analytics-optimization",
    description:
      "Leveraging data insights to drive rapid user acquisition, revenue growth, and measurable business impact.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              OUR <span className="gradient-text">SERVICES</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer a comprehensive suite of services designed to elevate your brand and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-md cursor-pointer h-full"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                  </div>

                  <div className="relative z-10 p-6 border border-primary/20 group-hover:border-primary/50 rounded-md h-full flex flex-col transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xs uppercase tracking-wider">
                      Learn More →
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
