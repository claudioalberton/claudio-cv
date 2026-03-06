"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { PatentsSection } from "@/components/patents-section"
import { PDFExportButton } from "@/components/pdf-export-button"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import type { Locale } from "@/data/ui-translations"

export function LocalePageClient({ locale }: { locale: Locale }) {
    const contentRef = useRef<HTMLDivElement>(null)

    return (
        <LanguageProvider initialLocale={locale}>
            <main className="min-h-screen flex flex-col lg:flex-row print:flex-row">
                <div ref={contentRef} className="flex flex-col lg:flex-row w-full">
                    <Sidebar />
                    <div className="flex-1">
                        <HeroSection />
                        <AchievementsSection />
                        <ExperienceSection />
                        <EducationSection />
                        <SkillsSection />
                        <PatentsSection />
                        <Footer />
                    </div>
                </div>
                <PDFExportButton contentRef={contentRef} />
            </main>
        </LanguageProvider>
    )
}
