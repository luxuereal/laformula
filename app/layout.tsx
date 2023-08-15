import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LA FORMULA',
  description: 'LA FORMULA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
