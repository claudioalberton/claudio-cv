"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border bg-muted/50 p-0.5 no-print">
      <Button
        variant={locale === "en" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2.5 text-xs font-medium"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </Button>
      <Button
        variant={locale === "pt" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 px-2.5 text-xs font-medium"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
      >
        PT
      </Button>
    </div>
  )
}
