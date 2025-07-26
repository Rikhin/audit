import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Traceability Tool - AI decisions, explained.',
  description: 'Reveal how AI models form answers — and whether you can trust them.',
  keywords: ['AI', 'traceability', 'transparency', 'machine learning', 'audit', 'trust'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 