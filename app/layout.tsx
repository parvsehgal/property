import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "PropList - Find Your Dream Property Today",
  description:
    "Discover premium properties with exclusive access to high-yield investment opportunities. Buy, sell, or rent properties with PropList.",
  keywords: "real estate, property, buy house, sell house, rent property, investment, luxury homes",
  authors: [{ name: "PropList Team" }],
  openGraph: {
    title: "PropList - Find Your Dream Property Today",
    description: "Discover premium properties with exclusive access to high-yield investment opportunities.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-[var(--font-jakarta)] antialiased bg-white text-black dark:bg-zinc-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
