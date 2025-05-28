import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
