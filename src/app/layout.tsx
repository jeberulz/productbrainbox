import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProductBrainBox — 360° Design Workspace',
  description: 'Plan research. Map journeys. Manage sprints. Deliver pixels. One workspace that understands how senior designers actually think and work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
