import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Astrenox - AI-First Digital Transformation',
  description: 'Creating engineering disruption with AI-first digital transformation. Strategic consulting plus hands-on engineering for measurable outcomes.',
  keywords: ['AI transformation', 'AI engineering', 'digital transformation', 'AI consulting', 'intelligent automation'],
  authors: [{ name: 'Astrenox' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
