"use client"

import { useEffect, useState } from "react"

export default function NoupeWidget() {
  const [showTestButton, setShowTestButton] = useState(false)
  const botId = process.env.NEXT_PUBLIC_NOUPE_BOT_ID

  useEffect(() => {
    // Show test button if Bot ID is not configured
    if (!botId || botId === "YOUR_BOT_ID") {
      setShowTestButton(true)
      console.warn("⚠️ Noupe Bot ID not configured. Set NEXT_PUBLIC_NOUPE_BOT_ID in .env.local")
      return
    }

    // Lazy load after first idle to avoid blocking LCP
    const onIdle = () => {
      if (document.getElementById("noupe-widget")) return
      
      console.log("🤖 Loading Noupe widget with Bot ID:", botId)
      
      const s = document.createElement("script")
      s.id = "noupe-widget"
      s.src = "https://cdn.noupe.ai/widget.js"
      s.defer = true
      s.setAttribute("data-noupe-bot-id", botId)
      s.setAttribute("data-theme", "dark")
      s.setAttribute("data-color", "#22d3ee")
      s.setAttribute("data-position", "bottom-right")
      s.setAttribute("data-label", "Chat with Astrenox")
      
      s.onload = () => {
        console.log("✅ Noupe widget loaded successfully")
      }
      
      s.onerror = () => {
        console.error("❌ Failed to load Noupe widget")
        setShowTestButton(true)
      }
      
      document.body.appendChild(s)
    }
    
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(onIdle)
    } else {
      setTimeout(onIdle, 800)
    }

    // Cleanup on unmount
    return () => {
      const script = document.getElementById("noupe-widget")
      if (script) {
        script.remove()
      }
    }
  }, [botId])

  return (
    <>
      {/* Test button when Bot ID is not configured */}
      {showTestButton && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 60 }}>
          <a 
            href="mailto:Prajwal@astrentech.com"
            style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px", 
              backgroundColor: "#22d3ee", 
              color: "#000", 
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 24px rgba(34, 211, 238, 0.2)",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2), 0 0 32px rgba(34, 211, 238, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 24px rgba(34, 211, 238, 0.2)"
            }}
          >
            💬 Chat with us
          </a>
        </div>
      )}

      <noscript>
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 60 }}>
          <a 
            href="mailto:Prajwal@astrentech.com" 
            style={{ 
              display: "inline-block", 
              padding: "12px 20px", 
              backgroundColor: "#22d3ee", 
              color: "#000", 
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px"
            }}
          >
            Contact us
          </a>
        </div>
      </noscript>
    </>
  )
}

