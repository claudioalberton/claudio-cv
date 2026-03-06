import { notFound } from "next/navigation"
import type { Locale } from "@/data/ui-translations"
import { LocalePageClient } from "./client"

const VALID_LOCALES: Locale[] = ["en", "pt"]

export function generateStaticParams() {
    return VALID_LOCALES.map((locale) => ({ locale }))
}

export default function LocalePage({ params }: { params: { locale: string } }) {
    if (!VALID_LOCALES.includes(params.locale as Locale)) {
        notFound()
    }

    return <LocalePageClient locale={params.locale as Locale} />
}
