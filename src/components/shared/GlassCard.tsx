'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { GlowEffect } from './GlowEffect'

interface GlassCardProps {
  children: React.ReactNode
  variant?: 'dark' | 'light'
  hover?: boolean
  glow?: boolean
  glowColor?: 'blue' | 'coral'
  className?: string
}

export function GlassCard({
  children,
  variant = 'dark',
  hover = false,
  glow = false,
  glowColor = 'blue',
  className,
}: GlassCardProps) {
  const variantStyles = {
    dark: 'glass-dark text-white',
    light: 'glass-light text-navy-950',
  }

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:border-blue-400/30'
    : ''

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-6',
        variantStyles[variant],
        hoverStyles,
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      initial={hover ? { y: 0 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {glow && <GlowEffect color={glowColor} />}
      {children}
    </motion.div>
  )
}
