"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, Code, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"

// Count individual technologies from technical expertise strings
function countTechnologies(technicalExpertise: string[]) {
  let count = 0
  technicalExpertise.forEach(item => {
    const technologies = item.split(':')[1]?.split(',').map(t => t.trim()).filter(t => t.length > 0) || []
    count += technologies.length
  })
  return count
}

export function HeroSection() {
  const router = useRouter()
  const { resumeData, t } = useLanguage()

  const stats = [
    { icon: Briefcase, value: "19+", labelKey: "yearsExperience" as const, color: "text-primary" },
    { icon: Code, value: `${countTechnologies(resumeData.technicalExpertise)}+`, labelKey: "technologies" as const, color: "text-primary" },
    { icon: Award, value: `${resumeData.patents.length}+`, labelKey: "patentsAndInnovations" as const, color: "text-primary" },
    { icon: Users, value: "40+", labelKey: "projectsDelivered" as const, color: "text-primary" },
  ]

  const handleStatClick = (labelKey: string) => {
    if (labelKey === "technologies") {
      const element = document.getElementById("technologies")
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (labelKey === "patentsAndInnovations") {
      const element = document.getElementById("patents")
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (labelKey === "projectsDelivered") {
      router.push("/projects")
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 print:bg-none print:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Content */}
          <div className="mb-12 text-center print:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70 print:text-foreground print:bg-none"
            >
              {t.professionalSummary}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
            >
              {resumeData.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto"
            >
              {resumeData.summary}
            </motion.p>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 print:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const isClickable = stat.labelKey === "technologies" || stat.labelKey === "patentsAndInnovations" || stat.labelKey === "projectsDelivered"
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all print:shadow-none ${
                    isClickable ? "cursor-pointer hover:scale-105 hover:border-primary" : ""
                  }`}
                  onClick={() => isClickable && handleStatClick(stat.labelKey)}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{t[stat.labelKey]}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
