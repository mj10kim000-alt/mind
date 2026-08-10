import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Gowun_Batang } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const gowunBatang = Gowun_Batang({
  variable: "--font-magic-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
})
export const metadata: Metadata = {
  title: "나와 닮은 호그와트 캐릭터 찾기",
  description: "나와 꼭 닮은 호그와트의 마법사를 찾아보세요.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} ${gowunBatang.variable}`}>
      <body>{children}</body>
    </html>
  )
}
