import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    variant?: 'outline' | 'fill'
}

const DefaultButton = ({ variant = 'fill', children} : Props) => {
  return (
    <button className={cn(
        'font-medium text-sm  rounded-2xl p-2 px-8 cursor-pointer active:scale-98 duration-200 border border-transparent flex items-center justify-center gap-2',
        variant === 'fill' && 'text-background bg-primary',
        variant === 'outline' && 'border border-primary text-primary'
    )}>
        {children}
    </button>
  )
}

export default DefaultButton