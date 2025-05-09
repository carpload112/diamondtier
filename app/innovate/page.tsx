"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Lightbulb, Rocket, DollarSign, Code, Send } from "lucide-react"
import Head from "next/head"

// Add EmailJS import at the top of the file
import emailjs from "@emailjs/browser"

export default function InnovatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ideaTitle: "",
    ideaDescription: "",
    stage: "concept",
    fundingNeeded: "0-50k",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Update the handleSubmit function in the InnovatePage component
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(false)
    setFormData({
      ...formData,
      submitting: true,
    })

    try {
      // EmailJS credentials
      const serviceId = "service_ytsfmye"
      const templateId = "template_6pseikw"
      const publicKey = "m48gXc9XiqzgFu9r4"

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          idea_title: formData.ideaTitle,
          idea_description: formData.ideaDescription,
          stage: formData.stage,
          funding_needed: formData.fundingNeeded,
          form_type: "Idea Submission",
        },
        publicKey,
      )

      setIsSubmitted(true)
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          ideaTitle: "",
          ideaDescription: "",
          stage: "concept",
          fundingNeeded: "0-50k",
        })
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Something went wrong. Please try again later.")
      setIsSubmitted(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Head>
        <title>Turn Your Tech Idea Into Reality | Diamond Tier Agency</title>
        <meta
          name="description"
          content="Partner with Diamond Tier Agency to build, fund, and scale your innovative tech solutions. Submit your idea today and transform your vision into reality."
        />
        <meta name="keywords" content="tech startup, app development, funding, innovation, digital transformation" />
      </Head>

      <Navbar />

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
              TURN YOUR <span className="gradient-text">TECH IDEA</span> INTO REALITY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 text-white/70 max-w-2xl mx-auto font-light"
            >
              We partner with visionary entrepreneurs to build, fund, and scale innovative tech solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#submit-idea" className="neon-button hoverable">
                <span className="flex items-center">
                  Submit Your Idea
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </a>
              <Link
                href="#how-it-works"
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wider group text-sm"
              >
                <span className="relative">
                  Learn How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-deep-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">OUR PROCESS</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              HOW WE BRING <span className="gradient-text">IDEAS TO LIFE</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              From concept to market, we provide the expertise, resources, and capital to make your vision a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {[
              {
                icon: Lightbulb,
                title: "Idea Validation",
                description: "We evaluate your concept for market fit, technical feasibility, and growth potential.",
              },
              {
                icon: Code,
                title: "Development",
                description: "Our expert team builds your solution using cutting-edge technologies and best practices.",
              },
              {
                icon: Rocket,
                title: "Launch & Growth",
                description: "We implement strategies to acquire users, optimize performance, and scale your solution.",
              },
              {
                icon: DollarSign,
                title: "Funding",
                description:
                  "Access capital through our network of investors or explore our sweat equity partnership model.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card p-6 md:p-8 h-full"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-heading mb-2 md:mb-4 text-white">{step.title}</h3>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute inset-0 noise-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">SUCCESS STORIES</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              IDEAS WE'VE <span className="gradient-text">TRANSFORMED</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              See how we've helped entrepreneurs turn their visions into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Washee",
                description:
                  "From concept to 500+ users in the first month, we built a complete mobile platform for luxury car wash services.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
                link: "https://www.thewashee.app",
              },
              {
                title: "Diamond Tier Capital",
                description:
                  "We developed a comprehensive funding platform with loan calculator functionality, increasing lead generation by 68%.",
                image:
                  "https://sjc.microlink.io/UccQeUyGxOVbAB1hMYhcHDIKjaagFV6gSldwbel4zQ4zW45lk1QhMesggZmS2aIgjeq43O-76hp5mhbjkDxhKg.jpeg",
                link: "https://www.diamondtiercapital.com",
              },
              {
                title: "Trucutz",
                description:
                  "Our mobile-first booking platform helped this premium barbershop increase bookings by 78% after launch.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2012.37.52%E2%80%AFAM-Vo1cChLSjbUwLCOvl3ALQNek10Cb9z.png",
                link: "https://www.trucutz.com",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <h3 className="text-xl md:text-2xl font-heading mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-4">{project.description}</p>
                  <Link href={project.link} target="_blank" className="text-primary text-xs md:text-sm">
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">INSIGHTS</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              LATEST FROM OUR <span className="gradient-text">BLOG</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Expert advice and insights to help you navigate the tech startup landscape and digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 6,
                title: "Sustainable Building Practices in Mountain Communities",
                excerpt:
                  "How innovative tech solutions are transforming sustainable construction in Colorado's mountain communities.",
                date: "February 15, 2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chautauqua-Hiking.jpg-GXJxvWxqT3hjClHJUyU6Bviy1foVed.jpeg",
              },
              {
                id: 7,
                title: "From Concept to Launch: Building a Successful Tech Startup",
                excerpt:
                  "Key strategies and insights for entrepreneurs looking to transform their tech ideas into thriving businesses.",
                date: "March 1, 2025",
                image:
                  "https://sjc.microlink.io/UccQeUyGxOVbAB1hMYhcHDIKjaagFV6gSldwbel4zQ4zW45lk1QhMesggZmS2aIgjeq43O-76hp5mhbjkDxhKg.jpeg",
              },
              {
                id: 8,
                title: "The Future of Mobile App Development in 2025",
                excerpt:
                  "Emerging trends and technologies that are reshaping how we build and interact with mobile applications.",
                date: "March 10, 2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
              },
              {
                id: 9,
                title: "Securing Funding for Your Tech Startup",
                excerpt:
                  "A comprehensive guide to different funding options and how to prepare your startup for investment.",
                date: "February 25, 2025",
                image:
                  "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card overflow-hidden h-full flex flex-col ${index > 2 ? "hidden lg:flex" : ""}`}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-xs">{post.date}</span>
                  <h3 className="text-xl font-medium mt-2 mb-3 text-white line-clamp-2">{post.title}</h3>
                  <p className="text-white/60 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary text-sm mt-auto">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="neon-button text-sm py-3 px-6">
              <span>View All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section id="submit-idea" className="py-20 relative overflow-hidden">
        <div className="grid-bg" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">SUBMIT YOUR IDEA</h2>
              <h3 className="text-4xl md:text-5xl font-heading mb-6">
                LET'S BUILD <span className="gradient-text">TOGETHER</span>
              </h3>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Share your vision with us, and we'll explore how we can help bring it to life.
              </p>
            </div>

            <div className="cyber-card p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading mb-4 text-white">Idea Submitted!</h3>
                  <p className="text-white/70 mb-6">
                    Thank you for sharing your vision with us. Our team will review your submission and get back to you
                    within 2-3 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2 text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="ideaTitle" className="block text-white mb-2 text-sm">
                      Idea Title
                    </label>
                    <input
                      type="text"
                      id="ideaTitle"
                      name="ideaTitle"
                      value={formData.ideaTitle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="ideaDescription" className="block text-white mb-2 text-sm">
                      Describe Your Idea
                    </label>
                    <textarea
                      id="ideaDescription"
                      name="ideaDescription"
                      value={formData.ideaDescription}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                      placeholder="What problem does it solve? Who is the target audience? What makes it unique?"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="stage" className="block text-white mb-2 text-sm">
                        Current Stage
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="concept">Concept/Idea</option>
                        <option value="prototype">Prototype/MVP</option>
                        <option value="launched">Already Launched</option>
                        <option value="growing">Growing/Scaling</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="fundingNeeded" className="block text-white mb-2 text-sm">
                        Estimated Funding Needed
                      </label>
                      <select
                        id="fundingNeeded"
                        name="fundingNeeded"
                        value={formData.fundingNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="0-50k">$0 - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <button type="submit" className="neon-button hoverable">
                      <span className="flex items-center">
                        Submit Your Idea
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-deep-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-heading tracking-[0.3em] text-primary mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">
              COMMON <span className="gradient-text">QUESTIONS</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What types of ideas are you looking for?",
                  answer:
                    "We focus on tech-enabled solutions with scalable business models. We're particularly interested in SaaS, mobile applications, marketplaces, and innovative platforms that solve real problems.",
                },
                {
                  question: "Do I need a technical background to submit an idea?",
                  answer:
                    "Not at all. We're looking for visionaries with great ideas, regardless of technical expertise. Our team can handle the technical implementation while you focus on the business vision.",
                },
                {
                  question: "How does the funding process work?",
                  answer:
                    "We offer multiple funding options, including traditional investment, sweat equity partnerships, and connections to our network of investors. The right approach depends on your specific needs and the nature of your project.",
                },
                {
                  question: "What happens after I submit my idea?",
                  answer:
                    "Our team will review your submission and reach out within 2-3 business days to schedule an initial consultation. We'll discuss your vision in more detail and explore potential collaboration options.",
                },
                {
                  question: "Do you take equity in all projects?",
                  answer:
                    "Our partnership models vary based on the project's needs. We offer both fee-for-service arrangements and equity-based partnerships, depending on what makes the most sense for your venture.",
                },
              ].map((faq, index) => (
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="grid-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto cyber-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
              READY TO <span className="gradient-text">TRANSFORM</span> YOUR IDEA?
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary that changes the world and drives exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#submit-idea" className="neon-button hoverable">
                <span className="flex items-center">
                  Submit Your Idea
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </a>
              <a
                href="https://calendly.com/diamondtiersolutions/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wider group text-sm"
              >
                <span className="relative">
                  Schedule a Call
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
