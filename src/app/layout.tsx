import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'INFINITE TOWERS - Luxury Real Estate',
  description: 'Discover premium luxury properties and exclusive real estate opportunities at INFINITE TOWERS.',
  keywords: ['luxury real estate', 'premium properties', 'exclusive homes', 'INFINITE TOWERS'],
  authors: [{ name: 'INFINITE TOWERS' }],
  openGraph: {
    title: 'INFINITE TOWERS - Luxury Real Estate',
    description: 'Discover premium luxury properties and exclusive real estate opportunities',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
