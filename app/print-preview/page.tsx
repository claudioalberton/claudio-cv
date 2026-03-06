"use client"

import { Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { LanguageProvider } from "@/context/language-context"
import type { Locale } from "@/data/ui-translations"

function PrintPreviewContent() {
  const [isClient, setIsClient] = useState(false)
  const [pdfBlob, setPdfBlob] = useState<string | null>(null)
  const { resumeData, t, locale } = useLanguage()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDownload = async () => {
    if (typeof window === 'undefined') return

    try {
      const { pdf } = await import('@react-pdf/renderer')
      const { ResumePDF } = await import('@/components/resume-pdf')

      const photoUrl = `${window.location.origin}/claudio-cv/images/profile-photo.jpg`
      const blob = await pdf(<ResumePDF profilePhotoUrl={photoUrl} data={resumeData} locale={locale} />).toBlob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = 'Claudio_Alberton_Batista_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  const handlePreview = async () => {
    if (typeof window === 'undefined') return

    try {
      const { pdf } = await import('@react-pdf/renderer')
      const { ResumePDF } = await import('@/components/resume-pdf')

      const photoUrl = `${window.location.origin}/claudio-cv/images/profile-photo.jpg`
      const blob = await pdf(<ResumePDF profilePhotoUrl={photoUrl} data={resumeData} locale={locale} />).toBlob()
      const url = URL.createObjectURL(blob)
      setPdfBlob(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF preview. Please try again.')
    }
  }

  useEffect(() => {
    if (isClient && !pdfBlob) {
      handlePreview()
    }
  }, [isClient, pdfBlob])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex gap-4 items-center">
        <Link href={`/${locale}`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backToWebsite}
          </Button>
        </Link>

        {isClient && (
          <Button size="lg" onClick={handleDownload}>
            <Download className="mr-2 h-5 w-5" />
            {t.downloadPdf}
          </Button>
        )}
      </div>

      {/* PDF Preview */}
      <div className="mx-auto bg-white shadow-2xl" style={{ width: '100%', maxWidth: '21cm', minHeight: '29.7cm' }}>
        {pdfBlob ? (
          <iframe
            src={pdfBlob}
            width="100%"
            height="1000px"
            style={{ border: 'none' }}
            title="Resume PDF Preview"
          />
        ) : (
          <div className="flex items-center justify-center p-8" style={{ minHeight: '29.7cm' }}>
            <p className="text-gray-600">{t.generatingPdf}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function PrintPreviewWithLocale() {
  const searchParams = useSearchParams()
  const locale = (searchParams.get("locale") ?? "en") as Locale

  return (
    <LanguageProvider initialLocale={locale}>
      <PrintPreviewContent />
    </LanguageProvider>
  )
}

export default function PrintPreview() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>}>
      <PrintPreviewWithLocale />
    </Suspense>
  )
}
