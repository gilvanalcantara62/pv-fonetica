"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function FacebookPixelEvents() {
  useEffect(() => {
    // ViewContent event on load
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Kit Grafismo Fonetico",
        content_category: "Educacao Infantil",
        value: 47.9,
        currency: "BRL",
      })
    }
  }, [])

  return null
}
