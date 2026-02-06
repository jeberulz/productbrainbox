import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google'

// Display font for headlines - Plus Jakarta Sans
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// Body font - DM Sans
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// Monospace font for code blocks - JetBrains Mono
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
  preload: false, // Only used in blog posts, don't preload
  fallback: ['Courier New', 'monospace'],
})
