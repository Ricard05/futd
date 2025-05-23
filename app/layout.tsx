import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BottomNavigation } from "@/components/bottom-navigation"
import { TopNavigation } from "@/components/top-navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mundial Escolar de Fútbol",
  description: "Aplicación oficial del Mundial Escolar de Fútbol",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <TopNavigation />
            <main className="container mx-auto px-4 pb-20 md:pb-0 pt-16 md:pt-24 max-w-[280px]:pt-12 max-w-[280px]:px-2">
              {children}
            </main>
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
