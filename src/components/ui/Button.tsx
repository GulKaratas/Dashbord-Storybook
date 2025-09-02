'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ComponentVariants } from '@/types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ComponentVariants {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const buttonVariants = {
  variant: {
    default: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
    destructive: 'bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-500',
    outline: 'border border-secondary-300 bg-white text-secondary-900 hover:bg-secondary-50 focus-visible:ring-secondary-500',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-500',
    ghost: 'text-secondary-900 hover:bg-secondary-100 focus-visible:ring-secondary-500',
    link: 'text-primary-600 underline-offset-4 hover:underline focus-visible:ring-primary-500',
  },
  size: {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 px-3 py-1 text-xs',
    lg: 'h-12 px-8 py-3 text-base',
    icon: 'h-10 w-10 p-0',
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    return (
      <button
        className={cn(
          baseClasses,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          loading && 'cursor-not-allowed opacity-50',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && leftIcon}
        {children}
        {!loading && rightIcon && rightIcon}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }




