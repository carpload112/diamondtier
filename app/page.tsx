import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedServices from "@/components/FeaturedServices"
import ShowcaseSection from "@/components/ShowcaseSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import ContactWidget from "@/components/ContactWidget"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <ShowcaseSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
      <ContactWidget />
    </main>
  )
}
