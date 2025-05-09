"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { name: "Project Alpha", image: "/project-alpha.jpg", category: "Branding" },
  { name: "Tech Innovate", image: "/tech-innovate.jpg", category: "Web Development" },
  { name: "Growth Spark", image: "/growth-spark.jpg", category: "Marketing" },
  { name: "Capital Boost", image: "/capital-boost.jpg", category: "Funding" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#9747ff] to-white"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[#9747ff]/20 transition-shadow duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-[#9747ff]">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
