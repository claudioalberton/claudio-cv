"use client"

import { useEffect } from "react"
import type { Locale } from "@/data/ui-translations"

// Persist the locale choice so the root / redirect can remember it
export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    useEffect(() => {
        try {
            localStorage.setItem("resume-locale", params.locale)
        } catch {
            // ignore
        }
    }, [params.locale])

    return <>{children}</>
}
