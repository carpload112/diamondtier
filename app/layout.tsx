import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Space_Grotesk, Syncopate } from "next/font/google"
import NoiseOverlay from "@/components/NoiseOverlay"
import CustomCursor from "@/components/CustomCursor"
import Script from "next/script"

// Define fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Diamond Tier Agency | Digital Innovation Studio",
    template: "%s | Diamond Tier Agency",
  },
  description:
    "We craft digital experiences that transform brands. Specializing in cutting-edge web development, immersive design, and strategic marketing solutions.",
  keywords: [
    "Digital Innovation",
    "Web Development",
    "Brand Strategy",
    "Miami Design Agency",
    "Technology Solutions",
    "Creative Studio",
  ],
  authors: [{ name: "Diamond Tier Agency" }],
  creator: "Diamond Tier Agency",
  publisher: "Diamond Tier Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.diamondtieragency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diamond Tier Agency | Digital Innovation Studio",
    description:
      "We craft digital experiences that transform brands. Specializing in cutting-edge web development, immersive design, and strategic marketing solutions.",
    url: "https://www.diamondtieragency.com",
    siteName: "Diamond Tier Agency",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png",
        width: 1024,
        height: 768,
        alt: "Diamond Tier Agency Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Tier Agency | Digital Innovation Studio",
    description:
      "We craft digital experiences that transform brands. Specializing in cutting-edge web development, immersive design, and strategic marketing solutions.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png",
    ],
    creator: "@diamondtieragency",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${syncopate.variable}`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="bg-background text-foreground">
        <NoiseOverlay />
        {children}
        <CustomCursor />

        {/* Structured data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Diamond Tier Agency",
              url: "https://www.diamondtieragency.com",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png",
              description:
                "Digital Innovation Studio specializing in web development, design, and marketing solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1501 Biscayne Blvd Suite 501",
                addressLocality: "Miami",
                addressRegion: "FL",
                postalCode: "33132",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+13059223379",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/diamond-tier-agency",
                "https://twitter.com/diamondtieragency",
                "https://www.instagram.com/diamondtieragency",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
