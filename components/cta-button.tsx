"use client"

import { cn } from "@/lib/utils"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function CTAButton({ children, className, href = "#oferta" }: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Kit Grafismo Fonetico",
        value: 47.9,
        currency: "BRL",
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "cta-button inline-flex items-center justify-center",
        "w-full min-h-[56px] px-8 py-4",
        "bg-[#F5A623] text-[#FFFFFF] font-sans font-bold text-lg",
        "rounded-full shadow-lg",
        "hover:bg-[#e6951a] hover:shadow-xl",
        "transition-all duration-300",
        "animate-pulse-cta",
        "text-center leading-tight",
        className
      )}
    >
      {children}
    </a>
  )
}
