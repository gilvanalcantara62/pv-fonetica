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
    let timeoutId: NodeJS.Timeout;

    const trackViewContent = () => {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "ViewContent", {
          content_name: "Kit Grafismo Fonetico",
          content_category: "Educacao Infantil",
          value: 47.9,
          currency: "BRL",
        })
      } else {
        timeoutId = setTimeout(trackViewContent, 500)
      }
    }

    trackViewContent();

    return () => clearTimeout(timeoutId);
  }, [])

  return null
}
