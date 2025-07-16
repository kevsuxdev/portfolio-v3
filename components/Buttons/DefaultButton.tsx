import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    type?: 'submit' | 'button'
    disabled?: boolean
    className?: string
    variant?: 'outline' | 'fill'
    handleClick?: () => void
}

const DefaultButton = ({ className, variant = 'fill', children, disabled = false, type = 'button', handleClick } : Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={cn(
          'font-medium text-sm  rounded-2xl p-2 px-8 cursor-pointer active:scale-98 duration-200 border border-transparent flex items-center justify-center gap-2',
          variant === 'fill' && 'text-background bg-primary',
          variant === 'outline' && 'border border-primary text-primary',
          className
      )}>
        {children}
    </button>
  )
}

export default DefaultButton