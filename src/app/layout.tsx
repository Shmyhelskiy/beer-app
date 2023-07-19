import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'  
import TakeData from './components/TakeData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beer app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TakeData />
        <Nav />
        {children}
      </body>
    </html>
  )
}
