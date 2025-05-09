import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import emailjs from "@emailjs/browser"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const { email, source = "website", name = "" } = await request.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Store in Supabase database
    const { data, error } = await supabase
      .from("subscribers")
      .upsert(
        {
          email,
          source,
          name,
          subscribed_at: new Date().toISOString(),
          status: "active",
        },
        { onConflict: "email", ignoreDuplicates: false },
      )
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 })
    }

    // Send confirmation email via EmailJS
    try {
      await emailjs.send(
        "service_ytsfmye", // Your EmailJS service ID
        "template_6pseikw", // Your EmailJS template ID
        {
          from_name: name || "Subscriber",
          from_email: email,
          message_type: "Newsletter Subscription",
          message: `New subscription from ${source}`,
          submission_time: new Date().toLocaleString(),
        },
        "m48gXc9XiqzgFu9r4", // Your EmailJS public key
      )
    } catch (emailError) {
      console.error("EmailJS error:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
    })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
