"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { EMAILJS_CONFIG, formatSubmissionDate } from "@/utils/emailjs"

interface InnovationFormProps {
  className?: string
}

export default function InnovationForm({ className = "" }: InnovationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [status, setStatus] = useState<{
    submitted: boolean
    submitting: boolean
    success: boolean
    error: string | null
  }>({
    submitted: false,
    submitting: false,
    success: false,
    error: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ ...status, submitting: true })

    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Not provided",
        company: formData.company,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        message_type: "Innovation Form Submission",
        submission_time: formatSubmissionDate(),
      }

      // Send the email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.innovationTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      })

      setStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null,
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          success: false,
          error: null,
        })
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus({
        ...status,
        submitting: false,
        error: "Something went wrong. Please try again later.",
      })
    }
  }

  return (
    <div className={`cyber-card p-8 md:p-12 ${className}`}>
      {status.success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-heading mb-4 text-white">Submission Received!</h3>
          <p className="text-white/70 mb-6">
            Thank you for sharing your innovative idea. We'll review it and get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2 text-sm">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2 text-sm">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-white mb-2 text-sm">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-white mb-2 text-sm">
              Project Type
            </label>
            <input
              type="text"
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-white mb-2 text-sm">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $50,000"
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-white mb-2 text-sm">
              Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g., 3 months"
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
              aria-required="true"
            ></textarea>
          </div>

          {status.error && (
            <div className="flex items-center text-red-500 bg-red-500/10 p-3 rounded-md">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p className="text-sm">{status.error}</p>
            </div>
          )}

          <div className="text-center pt-4">
            <button type="submit" disabled={status.submitting} className="neon-button hoverable">
              <span className="flex items-center">
                {status.submitting ? "Submitting..." : "Submit Idea"}
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
