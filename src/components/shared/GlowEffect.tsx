import React from 'react'
import { cn } from '@/lib/utils'

interface GlowEffectProps {
  color?: 'blue' | 'coral'
  size?: number
  opacity?: number
  className?: string
}

export function GlowEffect({
  color = 'blue',
  size = 600,
  opacity = 0.15,
  className,
}: GlowEffectProps) {
  const colorStyles = {
    blue: 'bg-blue-500',
    coral: 'bg-coral-500',
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl',
        colorStyles[color],
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  )
}
