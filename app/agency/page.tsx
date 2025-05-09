"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Target, Lightbulb } from "lucide-react"

export default function AgencyPage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <main className="min-h-screen bg-background" ref={targetRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="grid-bg" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-heading mb-6 leading-tight"
            >
              ABOUT <span className="gradient-text">DIAMOND TIER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 text-white/70 max-w-2xl mx-auto font-light"
            >
              We're a team of innovators, creators, and strategists dedicated to transforming visionary ideas into
              digital realities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-deep-black relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png"
                  alt="Diamond Tier Agency"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading mb-6">
                OUR <span className="gradient-text">STORY</span>
              </h2>
              <p className="text-white/70 mb-6">
                Diamond Tier Agency was founded in 2020 with a simple mission: to help visionary entrepreneurs and
                businesses transform their ideas into digital realities. What began as a small team of passionate
                technologists has grown into a full-service digital innovation studio.
              </p>
              <p className="text-white/70 mb-6">
                Our founders, Hysen Braholli and Andy Mijangos, recognized a gap in the market for a truly holistic
                approach to digital transformation. They envisioned an agency that could not only build beautiful
                websites and applications but also provide the strategic guidance, marketing expertise, and funding
                connections needed for long-term success.
              </p>
              <p className="text-white/70">
                Today, we're proud to have helped dozens of startups and established businesses alike achieve their
                digital ambitions. From concept to launch and beyond, we're committed to being the partner that helps
                you shine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 noise-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">OUR VALUES</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              PRINCIPLES THAT <span className="gradient-text">GUIDE US</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              These core values define our approach and shape every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on measurable outcomes that directly impact your business growth and success.",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We believe in true collaboration, working alongside you as an extension of your team.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from code to communication.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card p-8 h-full"
              >
                <div className="w-12 h-12 mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-heading mb-4 text-white">{value.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Comprehensive Approach */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">OUR APPROACH</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              COMPREHENSIVE <span className="gradient-text">SOLUTIONS</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              We offer a full spectrum of services to meet all your digital needs.
            </p>
          </div>

          <motion.div style={{ opacity, scale }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing & Branding",
                description:
                  "We craft standout brand identities and implement innovative marketing strategies tailored to your unique business needs.",
              },
              {
                title: "Tech Development",
                description:
                  "Our in-house development team builds cutting-edge digital products and robust tech solutions using the latest technologies.",
              },
              {
                title: "Growth Strategies",
                description:
                  "We implement data-driven strategies to help you thrive in an evolving marketplace and maximize your ROI.",
              },
              {
                title: "Capital Raising",
                description:
                  "We connect you with the right funding opportunities to fuel your growth through our network of investors.",
              },
              {
                title: "Enterprise Solutions",
                description:
                  "We deliver robust, scalable, and secure systems tailored for large-scale operations and complex business needs.",
              },
              {
                title: "Sweat Equity Partnerships",
                description:
                  "For select projects, we offer unique partnership opportunities where we invest our expertise in exchange for equity.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 h-full"
              >
                <h3 className="text-xl font-heading mb-4 text-primary">{service.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 noise-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">OUR TEAM</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              MEET THE <span className="gradient-text">KEY PLAYERS</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Our extensive team brings together decades of experience across technology, design, marketing, and
              business development. Here are some of our leadership team members who drive our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hysen Braholli",
                role: "CEO and Founder",
                bio: "Visionary leader and business strategist with extensive experience in digital transformation and business development.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1715278957777-cmT77RUOHdCDBmKJeMoOUaz0I1NUXo.jpeg",
                linkedin: "https://www.linkedin.com/in/hysenbraholli/",
              },
              {
                name: "Andy Mijangos",
                role: "Co-Founder, Managing Partner",
                bio: "SaaS innovator and digital marketing expert with over 15 years of experience building successful tech companies.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1713828639936-d6CwzfQu2UdCkIN3mltI6GA9LjFI2k.jpeg",
                linkedin: "https://www.linkedin.com/in/andymijangos/",
              },
              {
                name: "Juan Marin",
                role: "Business Consultant",
                bio: "Scalable solutions specialist with expertise in optimizing business operations and implementing growth strategies.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1713379830968-vdfX4jvjZ15x0k3bezjqsGG8ygklfq.jpeg",
                linkedin: "https://www.linkedin.com/in/juan-marin/",
              },
              {
                name: "Cameron Washington",
                role: "Marketing Advisor",
                bio: "Strategic marketing expert focused on brand development and digital acquisition strategies for tech startups.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1600960809704-UchqefBWMSkZ8CElJf18vX160USXgf.jpeg",
                linkedin: "https://www.linkedin.com/in/cameron-washington/",
              },
              {
                name: "Allen Metayer",
                role: "Creative Director & Marketing Specialist",
                bio: "Digital marketing innovator with a passion for creating compelling visual narratives and conversion-focused designs.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1565246074560-C5jmMU5uBx7CeXOS7ClhgruLEYVDqz.jpeg",
                linkedin: "https://www.linkedin.com/in/allen-metayer/",
              },
              {
                name: "Iulia Tudor",
                role: "Marketing & Business Development",
                bio: "Strategic marketing expert specializing in brand development and business growth strategies for tech and luxury brands.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1597396071286%20%281%29-LqT5vkMIla3W12wJ3w2yTsW8Nt4JnD.jpeg",
                linkedin: "https://www.linkedin.com/in/iulia-tudor/",
              },
              {
                name: "Nikolin Andoni",
                role: "Full Stack Developer",
                bio: "Expert full stack developer specializing in building scalable web applications and innovative digital solutions.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2012.59.50%E2%80%AFAM-wseneOooHJHFjF8dxR2eYBn7mzVkWO.png",
                linkedin: "https://www.linkedin.com/in/nikolin-andoni/",
              },
              {
                name: "Join Our Team",
                role: "We're Hiring!",
                bio: "Passionate about technology and innovation? We're always looking for talented individuals to join our growing team.",
                image: "https://v0.blob.com/emoji/1f464.svg",
                linkedin: "/careers",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-heading mb-1 text-white group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {member.name === "Join Our Team" ? "View Openings" : "Connect on LinkedIn"} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-white/70 text-lg mb-6">
            Our full team includes dozens of specialists across development, design, marketing, and strategy who
            collaborate to deliver exceptional results on our 500+ projects.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">WHY CHOOSE US</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              WHAT SETS US <span className="gradient-text">APART</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto cyber-card p-12">
            <div className="space-y-6">
              {[
                "Holistic approach combining technology, design, marketing, and business strategy",
                "Flexible partnership models including traditional services and sweat equity arrangements",
                "Proven track record of successful launches and growth across diverse industries",
                "Access to our network of investors, partners, and industry connections",
                "Dedicated team that's invested in your long-term success",
                "Enterprise-level expertise capable of handling projects of any scale",
                "Cutting-edge technology and innovative solutions tailored to your specific needs",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/innovate" className="neon-button hoverable">
                <span>Submit Your Idea</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="grid-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto cyber-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
              READY TO <span className="gradient-text">TRANSFORM</span> YOUR BUSINESS?
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary that elevates your brand and drives exceptional
              results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://calendly.com/diamondtiersolutions/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button hoverable"
              >
                <span>Schedule a Consultation</span>
              </a>
              <Link
                href="/innovate"
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wider group text-sm"
              >
                <span className="relative">
                  Submit Your Idea
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
