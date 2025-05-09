import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { GlowingOrb, GridBackground } from "@/components/GeometricElements"

const teamMembers = [
  {
    name: "Andy Mijangos",
    role: "CEO and Founder",
    description: "Leading innovation in digital marketing and SaaS development",
    linkedin: "https://www.linkedin.com/in/andymijangos/",
  },
  {
    name: "Hysen Braholli",
    role: "Co-Founder, Managing Partner",
    description: "Driving business development and strategic partnerships",
    linkedin: "https://www.linkedin.com/in/hysenbraholli/",
  },
  {
    name: "Juan Marin",
    role: "Business Consultant",
    description: "Providing scalable solutions for business growth",
    linkedin: "https://www.linkedin.com/in/juan-marin/",
  },
  {
    name: "Cameron Washington",
    role: "Marketing Advisor",
    description: "Strategic marketing expert with proven industry experience",
    linkedin: "https://www.linkedin.com/in/cameron-washington/",
  },
  {
    name: "Allen Metayer",
    role: "Creative Director & Marketing Specialist",
    description: "Innovative digital marketing strategies and creative direction",
    linkedin: "https://www.linkedin.com/in/allen-metayer/",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E1250] to-[#0A1F3D]">
      <Navbar />
      <GridBackground />
      <GlowingOrb className="absolute top-1/4 left-1/4 opacity-30" />
      <GlowingOrb className="absolute bottom-1/4 right-1/4 opacity-30" />

      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-[#00E5FF]">Meet Our Team</h1>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-white text-lg">
              Our diverse team of experts brings together years of experience in digital marketing, technology, and
              business development to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 text-center group hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-[#2E1250] flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#00E5FF]">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-[#00E5FF] mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
