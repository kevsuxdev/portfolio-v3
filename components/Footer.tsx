import { footerLinks, socials } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-32 flex items-start justify-between gap-10'>
      <aside className='flex flex-col gap-5'>
        <h1 className='text-3xl font-logo'>Kevs Dev</h1>
        <article className='flex items-start gap-5'>
          {socials.map(({ id, name, icon, href }) => (
            <Link href={href} key={id} target='_blank' className='cursor-pointer duration-100 hover:-translate-y-1'>
              <Image
                src={icon}
                alt={name}
                width={25}
                height={25}
              />
            </Link>
          ))}
        </article>
        <p className='text-base leading-none'>markkevinromero.work@gmail.com</p>
        <p className='text-base leading-none text-white/40'>© 2025 Kevs Dev. All rights reserved.</p>
      </aside>
      <aside className='grid grid-cols-2 gap-10'>
          {footerLinks.map(({ id, header, links }) => (
            <article key={id} className='space-y-3'>
              <h3 className='font-semibold text-white/40 tracking-wide'>{header.toUpperCase()}</h3>
              <div className='flex flex-col gap-1'>
                {links.map(({ name, href }, index) => (
                  <Link href={href} key={index} className='font-medium'>{name}</Link>
                ))}
              </div>
            </article>
          ))}
      </aside>
    </footer>
  )
}

export default Footer