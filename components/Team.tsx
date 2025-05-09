"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Andy Mijangos",
    position: "CEO and Founder",
    description: "SaaS Innovator | Digital Marketing Expert",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2010.37.29%E2%80%AFPM-TK8YO9fSRHkrxWWwgH446cznx8VCzc.png",
    linkedin: "https://www.linkedin.com/in/andymijangos/",
  },
  {
    name: "Hysen Braholli",
    position: "Co-Founder, Managing Partner",
    description: "Business Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2010.37.29%E2%80%AFPM-TK8YO9fSRHkrxWWwgH446cznx8VCzc.png",
    linkedin: "https://www.linkedin.com/in/hysenbraholli/",
  },
  {
    name: "Juan Marin",
    position: "Business Consultant",
    description: "Scalable Solutions Specialist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2010.37.29%E2%80%AFPM-TK8YO9fSRHkrxWWwgH446cznx8VCzc.png",
    linkedin: "https://www.linkedin.com/in/juan-marin/",
  },
  {
    name: "Cameron Washington",
    position: "Marketing Advisor",
    description: "Strategic Marketing Expert",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2010.37.29%E2%80%AFPM-TK8YO9fSRHkrxWWwgH446cznx8VCzc.png",
    linkedin: "https://www.linkedin.com/in/cameron-washington/",
  },
  {
    name: "Allen Metayer",
    position: "Creative Director & Marketing Specialist",
    description: "Digital Marketing Innovation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2010.37.29%E2%80%AFPM-TK8YO9fSRHkrxWWwgH446cznx8VCzc.png",
    linkedin: "https://www.linkedin.com/in/allen-metayer/",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#9747ff] to-white"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[#9747ff]/20 transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-[#9747ff] mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm mb-4">{member.description}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#00E5FF] hover:text-white transition-colors duration-300"
                >
                  <span className="mr-2">Connect on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
