"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null as string | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ ...formStatus, submitting: true })

    try {
      // EmailJS credentials
      const serviceId = "service_ytsfmye"
      const templateId = "template_6pseikw"
      const publicKey = "m48gXc9XiqzgFu9r4"

      // Format the current date and time
      const now = new Date()
      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })

      // Send the email
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone || "Not provided",
          message: formData.message,
          message_type: "Contact Form Submission",
          submission_time: formattedDate,
        },
        publicKey,
      )

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Reset success status after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }))
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again or contact us directly.",
      })
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={formStatus.submitting}
            className="neon-button w-full flex justify-center items-center hoverable"
          >
            {formStatus.submitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {formStatus.success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/10 border border-primary text-primary p-4 rounded-md flex items-center"
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Your message has been sent successfully. We'll get back to you soon!</span>
          </motion.div>
        )}

        {formStatus.error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-md flex items-center"
          >
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{formStatus.error}</span>
          </motion.div>
        )}
      </form>
    </div>
  )
}
