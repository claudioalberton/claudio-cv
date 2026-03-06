"use client"

import { useRouter, usePathname } from "next/navigation"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface PDFExportButtonProps {
  contentRef?: React.RefObject<HTMLDivElement>
}

export function PDFExportButton({ contentRef }: PDFExportButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const locale = pathname.startsWith("/pt") ? "pt" : "en"

  const handleClick = () => {
    router.push(`/print-preview?autoExport=true&locale=${locale}`)
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-8 right-8 z-50 shadow-2xl hover:shadow-3xl transition-all no-print group"
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      {t.downloadPdf}
    </Button>
  )
}
