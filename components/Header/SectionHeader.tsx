import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
    header: string
    headerCSS?: string
    description: string
    descriptionCSS?: string
}

const SectionHeader = ({ className, header, headerCSS, description, descriptionCSS } : Props) => {
  return (
    <article className={cn('flex flex-col items-center gap-3 w-full', className)}>
        <h1 className={cn('text-4xl font-semibold text-primary', headerCSS)}>{header}</h1>
        <p className={cn('text-lg', descriptionCSS)}>{description}</p>
    </article>
  )
}

export default SectionHeader