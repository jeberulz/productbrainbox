import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { plusJakarta, dmSans, jetbrainsMono } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | ProductBrainBox',
    default: 'ProductBrainBox — 360 Workspace for Product Designers',
  },
  description: 'Plan sprints, track deliverables, run research, and ship handoff in one workspace. Built by a designer, for designers.',
  keywords: ['product design', 'design sprint', 'deliverables tracker', 'ux research', 'design handoff', 'product management', 'design workflow'],
  authors: [{ name: 'ProductBrainBox' }],
  creator: 'ProductBrainBox',
  publisher: 'ProductBrainBox',
  metadataBase: new URL('https://productbrainbox.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://productbrainbox.ai',
    title: 'ProductBrainBox — 360 Workspace for Product Designers',
    description: 'Plan sprints, track deliverables, run research, and ship handoff in one workspace. Built by a designer, for designers.',
    siteName: 'ProductBrainBox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProductBrainBox — 360 Workspace for Product Designers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProductBrainBox — 360 Workspace for Product Designers',
    description: 'Plan sprints, track deliverables, run research, and ship handoff in one workspace.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Plausible Analytics */}
        <Script
          data-domain="productbrainbox.ai"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ProductBrainBox',
              url: 'https://productbrainbox.ai',
              logo: 'https://productbrainbox.ai/logo.png',
              description: 'Plan sprints, track deliverables, run research, and ship handoff in one workspace. Built by a designer, for designers.',
              sameAs: [
                // Add social media links here when available
                // 'https://twitter.com/productbrainbox',
                // 'https://linkedin.com/company/productbrainbox',
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ProductBrainBox',
              url: 'https://productbrainbox.ai',
              description: 'Plan sprints, track deliverables, run research, and ship handoff in one workspace. Built by a designer, for designers.',
            }),
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
