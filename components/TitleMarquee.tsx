import { myTitles } from '@/constant';
import React from 'react'
import Marquee from "react-fast-marquee";

const TitleMarquee = () => {
  return (
    <div className='w-full absolute bottom-0'>
        <Marquee className='bg-accent py-5 absolute' autoFill>
            {myTitles.map((title, index) => (
                <article key={index} className='mx-5 flex items-center justify-between gap-5'>
                    <h1 className='text-4xl font-bold'>{title.toUpperCase()}</h1>
                    <div className='w-2 h-2 rounded-full bg-primary'/>
                </article>
            ))}
        </Marquee>
    </div>
  )
}

export default TitleMarquee