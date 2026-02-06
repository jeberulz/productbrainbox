import React from 'react'
import { cn } from '@/lib/utils'

interface GridBackgroundProps {
  opacity?: number
  size?: number
  fade?: boolean
  className?: string
}

export function GridBackground({
  opacity = 0.05,
  size = 80,
  fade = true,
  className,
}: GridBackgroundProps) {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(120, 124, 169, ${opacity}) 1px, transparent 1px),
      linear-gradient(90deg, rgba(120, 124, 169, ${opacity}) 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
  }

  const fadeStyle = fade
    ? {
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
      }
    : {}

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 hidden md:block',
        className
      )}
      style={{ ...gridStyle, ...fadeStyle }}
      aria-hidden="true"
    />
  )
}
