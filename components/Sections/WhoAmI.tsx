"use client"
import React from 'react'
import TechonologyBadge from '@/components/Badges/TechonologyBadge'
import { listOfTechnologies } from '@/constant'
import { easeOut, motion } from 'framer-motion'

const technologyBadgeVariant = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { staggerChildren: 0.15, duration: 0.5, ease: easeOut } }
}

const WhoAmI = () => {
  return (
    <section className='min-h-screen p-32 flex flex-col items-center justify-center gap-10'>
      <article className='flex flex-col gap-5 w-full'>
        <p className='text-sm text-primary font-bold'>Who Am I</p>
        <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0,  transition: { duration: 0.5 }}}
            viewport={{ once: true }}
            className='text-5xl font-semibold tracking-tight w-1/2 text-white/50'
        >
          <span className='text-foreground'>A Full-Stack Developer</span> who turns ideas into exceptional digital experiences
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0,  transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' }}}
            viewport={{ once: true }}
            className='text-lg font-light'
        >
            I specialize in crafting responsive front-end interfaces and building reliable back-end systems that bring products to life. With a strong focus on usability, performance, and clean code, I help individuals, startups, and businesses launch web solutions that are fast, functional, and user-friendly.
        </motion.p>
        <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0,  transition: { duration: 0.5, delay: 0.8, ease: 'easeOut' }}}
            viewport={{ once: true }}
            className='text-lg font-light'
        >
            I take pride in delivering work that’s not just done but done right. From planning to deployment, I aim to create solutions that are scalable, maintainable, and aligned with your goals.
        </motion.p>
      </article>
      <motion.article
        variants={technologyBadgeVariant}
        initial="initial"
        whileInView='animate'
        viewport={{ once: true }}
        className='flex items-start gap-5 flex-wrap w-full'
      >
        {listOfTechnologies.map((technology) => (
            <motion.div variants={technologyBadgeVariant} key={technology.id}>
                <TechonologyBadge {...technology}/>
            </motion.div>
        ))}
      </motion.article>
    </section>
  )
}

export default WhoAmI
