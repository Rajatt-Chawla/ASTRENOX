"use client"

import { useEffect, useState } from "react"

export default function NoupeWidget() {
  const [showTestButton, setShowTestButton] = useState(false)

  useEffect(() => {
    // Noupe widget is currently disabled
    setShowTestButton(true)
    console.log("ℹ️ Noupe widget is currently disabled")
  }, [])

  return (
    <>
      {/* Contact button when widget is disabled */}
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