"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

export function ExperienceSection() {
  const { resumeData, t } = useLanguage()
  return (
    <section className="py-16 bg-secondary/20 print:bg-none print:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{t.professionalExperience}</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border timeline print:bg-gray-300" />

            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20 print-break-avoid print:pl-4"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-6px] md:left-[26px] top-6 w-3 h-3 rounded-full bg-primary border-4 border-background print:border-white" />

                  <Card className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <CardTitle className="text-xl md:text-2xl mb-1">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-base font-semibold text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                          {exp.duration && (
                            <span className="text-xs">({exp.duration})</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => {
                          // Check if the responsibility contains a URL
                          const urlMatch = resp.match(/\(https?:\/\/[^)]+\)/);
                          if (urlMatch) {
                            const url = urlMatch[0].slice(1, -1); // Remove parentheses
                            const textWithoutUrl = resp.replace(urlMatch[0], '').trim();
                            return (
                              <li
                                key={respIndex}
                                className="flex gap-2 text-sm md:text-base"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span className="flex-1">
                                  {textWithoutUrl}{' '}
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                  >
                                    {url}
                                  </a>
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li
                              key={respIndex}
                              className="flex gap-2 text-sm md:text-base"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span className="flex-1">{resp}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
