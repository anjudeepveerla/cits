import type React from "react"
import { Montserrat, Poppins, Roboto } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/cits/header" // import global header
import { ScrollAnimator } from "@/components/ux/scroll-animator" // import global scroll animator

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700"], // Semi-Bold, Bold
})
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["500", "600"], // Medium, Semi-Bold
})
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400"], // Light, Regular
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} bg-black text-white antialiased`}>
        <SiteHeader />
        <ScrollAnimator />
        <main>{children}</main>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
