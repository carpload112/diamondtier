"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Download, RefreshCw, Search } from "lucide-react"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Subscriber {
  id: number
  email: string
  name: string
  source: string
  subscribed_at: string
  status: "active" | "unsubscribed"
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)

  const fetchSubscribers = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("subscribed_at", { ascending: false })

      if (error) throw error

      setSubscribers(data || [])
    } catch (err) {
      console.error("Error fetching subscribers:", err)
      setError("Failed to load subscribers. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const handleExportCSV = () => {
    // Filter subscribers if search is active
    const dataToExport = searchTerm
      ? subscribers.filter(
          (sub) =>
            sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (sub.name && sub.name.toLowerCase().includes(searchTerm.toLowerCase())),
        )
      : subscribers

    // Create CSV content
    const headers = ["Email", "Name", "Source", "Subscribed At", "Status"]
    const csvContent = [
      headers.join(","),
      ...dataToExport.map((sub) =>
        [
          `"${sub.email}"`,
          `"${sub.name || ""}"`,
          `"${sub.source || ""}"`,
          `"${new Date(sub.subscribed_at).toLocaleString()}"`,
          `"${sub.status}"`,
        ].join(","),
      ),
    ].join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `subscribers_${new Date().toISOString().split("T")[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const filteredSubscribers = searchTerm
    ? subscribers.filter(
        (sub) =>
          sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (sub.name && sub.name.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    : subscribers

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              EMAIL <span className="gradient-text">SUBSCRIBERS</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Manage your newsletter subscribers and export your email list.
            </p>
          </div>

          <div className="cyber-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div className="relative w-full md:w-auto flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search by email or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-primary/20 text-white rounded-md focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={fetchSubscribers}
                  className="flex items-center justify-center px-4 py-2 bg-white/5 border border-primary/20 text-white rounded-md hover:bg-primary/10 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </button>
                <button
                  onClick={handleExportCSV}
                  className="flex items-center justify-center px-4 py-2 bg-primary/20 border border-primary text-primary rounded-md hover:bg-primary/30 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-md mb-6">{error}</div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Source</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Date</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-white/50">
                        <div className="flex justify-center items-center">
                          <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                          Loading subscribers...
                        </div>
                      </td>
                    </tr>
                  ) : filteredSubscribers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-white/50">
                        {searchTerm ? "No subscribers match your search." : "No subscribers found."}
                      </td>
                    </tr>
                  ) : (
                    filteredSubscribers.map((subscriber, index) => (
                      <motion.tr
                        key={subscriber.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-white/10 hover:bg-white/5"
                      >
                        <td className="py-3 px-4 text-white">{subscriber.email}</td>
                        <td className="py-3 px-4 text-white/70">{subscriber.name || "-"}</td>
                        <td className="py-3 px-4 text-white/70">{subscriber.source || "website"}</td>
                        <td className="py-3 px-4 text-white/70">
                          {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              subscriber.status === "active"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-red-500/20 text-red-500"
                            }`}
                          >
                            {subscriber.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center text-white/50 text-sm">
              Total subscribers: {filteredSubscribers.length}
              {searchTerm &&
                subscribers.length !== filteredSubscribers.length &&
                ` (filtered from ${subscribers.length})`}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
