"use client"

import { motion } from "framer-motion"
import { ArrowLeft, FolderKanban } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LanguageProvider, useLanguage } from "@/context/language-context"
import { getProjects } from "@/data/projects-data"
import type { Locale } from "@/data/ui-translations"

export function LocaleProjectsClient({ locale }: { locale: Locale }) {
    return (
        <LanguageProvider initialLocale={locale}>
            <ProjectsContent locale={locale} />
        </LanguageProvider>
    )
}

function ProjectsContent({ locale }: { locale: Locale }) {
    const { t } = useLanguage()
    const projects = getProjects(locale)

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <Link href={`/${locale}`}>
                        <Button variant="outline" size="icon" aria-label={t.back}>
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3">
                        <FolderKanban className="h-8 w-8 text-primary" />
                        <h1 className="text-3xl md:text-4xl font-bold">{t.projectsPageTitle}</h1>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-primary">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">
                                        <FolderKanban className="h-5 w-5 text-primary" />
                                        {project.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm mt-2">
                                        {project.company}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm mb-4 block"
                                        >
                                            {t.visitProject}
                                        </a>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
