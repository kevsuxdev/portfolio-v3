"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const BurgerMenu = () => {

  const [isOpenNav, setisOpenNav] = useState(false)

  return (
    <article onClick={() => setisOpenNav(!isOpenNav)} className='flex flex-col gap-1 cursor-pointer items-center'>
        <div className={cn('bg-white w-8 h-[4px] rounded-full transition-all duration-200', isOpenNav && 'w-0')} />
        <div className={cn('bg-white w-8 h-[4px] rounded-full transition-all duration-200', isOpenNav && 'rotate-45 -translate-y-1 w-5')} />
        <div className={cn('bg-white w-8 h-[4px] rounded-full transition-all duration-200', isOpenNav && '-rotate-45 -translate-y-3 w-5')} />
    </article>
  )
}

export default BurgerMenu