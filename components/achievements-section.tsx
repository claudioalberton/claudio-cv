"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export function AchievementsSection() {
  const { resumeData, t } = useLanguage()
  return (
    <section className="py-16 print:py-8 print-break-avoid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{t.keyAchievements}</h2>
          </div>

          <div className="grid gap-4">
            {resumeData.keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="text-foreground">{achievement}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
