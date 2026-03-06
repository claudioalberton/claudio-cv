import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageProvider } from "@/context/language-context"
import { LanguageToggle } from "@/components/language-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claudio Alberton Batista - Resume",
  description: "Senior IT Operations Engineer | Development and Innovation Manager",
  keywords: ["IT Operations", "Software Development", "Innovation", "Technology Manager"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/*
            LanguageProvider here provides a default context for the fixed header (toggle).
            Pages under /[locale]/ override this with their own nested LanguageProvider
            that has the correct initialLocale from the URL.
          */}
          <LanguageProvider>
            <div className="fixed top-4 right-4 z-50 flex items-center gap-2 no-print">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
