import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full absolute top-0 px-32 py-12 z-50 max-md:justify-center'>
        <Link href='/'>
          <h1 className='text-3xl font-logo'>Kevs Dev</h1>
        </Link>
    </header>
  )
}

export default Header