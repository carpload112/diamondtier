import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

// Define service data
const services = {
  "branding-identity": {
    title: "Branding & Identity",
    description:
      "We create memorable brand identities that resonate with your target audience and set you apart from competitors.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    longDescription:
      "Your brand is more than just a logo—it's the emotional connection you build with your audience. Our branding experts craft comprehensive identity systems that communicate your values and resonate with your target market. From logo design and color palettes to typography and voice guidelines, we create cohesive brand experiences that make lasting impressions.",
    benefits: [
      "Distinctive visual identity that sets you apart from competitors",
      "Consistent brand messaging across all touchpoints",
      "Comprehensive brand guidelines for long-term consistency",
      "Strategic positioning that resonates with your target audience",
      "Emotional connection with customers that builds loyalty",
    ],
    process: [
      "Discovery & Research: Understanding your business, audience, and competitors",
      "Strategy Development: Defining your brand positioning and messaging",
      "Creative Exploration: Developing visual concepts and design directions",
      "Refinement & Finalization: Perfecting your brand identity system",
      "Implementation: Deploying your brand across all channels",
    ],
    caseStudy: {
      title: "Washee",
      description:
        "We developed a complete brand identity for Washee, a luxury residential car wash service. The brand needed to convey premium quality while remaining approachable and trustworthy.",
      results: [
        "93% positive feedback on brand perception",
        "42% increase in customer acquisition",
        "Successful positioning in the luxury service market",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    },
  },
  "web-development": {
    title: "Web Development",
    description:
      "We build high-performance websites and web applications that deliver exceptional user experiences and drive business results.",
    image:
      "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
    longDescription:
      "In today's digital landscape, your website is often the first interaction customers have with your brand. Our web development team combines cutting-edge technology with strategic design to create websites that not only look stunning but also perform exceptionally well. From responsive designs to complex web applications, we deliver solutions that engage users and drive conversions.",
    benefits: [
      "Fast-loading, responsive websites that work on all devices",
      "Intuitive user experiences that guide visitors to conversion",
      "SEO-friendly architecture for better search visibility",
      "Scalable solutions that grow with your business",
      "Secure, reliable platforms built on modern technologies",
    ],
    process: [
      "Requirements Analysis: Understanding your business goals and technical needs",
      "UX/UI Design: Creating wireframes and visual designs",
      "Development: Building your website or application with clean, efficient code",
      "Testing & QA: Ensuring functionality across all devices and browsers",
      "Deployment & Maintenance: Launching and supporting your digital presence",
    ],
    caseStudy: {
      title: "Diamond Tier Capital",
      description:
        "We developed a comprehensive web platform for Diamond Tier Capital, a premium business funding solution provider. The site needed to convey trust, professionalism, and accessibility to potential clients.",
      results: [
        "68% increase in lead generation",
        "2.3x improvement in conversion rate",
        "35% reduction in bounce rate",
      ],
      image:
        "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
    },
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "We create intuitive, high-performance mobile applications that engage users and drive business growth.",
    image:
      "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
    longDescription:
      "Mobile applications offer unprecedented opportunities to connect with your audience. Our mobile development team specializes in creating native and cross-platform apps that deliver exceptional user experiences. From concept to launch, we handle every aspect of the development process, ensuring your app stands out in crowded marketplaces.",
    benefits: [
      "Intuitive user interfaces that minimize learning curves",
      "Cross-platform compatibility (iOS and Android)",
      "Optimized performance and battery efficiency",
      "Seamless integration with existing systems",
      "Ongoing support and feature enhancement",
    ],
    process: [
      "Concept Development: Defining your app's purpose and core features",
      "UX/UI Design: Creating user flows and visual designs",
      "Development: Building your app with clean, efficient code",
      "Testing: Ensuring functionality across devices and use cases",
      "Deployment & Marketing: Launching your app and driving downloads",
    ],
    caseStudy: {
      title: "Washee",
      description:
        "We developed a complete mobile platform for Washee that connects customers with premium car wash services. The app needed to handle scheduling, payments, and service tracking in a seamless user experience.",
      results: [
        "500+ users acquired in the first month",
        "4.8/5 average rating on app stores",
        "87% customer retention rate",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    },
  },
  "growth-strategies": {
    title: "Growth Strategies",
    description:
      "We implement data-driven strategies to help you thrive in an evolving marketplace and maximize your ROI.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    longDescription:
      "Sustainable growth requires more than just good products—it demands strategic thinking and execution. Our growth strategists analyze your business, market, and competition to develop comprehensive plans that drive measurable results. From customer acquisition to retention and expansion, we help you achieve your business objectives through proven methodologies.",
    benefits: [
      "Data-driven decision making that reduces risk",
      "Targeted customer acquisition strategies",
      "Improved conversion rates and customer lifetime value",
      "Optimized marketing spend and ROI",
      "Scalable systems that support sustainable growth",
    ],
    process: [
      "Audit & Analysis: Evaluating your current performance and opportunities",
      "Strategy Development: Creating a customized growth plan",
      "Implementation: Executing tactics across relevant channels",
      "Measurement: Tracking KPIs and performance metrics",
      "Optimization: Continuously refining strategies based on results",
    ],
    caseStudy: {
      title: "Cedar Home Loans",
      description:
        "We developed and implemented a comprehensive growth strategy for Cedar Home Loans, focusing on digital lead generation and conversion optimization.",
      results: [
        "43% increase in mortgage application rate",
        "62% improvement in lead quality",
        "28% reduction in customer acquisition cost",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    },
  },
  "enterprise-solutions": {
    title: "Enterprise Solutions",
    description:
      "We deliver robust, scalable, and secure systems tailored for large-scale operations and complex business needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    longDescription:
      "Enterprise organizations face unique challenges that require sophisticated solutions. Our enterprise team specializes in developing custom systems that address complex business requirements while maintaining security, scalability, and performance. From CRM implementations to custom ERP systems, we help large organizations streamline operations and drive efficiency.",
    benefits: [
      "Custom solutions tailored to your specific business processes",
      "Seamless integration with existing enterprise systems",
      "Robust security measures that protect sensitive data",
      "Scalable architecture that grows with your organization",
      "Comprehensive training and support for your team",
    ],
    process: [
      "Requirements Gathering: Understanding your enterprise needs and constraints",
      "Solution Architecture: Designing systems that meet your requirements",
      "Development: Building robust, secure, and scalable solutions",
      "Integration: Connecting with existing enterprise systems",
      "Deployment & Support: Implementing and maintaining your solution",
    ],
    caseStudy: {
      title: "Trucutz",
      description:
        "We developed an enterprise-level platform for Trucutz that manages appointments, payments, and barber relationships across multiple locations.",
      results: [
        "78% increase in bookings after platform launch",
        "65% reduction in administrative overhead",
        "Successful scaling to 25+ locations",
      ],
      image:
        "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
    },
  },
  "capital-raising": {
    title: "Capital Raising",
    description:
      "We assist in securing funding through pitch deck creation, investor networking, and ongoing stakeholder management.",
    image:
      "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1l1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
    longDescription:
      "Securing capital is often critical for business growth, but navigating the fundraising landscape can be challenging. Our capital raising experts help you prepare compelling investment materials, connect with the right investors, and manage the fundraising process from start to finish. We combine financial expertise with strategic storytelling to maximize your chances of success.",
    benefits: [
      "Professional pitch materials that resonate with investors",
      "Access to our network of angel investors and VCs",
      "Strategic guidance throughout the fundraising process",
      "Valuation and financial modeling support",
      "Ongoing investor relations management",
    ],
    process: [
      "Preparation: Developing your story, financials, and materials",
      "Targeting: Identifying the right investors for your business",
      "Outreach: Connecting you with potential investors",
      "Negotiation: Supporting you through term sheet discussions",
      "Closing: Helping you finalize the investment",
    ],
    caseStudy: {
      title: "Diamond Tier Capital",
      description:
        "We helped Diamond Tier Capital secure Series A funding by developing a compelling pitch deck, financial models, and investor outreach strategy.",
      results: [
        "Successfully raised $3.5M in Series A funding",
        "30+ investor meetings secured",
        "Closed funding round in 4 months",
      ],
      image:
        "https://sjc.microlink.io/NeJE2f1kQ6WQi4dG6IMrbFR1iObnSQPNGPlfropN8dSooVdtF3lfrdTx6aAlkHGLnlTnuaqmBjP7x9Dx657w.jpeg",
    },
  },
  "sweat-equity": {
    title: "Sweat Equity Partnerships",
    description: "We offer strategic collaboration and development support in exchange for equity in select projects.",
    image:
      "https://sjc.microlink.io/2SsEJb-uQppLPLyQ01dpNbp-pCpDc528JDwHkrAHcsV91maMXxjm4ySB7_NOZw7oXJjIOoQ3vpq8059gh4ciiA.jpeg",
    longDescription:
      "For select projects with high growth potential, we offer a unique partnership model where we invest our expertise, resources, and time in exchange for equity. This approach aligns our success with yours and demonstrates our long-term commitment to your business. Our sweat equity partnerships are ideal for startups and early-stage companies looking to accelerate growth without significant capital outlay.",
    benefits: [
      "Access to our full suite of services without upfront costs",
      "Long-term partnership with aligned incentives",
      "Strategic guidance from experienced entrepreneurs",
      "Reduced cash burn rate during critical growth phases",
      "Ongoing support as your business evolves",
    ],
    process: [
      "Evaluation: Assessing your business model and growth potential",
      "Proposal: Defining the scope of work and equity arrangement",
      "Agreement: Formalizing our partnership",
      "Execution: Delivering the agreed services and support",
      "Growth: Working together to build long-term value",
    ],
    caseStudy: {
      title: "Washee",
      description:
        "We entered a sweat equity partnership with Washee, providing full-service development, branding, and marketing in exchange for equity in the company.",
      results: [
        "Successful market launch within 6 months",
        "Achieved product-market fit with minimal cash investment",
        "Positioned for Series A funding with strong metrics",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.30%E2%80%AFPM-YbDY2JiTIlN22x8chDjY0EeXCQDuPj.png",
    },
  },
  "analytics-optimization": {
    title: "Analytics & Optimization",
    description:
      "We leverage data insights to drive rapid user acquisition, revenue growth, and measurable business impact.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    longDescription:
      "Data is the foundation of effective decision-making in today's business environment. Our analytics and optimization team helps you collect, analyze, and act on data to improve performance across your organization. From marketing campaigns to product features, we use data-driven methodologies to identify opportunities and implement improvements that drive measurable results.",
    benefits: [
      "Clear visibility into key performance metrics",
      "Identification of high-impact optimization opportunities",
      "Improved conversion rates and user engagement",
      "Data-driven decision making across your organization",
      "Continuous improvement culture and processes",
    ],
    process: [
      "Audit: Evaluating your current data collection and analysis",
      "Implementation: Setting up robust analytics infrastructure",
      "Analysis: Identifying patterns, opportunities, and issues",
      "Testing: Implementing and measuring improvements",
      "Reporting: Providing actionable insights and recommendations",
    ],
    caseStudy: {
      title: "Cedar Home Loans",
      description:
        "We implemented comprehensive analytics and optimization for Cedar Home Loans, focusing on their lead generation funnel and application process.",
      results: [
        "53% improvement in form completion rates",
        "42% reduction in cost per acquisition",
        "Identified and fixed conversion issues worth $250K annually",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%209.35.57%E2%80%AFPM-WcRt3CkeQSdIyF1Lt2F6g7irzMX3Lz.png",
    },
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center text-primary mb-8 text-sm hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="relative rounded-lg overflow-hidden mb-16 h-[40vh]">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-heading mb-4 max-w-2xl">{service.title}</h1>
                <p className="text-white/70 max-w-xl text-lg">{service.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading mb-6">Overview</h2>
              <p className="text-white/70 mb-8 leading-relaxed">{service.longDescription}</p>

              <h2 className="text-2xl font-heading mb-6">Our Process</h2>
              <div className="space-y-4 mb-12">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      {index + 1}
                    </div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-heading mb-6">Case Study: {service.caseStudy.title}</h2>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-48 md:h-64 rounded-md overflow-hidden">
                    <Image
                      src={service.caseStudy.image || "/placeholder.svg"}
                      alt={service.caseStudy.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white/80 mb-4">{service.caseStudy.description}</p>
                    <h3 className="text-lg font-medium mb-3 text-primary">Results:</h3>
                    <ul className="space-y-2">
                      {service.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-32">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-heading mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium mb-4">Ready to get started?</h3>
                  <a
                    href="https://calendly.com/diamondtiersolutions/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-wider text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-colors duration-300 w-full"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
