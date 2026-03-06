"use client"

import React, { createContext, useContext, useState, useCallback, useMemo } from "react"
import type { ResumeData } from "@/data/resume-data"
import { resumeData as resumeDataEn } from "@/data/resume-data"
import { resumeDataPt } from "@/data/resume-data-pt"
import { uiTranslations, type Locale } from "@/data/ui-translations"

const STORAGE_KEY = "resume-locale"

type TranslationStrings = Record<keyof typeof uiTranslations.en, string>

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  resumeData: ResumeData
  t: TranslationStrings
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en"
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === "en" || stored === "pt") return stored
  } catch {
    // ignore
  }
  return "en"
}

const resumeByLocale: Record<Locale, ResumeData> = {
  en: resumeDataEn,
  pt: resumeDataPt,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch {
      // ignore
    }
  }, [])

  React.useEffect(() => {
    setLocaleState(getInitialLocale())
  }, [])

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
    }
  }, [locale])

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
