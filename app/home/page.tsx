import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import SweatEquity from "@/components/SweatEquity"
import Portfolio from "@/components/Portfolio"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Team from "@/components/Team"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606] text-[#ffffff]">
      <Hero />
      <ServicesOverview />
      <SweatEquity />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  )
}
