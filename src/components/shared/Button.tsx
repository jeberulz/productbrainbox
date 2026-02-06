'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
  icon?: React.ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variantStyles = {
    primary: 'bg-coral-500 text-white hover:brightness-110 focus-visible:ring-coral-500',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus-visible:ring-blue-500',
  }

  const sizeStyles = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const Component = href ? 'a' : motion.button
  const componentProps = href ? { href } : {}

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={!href ? { scale: 1.02 } : undefined}
      whileTap={!href ? { scale: 0.98 } : undefined}
      {...componentProps}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </Component>
  )
}
