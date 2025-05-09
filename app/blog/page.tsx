"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding the Boulder Real Estate Market in 2025",
    excerpt:
      "An in-depth analysis of current trends, opportunities, and challenges in Boulder's dynamic real estate market. From the Flatirons to Pearl Street, we explore what makes this market unique.",
    content: "Full content would go here...",
    date: "March 15, 2025",
    author: "Andy Mijangos",
    authorRole: "CEO and Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%288%29-g0M5fqHre1EwPkz5mqT4agK2EOgmpL.jpeg",
    category: "Real Estate",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Pearl Street Effect: How Location Impacts Property Value",
    excerpt:
      "Discover how proximity to Boulder's iconic Pearl Street Mall and other local amenities can significantly influence property values and investment potential.",
    content: "Full content would go here...",
    date: "March 10, 2025",
    author: "Hysen Braholli",
    authorRole: "Co-Founder, Managing Partner",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0842_7d6b41d5-5775-4f3b-a3e7-3c1f635abe3f.jpg-J0wfrcpdL5v7oFdvPCLGvWSVZbIe5d.jpeg",
    category: "Real Estate",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Navigating Mountain Town Real Estate: A Comprehensive Guide",
    excerpt:
      "From Telluride to Boulder, we break down what you need to know about investing in Colorado's prestigious mountain communities.",
    content: "Full content would go here...",
    date: "March 5, 2025",
    author: "Juan Marin",
    authorRole: "Business Consultant",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-st-teluride-TELURIDE1221-36894a82cd774058b1fd259707cccff5.jpg-CoenuvPrUikoRSuocJQRIJbId5XAMP.jpeg",
    category: "Real Estate",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Seasonal Market Trends in Colorado's Front Range",
    excerpt:
      "Understanding how seasonal changes affect the real estate market in Boulder and surrounding areas. Learn the best times to buy or sell.",
    content: "Full content would go here...",
    date: "February 28, 2025",
    author: "Cameron Washington",
    authorRole: "Marketing Advisor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/townmtn.jpg-e60RDNxuYIXpeikMy8tLyDvmHOXA2Z.jpeg",
    category: "Real Estate",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "The Outdoor Lifestyle Premium: Valuing Homes Near Trails",
    excerpt:
      "How proximity to hiking trails, open spaces, and outdoor recreation areas impacts property values in Boulder County.",
    content: "Full content would go here...",
    date: "February 20, 2025",
    author: "Allen Metayer",
    authorRole: "Creative Director & Marketing Specialist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chautauqua-Hiking.jpg-ptotX5DocvjT3Sqvmvl6oqlnuYQOn3.jpeg",
    category: "Real Estate",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Sustainable Building Practices in Mountain Communities",
    excerpt:
      "Exploring how sustainable construction and green building practices are shaping the future of Colorado's mountain real estate.",
    content: "Full content would go here...",
    date: "February 15, 2025",
    author: "Nikolin Andoni",
    authorRole: "Full Stack Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chautauqua-Hiking.jpg-GXJxvWxqT3hjClHJUyU6Bviy1foVed.jpeg",
    category: "Real Estate",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "The Future of AI in Software Development",
    excerpt:
      "How artificial intelligence is revolutionizing the way we build, test, and deploy software applications in 2025 and beyond.",
    content: "Full content would go here...",
    date: "March 12, 2025",
    author: "Nikolin Andoni",
    authorRole: "Full Stack Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-F0bFYASAiauUAR6QEe2POZwhA0GloJ.png", // Updated with software development illustration
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 8,
    title: "Web3 and the Decentralized Internet: What Business Leaders Need to Know",
    excerpt:
      "Breaking down the business implications of blockchain, cryptocurrencies, and decentralized applications for forward-thinking companies.",
    content: "Full content would go here...",
    date: "March 8, 2025",
    author: "Andy Mijangos",
    authorRole: "CEO and Founder",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-tL2Et7G23831CmLPehEtquxPscfnZK.jpeg", // Updated with digital tunnel image
    category: "Technology",
    readTime: "11 min read",
  },
  {
    id: 9,
    title: "Digital Marketing Strategies for Local Businesses in 2025",
    excerpt:
      "Effective tactics for small and medium businesses to compete in an increasingly digital marketplace while maintaining local relevance.",
    content: "Full content would go here...",
    date: "March 3, 2025",
    author: "Cameron Washington",
    authorRole: "Marketing Advisor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-cG0SCWohDisgAXUQwS8RTknpMuiqPN.jpeg", // Updated with global digital transformation image
    category: "Marketing",
    readTime: "8 min read",
  },
  {
    id: 10,
    title: "AI-Powered Analytics: Transforming Business Intelligence",
    excerpt:
      "How artificial intelligence is revolutionizing data analysis and business decision-making in the modern enterprise.",
    content: "Full content would go here...",
    date: "February 25, 2025",
    author: "Allen Metayer",
    authorRole: "Creative Director & Marketing Specialist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-sSLEhnItbxxp6gBXNBD3GjnuxzQ67y.jpeg", // Updated with holographic data visualization image
    category: "Technology",
    readTime: "6 min read",
  },
  {
    id: 11,
    title: "The Future of Digital Innovation",
    excerpt:
      "Exploring emerging technologies and their potential impact on businesses and society in the coming years.",
    content: "Full content would go here...",
    date: "February 18, 2025",
    author: "Nikolin Andoni",
    authorRole: "Full Stack Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-B8IXiGeydGvNeHp3ZiS2NTFijxDcrw.jpeg", // Updated with future tech innovation image
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 12,
    title: "Building a Sustainable Business Model for Long-Term Growth",
    excerpt:
      "Strategic approaches to creating business models that balance profitability, sustainability, and scalability in today's market.",
    content: "Full content would go here...",
    date: "February 10, 2025",
    author: "Juan Marin",
    authorRole: "Business Consultant",
    image: "/placeholder.svg?height=600&width=800",
    category: "Business",
    readTime: "10 min read",
  },
]

// Replace this with your actual client data from your projects
const clients = [
  {
    id: 1,
    name: "Cedar Home Loans",
    description: "Colorado's trusted mortgage experts specializing in Boulder and mountain community financing.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    website: "https://cedarhomeloan.com",
    expertName: "Andrew McBryan",
    expertTitle: "Principal",
    expertQuote:
      "In today's dynamic Colorado real estate market, having the right financing partner can make all the difference.",
  },
  // Add your other clients from your project portfolio here
  // Example:
  // {
  //   id: 2,
  //   name: "Client Name",
  //   description: "Client description",
  //   logo: "/path/to/logo.png", // or use a placeholder if no logo is available
  //   website: "https://clientwebsite.com",
  //   expertName: "Expert Name",
  //   expertTitle: "Position",
  //   expertQuote: "Expert quote"
  // },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              THE <span className="gradient-text">BLOG</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Insights, strategies, and expert advice to help you navigate the Colorado real estate and tech landscape.
            </p>
          </div>

          {/* Featured Clients Carousel */}
          {clients.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-heading mb-8 text-center">
                OUR <span className="gradient-text">CLIENTS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {clients.map((client) => (
                  <div key={client.id} className="cyber-card p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col items-center">
                      {client.logo ? (
                        <a href={client.website} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={200}
                            height={100}
                            className="object-contain mb-4"
                          />
                        </a>
                      ) : (
                        <div className="w-[200px] h-[100px] bg-primary/10 flex items-center justify-center mb-4 rounded">
                          <span className="text-primary font-bold text-xl">{client.name}</span>
                        </div>
                      )}
                      <h3 className="text-xl font-heading mb-2">{client.name}</h3>
                      <p className="text-white/70 text-sm mb-4 text-center">{client.description}</p>
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:text-white transition-colors duration-300"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "All" ? "bg-primary text-black" : "bg-white/10 text-white hover:bg-white/20"}`}
                onClick={() => setActiveCategory("All")}
              >
                All Categories
              </button>
              {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-primary text-black" : "bg-white/10 text-white hover:bg-white/20"}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Posts - First Row (2 larger posts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {blogPosts
              .filter((post) => activeCategory === "All" || post.category === activeCategory)
              .slice(0, 2)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary text-xs">{post.date}</span>
                      <div className="flex items-center text-white/50 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <p className="text-primary font-medium">{post.author}</p>
                        <p className="text-white/50 text-xs">{post.authorRole}</p>
                      </div>
                      <Link href={`/blog/${post.id}`} className="neon-button text-xs py-2 px-4 hoverable">
                        <span>Read Article</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Remaining Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts
              .filter((post) => activeCategory === "All" || post.category === activeCategory)
              .slice(2, 10)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    <div className="absolute top-3 right-3">
                      <span className="text-xs px-2 py-0.5 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-[10px]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary text-xs">{post.date}</span>
                      <div className="flex items-center text-white/50 text-[10px]">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-xs mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary text-xs hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        Read More
                        <motion.span
                          className="ml-1"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Client Experts Section */}
          {clients.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20 mb-16 glass-card p-8"
            >
              <h2 className="text-2xl font-heading mb-6 text-center">
                CLIENT <span className="gradient-text">SPOTLIGHT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clients.map((client) => (
                  <div key={client.id} className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {client.logo ? (
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.expertName || client.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      ) : (
                        <span className="text-primary text-2xl font-bold">
                          {client.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading mb-2">{client.expertName || client.name}</h3>
                    <p className="text-primary mb-1">{client.name}</p>
                    {client.expertQuote && <p className="text-white/70 text-sm mb-4 italic">"{client.expertQuote}"</p>}
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors duration-300 text-sm"
                    >
                      Contact for advice →
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 cyber-card p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading mb-4">
              STAY <span className="gradient-text">INFORMED</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest insights on Colorado real estate, tech innovation, and market
              trends.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-primary/20 text-white px-4 py-2 rounded-md focus:outline-none focus:border-primary transition-colors duration-300 flex-1"
              />
              <button className="neon-button hoverable">
                <span>Subscribe</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
