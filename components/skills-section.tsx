"use client"

import { motion } from "framer-motion"
import { Code2, Target } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function SkillsSection() {
  const { resumeData, t } = useLanguage()
  return (
    <section id="technologies" className="py-16 bg-secondary/20 print:bg-none print:py-8 print-break-avoid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Core Competencies */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">{t.coreCompetencies}</h2>
            </div>
            <div className="space-y-3">
              {resumeData.coreCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base md:text-lg text-foreground">{competency}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Expertise */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">{t.technicalExpertise}</h2>
            </div>
            <div className="space-y-3">
              {resumeData.technicalExpertise.map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base md:text-lg text-foreground">{expertise}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
