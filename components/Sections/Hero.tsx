"use client"
import React from 'react'
import GridSection from '@/components/GridSection'
import DefaultButton from '@/components/Buttons/DefaultButton'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import TitleMarquee from '@/components/TitleMarquee'
import Header from '@/components/Header/Header'

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
  return (
    <GridSection className='flex flex-col items-center justify-center gap-5 relative'>
        <Header/>
        <article className='bg-accent rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-primary'/>
          <h1>Available For Work</h1>
        </article>
        <article className='flex items-center flex-col gap-4'>
          <h1 className='text-6xl font-black'>Building <span className='text-primary'>Digital Solutions</span> That Just Work</h1>
          <p className='text-base w-[75%] text-center'>I’m a <span className='text-primary'>Full Stack Developer</span> who turns ideas into clean, responsive, and scalable web applications from intuitive user interfaces to robust back-end systems.</p>
          <div className='flex items-center gap-2'>
            <DefaultButton>Let&apos;s Connect</DefaultButton>
            <motion.div variants={containerHover} initial='initial' whileHover='animate'>
                <DefaultButton variant='outline'>
                    View My Work
                    <motion.div variants={containerHover}>
                        <ArrowRight size={20}/>
                    </motion.div>
                </DefaultButton>
            </motion.div>
          </div>
        </article>
        <TitleMarquee/>
      </GridSection>
  )
}

export default Hero