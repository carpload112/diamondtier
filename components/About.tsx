"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#060606]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Image
              src="/about-image.jpg"
              alt="About Diamond Tier Agency"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9747ff] to-white">
              Why Choose Diamond Tier?
            </h2>
            <p className="text-gray-300 mb-6">
              At Diamond Tier Agency, we blend creativity with technology to deliver exceptional results. Our team of
              experts is dedicated to elevating your brand and driving growth through innovative strategies and
              cutting-edge solutions.
            </p>
            <ul className="space-y-4">
              {[
                "Tailored strategies for your unique needs",
                "Proven track record of success",
                "Cutting-edge technology and tools",
                "Dedicated team of industry experts",
                "Holistic approach to brand growth",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-[#9747ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
