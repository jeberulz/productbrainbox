'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'coral' | 'blue' | 'lavender'
  dot?: boolean
  className?: string
}

export function Badge({ children, variant = 'lavender', dot = false, className }: BadgeProps) {
  const variantStyles = {
    coral: 'bg-coral-500/10 text-coral-500 border-coral-500/20',
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    lavender: 'bg-lavender-400/10 text-lavender-400 border-lavender-400/20',
  }

  const dotColors = {
    coral: 'bg-coral-500',
    blue: 'bg-blue-500',
    lavender: 'bg-lavender-400',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <motion.span
          className={cn('h-2 w-2 rounded-full', dotColors[variant])}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      {children}
    </span>
  )
}
