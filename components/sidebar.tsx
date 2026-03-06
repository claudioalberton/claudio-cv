"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Linkedin, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

interface LanguageProgressProps {
  label: string
  percentage: number
  index: number
}

function LanguageProgress({ label, percentage, index }: LanguageProgressProps) {
  const gradientId = `gradient-${index}`
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/90">{label}</span>
        <span className="text-sm font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="relative w-24 h-24 mx-auto">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-secondary"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="42"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 42}`}
            strokeLinecap="round"
            initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - percentage / 100) }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

function getLanguagePercentage(level: string): number {
  const levelMap: Record<string, number> = {
    Native: 100,
    "Full Professional": 90,
    "Professional Working": 70,
    "Elementary": 50,
    "Basic": 15,
    // Portuguese
    Nativo: 100,
    "Profissional Completo": 90,
    Profissional: 70,
    Elementar: 50,
    Básico: 15,
  }
  return levelMap[level] || 75
}

export function Sidebar() {
  const { resumeData, t } = useLanguage()
  const languages = resumeData.languages
  const [imageError, setImageError] = useState(false)

  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-card border-r border-border print:w-full print:border-0 print:bg-transparent">
      <div className="sticky top-0 h-screen overflow-y-auto print:static print:h-auto">
        <div className="p-6 lg:p-8 space-y-8 print:p-4">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 bg-gradient-to-br from-primary/20 to-primary/10">
              {!imageError ? (
                <Image
                  src="/claudio-cv/images/profile-photo.jpg"
                  alt={resumeData.name}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-primary/60">
                  <div className="text-center">
                    <div className="text-5xl mb-2">👤</div>
                    <div className="text-xs font-medium">{t.addYourPhoto}</div>
                    <div className="text-xs text-muted-foreground mt-1">public/images/profile-photo.jpg</div>
                  </div>
                </div>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
              {resumeData.name}
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground text-center mb-6">
              {resumeData.title}
            </p>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm print:flex-col print:items-start print:gap-1">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 print:hidden" />
                <span className="text-muted-foreground print:text-white">{resumeData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm print:flex-col print:items-start print:gap-1">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 print:hidden" />
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all print:text-white print:no-underline"
                >
                  {resumeData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm print:flex-col print:items-start print:gap-1">
                <Linkedin className="h-4 w-4 text-primary flex-shrink-0 print:hidden" />
                <a
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors print:text-white print:no-underline"
                >
                  {resumeData.linkedin}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Education - Print only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden print:block"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.education.toUpperCase()}</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => {
                const periods = edu.period.split(' - ');
                return (
                  <div key={index} className="mb-3">
                    <p className="font-bold text-sm mb-1">{periods[0]}{periods[1] ? ' - ' + periods[1] : ''}</p>
                    <p className="font-bold text-sm mb-1">{edu.institution.toUpperCase()}</p>
                    <ul className="list-disc pl-4 text-xs space-y-0.5">
                      <li>{edu.degree}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.languages}</h3>
            <div className="grid grid-cols-2 gap-4 print:hidden">
              {languages.map((language, index) => (
                <LanguageProgress
                  key={index}
                  index={index}
                  label={language.name}
                  percentage={getLanguagePercentage(language.level)}
                />
              ))}
            </div>
            <ul className="hidden print:block space-y-1">
              {languages.map((language, index) => (
                <li key={index} className="text-sm">
                  {language.name} ({language.level})
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.coreCompetencies.toUpperCase()}</h3>
            <ul className="hidden print:block space-y-1">
              {resumeData.coreCompetencies.map((competency, index) => (
                <li key={index} className="text-sm">
                  {competency}
                </li>
              ))}
            </ul>
            <div className="space-y-2 print:hidden">
              {resumeData.coreCompetencies.map((competency, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="print:hidden"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.technicalExpertise.toUpperCase()}</h3>
            <div className="space-y-2">
              {resumeData.technicalExpertise.map((expertise, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{expertise}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Expertise - Print Version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden print:block"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t.technicalExpertise.toUpperCase()}</h3>
            <ul className="space-y-1">
              {resumeData.technicalExpertise.map((expertise, index) => (
                <li key={index} className="text-sm">
                  {expertise}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </aside>
  )
}

