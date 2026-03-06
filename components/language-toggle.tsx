"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/data/ui-translations"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  // Derive active locale from the URL path
  const locale: Locale = pathname.startsWith("/pt") ? "pt" : "en"

  const handleSwitch = (newLocale: Locale) => {
    // Preserve the sub-path (e.g. /en/projects → /pt/projects)
    const newPath = pathname.replace(/^\/(en|pt)/, `/${newLocale}`)
    router.push(newPath === pathname ? `/${newLocale}` : newPath)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border bg-muted/50 p-0.5 no-print">
      <Button
        variant={locale === "en" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2.5 text-xs font-medium"
        onClick={() => handleSwitch("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </Button>
      <Button
        variant={locale === "pt" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2.5 text-xs font-medium"
        onClick={() => handleSwitch("pt")}
        aria-pressed={locale === "pt"}
      >
        PT
      </Button>
    </div>
  )
}
