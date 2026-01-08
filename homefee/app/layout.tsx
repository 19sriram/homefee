import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { HeaderMenu } from "@/components/headermenu"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hausfee",
  description: "Hausfee",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex min-h-screen w-full flex-col justify-center items-center justify-between px-16 bg-white dark:bg-black ">
        <div className="my-10">
        <HeaderMenu/>
        </div>
        
        {children}
        </main>
      </body>
    </html>
  )
}
