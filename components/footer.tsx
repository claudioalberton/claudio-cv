"use client"

import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { resumeData, t } = useLanguage()
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t no-print">
      <div className="container mx-auto px-4">
        <p>{t.builtWith}</p>
        <p className="mt-2">{resumeData.name} - 2026</p>
      </div>
    </footer>
  )
}
