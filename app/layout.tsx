import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio - Frontend Developer",
  description: "สร้างสรรค์ UI/UX ที่สวยงามและใช้งานง่าย ด้วยเทคโนโลยีที่ทันสมัย",
    generator: 'Ez.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableSystemTheme>
          <PortfolioNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
