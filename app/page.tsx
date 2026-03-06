"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Try to preserve previously chosen language from localStorage
    let locale = "en"
    try {
      const stored = localStorage.getItem("resume-locale")
      if (stored === "pt" || stored === "en") locale = stored
    } catch {
      // ignore
    }
    router.replace(`/${locale}`)
  }, [router])

  return null
}
