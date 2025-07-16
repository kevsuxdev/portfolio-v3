import React from 'react'
import BurgerMenu from '@/components/BurgerMenu'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full absolute top-0 px-32 py-12 z-50'>
        <h1 className='text-3xl font-logo'>Kevs Dev</h1>
        <BurgerMenu/>
    </header>
  )
}

export default Header