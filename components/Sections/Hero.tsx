"use client"
import React, { useEffect } from 'react'
import GridSection from '@/components/GridSection'
import DefaultButton from '@/components/Buttons/DefaultButton'
import { ArrowRight } from 'lucide-react'
import { motion, useAnimate } from 'framer-motion'
import TitleMarquee from '@/components/TitleMarquee'
import Header from '@/components/Header/Header'
import Link from 'next/link'

const containerHover = {
    initial: {
        x: 0,
    },
    animate: {
        x: 25,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {

    document.body.style.overflow = 'hidden'

    animate([
      ['.digital', { scale: 1 }, { duration: 1, ease: 'anticipate' }],
      [".build", { x: 0, opacity: 1 }, { at: 1.5 }],
      [".work", { x: 0, opacity: 1 }, { at: 1.5 }],
      [".para", { y: 0, opacity: 1 }, { duration: 1, ease: 'easeOut' }],
      [".work-badge", { scale: 1 }, { duration: 1, ease: 'anticipate' }],
      [".work-badge", { rotate: 5 }, { duration: 0.3, ease: 'anticipate' }],
      [".work-badge", { rotate: -5 }, { duration: 0.3, ease: 'anticipate' }],
      [".work-badge", { rotate: 0 }, { duration: 1, ease: 'anticipate' }],
    ]).finished.then(() => document.body.style.overflow = 'auto' )

  }, [animate])

  return (
    <GridSection ref={scope} id='home' className='flex flex-col items-center justify-center gap-5 relative'>
        <Header/>
        <motion.article initial={{ scale: 0 }} className='work-badge bg-accent rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 hover:animate-bounce'>
          <div className='w-2 h-2 rounded-full bg-primary'/>
          <h1>Available For Work</h1>
        </motion.article>
        <article className='flex items-center flex-col gap-4'>
          <h1 className='text-6xl font-black flex gap-2 max-xl:flex-col max-xl:items-center max-xl:text-center max-xl:text-5xl max-xl:gap-4'>
            <motion.span initial={{ x: -50, opacity: 0 }} className='build'>Building </motion.span>
            <motion.span initial={{ scale: 50 }} className='text-primary digital'>Digital Solutions </motion.span>
            <motion.span initial={{ x: 50, opacity: 0 }} className='work'>That Just Work</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 50 }} className='text-base w-[75%] max-lg:w-[95%] text-center para'>I’m a <span className='text-primary'>Full Stack Developer</span> who turns ideas into clean, responsive, and scalable web applications from intuitive user interfaces to robust back-end systems.</motion.p>
          <div className='flex items-center gap-2'>
            <Link href='#contact'>
              <DefaultButton>Let&apos;s Connect</DefaultButton>
            </Link>
            <motion.div variants={containerHover} initial='initial' whileHover='animate'>
                <Link href='#projects'>
                  <DefaultButton variant='outline'>
                    View My Work
                    <motion.div variants={containerHover}>
                        <ArrowRight size={20}/>
                    </motion.div>
                  </DefaultButton>
                </Link>
            </motion.div>
          </div>
        </article>
        <TitleMarquee/>
      </GridSection>
  )
}

export default Hero