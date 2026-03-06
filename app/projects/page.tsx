"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Redirect old /projects to /en/projects for backward compatibility
export default function ProjectsRedirect() {
  const router = useRouter()

  useEffect(() => {
    let locale = "en"
    try {
      const stored = localStorage.getItem("resume-locale")
      if (stored === "pt" || stored === "en") locale = stored
    } catch {
      // ignore
    }
    router.replace(`/${locale}/projects`)
  }, [router])

  return null
}
