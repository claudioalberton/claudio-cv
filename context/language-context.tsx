"use client"

import React, { createContext, useContext, useState, useCallback, useMemo } from "react"
import type { ResumeData } from "@/data/resume-data"
import { resumeData as resumeDataEn } from "@/data/resume-data"
import { resumeDataPt } from "@/data/resume-data-pt"
import { uiTranslations, type Locale } from "@/data/ui-translations"

type TranslationStrings = Record<keyof typeof uiTranslations.en, string>

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  resumeData: ResumeData
  t: TranslationStrings
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const resumeByLocale: Record<Locale, ResumeData> = {
  en: resumeDataEn,
  pt: resumeDataPt,
}

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
  }, [])

  // Keep lang attribute in sync
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
    }
  }, [locale])

  // Sync if initialLocale changes (e.g. navigating between /en and /pt)
  React.useEffect(() => {
    setLocaleState(initialLocale)
  }, [initialLocale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      resumeData: resumeByLocale[locale],
      t: uiTranslations[locale],
    }),
    [locale, setLocale]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
