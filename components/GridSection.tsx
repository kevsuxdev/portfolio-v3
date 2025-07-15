import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

const GridSection = ({ className, children } : Props) => {
  return (
    <section className={cn('min-h-screen relative', className)}>
      <div
        className='w-full absolute h-full bg-cover bg-no-repeat bg-center opacity-10 pointer-events-none'
        style={{ backgroundImage: 'url(/images/grid-image.png)' }}
      />
      {children}
    </section>
  )
}

export default GridSection
