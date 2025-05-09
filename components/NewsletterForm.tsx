"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { EMAILJS_CONFIG, formatSubmissionDate } from "@/utils/emailjs"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

interface NewsletterFormProps {
  className?: string
  source?: string
}

export default function NewsletterForm({ className = "", source = "website" }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{
    submitting: boolean
    success: boolean
    error: string | null
  }>({
    submitting: false,
    success: false,
    error: null,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ ...status, submitting: true })

    try {
      // First, save to database via API route
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      // Then send confirmation email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.newsletterTemplateId,
        {
          from_email: email,
          message_type: "Newsletter Subscription",
          submission_time: formatSubmissionDate(),
        },
        EMAILJS_CONFIG.publicKey,
      )

      setEmail("")
      setStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: false,
          error: null,
        })
      }, 3000)
    } catch (error) {
      console.error("Error subscribing:", error)
      setStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <div className={`cyber-card p-6 md:p-8 ${className}`}>
      {status.success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6"
        >
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white">Subscribed!</h3>
          <p className="text-white/70">Thank you for subscribing to our newsletter.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newsletter-email" className="block text-white mb-2 text-sm">
              Subscribe to Our Newsletter
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            />
          </div>

          {status.error && (
            <div className="flex items-center text-red-500 bg-red-500/10 p-3 rounded-md">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p className="text-sm">{status.error}</p>
            </div>
          )}

          <div className="text-center">
            <button type="submit" disabled={status.submitting} className="neon-button hoverable">
              <span className="flex items-center">
                {status.submitting ? "Subscribing..." : "Subscribe"}
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
