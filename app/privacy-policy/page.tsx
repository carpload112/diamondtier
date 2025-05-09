"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading mb-8">
              PRIVACY <span className="gradient-text">POLICY</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p>Last Updated: March 15, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                Diamond Tier Agency ("we," "our," or "us") respects your privacy and is committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>

              <h3>2.1 Personal Data</h3>
              <p>When you interact with our website or services, we may collect personal information such as:</p>
              <ul>
                <li>Name, email address, phone number, and other contact details</li>
                <li>Business information if you represent a company</li>
                <li>Information you provide when filling out forms or surveys</li>
                <li>Records of communications with us</li>
              </ul>

              <h3>2.2 Usage Data</h3>
              <p>We may automatically collect certain information when you visit our website, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages you view and links you click</li>
                <li>Time spent on pages and other usage statistics</li>
                <li>Referring website or application</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to comments, questions, and requests</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience on our website</li>
              </ul>

              <h2>4. Sharing Your Information</h2>
              <p>We may share your information with third parties in certain circumstances, including:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the internet or electronic
                storage is 100% secure.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: info@diamondtier.solutions
                <br />
                Phone: (305) 922-3379
                <br />
                Address: 1501 Biscayne Blvd Suite 501, Miami, FL 33132
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
