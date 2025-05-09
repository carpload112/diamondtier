"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TermsPage() {
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
              TERMS & <span className="gradient-text">CONDITIONS</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p>Last Updated: March 15, 2025</p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the Diamond Tier Agency website and services, you agree to be bound by these Terms
                and Conditions. If you do not agree to these Terms, you should not access or use our services.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                Diamond Tier Agency provides digital innovation, design, development, and marketing services as
                described on our website. We reserve the right to modify, suspend, or discontinue any part of our
                services at any time without notice.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account information</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not engage in any activity that could harm our systems or interfere with other users</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our website, including but not limited to text, graphics,
                logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of
                Diamond Tier Agency or its licensors and are protected by copyright, trademark, and other intellectual
                property laws.
              </p>

              <h2>5. User Content</h2>
              <p>
                You retain ownership of any content you submit to us. By providing content to us, you grant us a
                worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and
                distribute your content in any existing or future media.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Diamond Tier Agency shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services
                </li>
              </ul>

              <h2>7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Diamond Tier Agency and its officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including
                without limitation reasonable attorney's fees and costs, arising out of or in any way connected with
                your access to or use of our services or your violation of these Terms.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                without regard to its conflict of law provisions. Any legal action or proceeding arising out of or
                relating to these Terms shall be brought exclusively in the federal or state courts located in
                Miami-Dade County, Florida.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of
                our services after such modifications will constitute your acknowledgment of the modified Terms and
                agreement to abide by them.
              </p>

              <h2>10. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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
