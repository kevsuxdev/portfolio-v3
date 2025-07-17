import { cn } from '@/lib/utils'
import React, { ReactNode, RefObject } from 'react'

interface Props {
  id?: string
  ref?: RefObject<HTMLElement>,
  className?: string
  children: ReactNode
}

const GridSection = ({ id, ref, className, children } : Props) => {
  return (
    <section ref={ref} id={id} className={cn('min-h-screen relative', className)}>
      <div
        className='w-full absolute h-full bg-cover bg-no-repeat bg-center opacity-5 pointer-events-none'
        style={{ backgroundImage: 'url(/images/grid-image.png)' }}
      />
      {children}
    </section>
  )
}

export default GridSection
