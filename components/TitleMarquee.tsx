"use effect"
import { myTitles } from '@/constant';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";

const TitleMarquee = () => {

  const [direction, setDirection] = useState<'right' | 'left'>('left')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleOnScroll = () => {
      const currentPosition = window.scrollY

      if (currentPosition > lastScrollY.current) {
        setDirection('right')
      } else if (currentPosition < lastScrollY.current ) {
        setDirection('left')
      }

      lastScrollY.current = currentPosition
    }

    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <div className='w-full absolute bottom-0'>
        <Marquee className='bg-accent py-5 absolute' autoFill speed={150} direction={direction}>
            {myTitles.map((title, index) => (
                <article key={index} className='mx-2 flex items-center justify-between gap-5'>
                    <h1 className='text-4xl font-bold'>{title.toUpperCase()}</h1>
                    <div className='w-2 h-2 rounded-full bg-primary'/>
                </article>
            ))}
        </Marquee>
    </div>
  )
}

export default TitleMarquee