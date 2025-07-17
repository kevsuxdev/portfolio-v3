"use client"
import React from 'react'
import SectionHeader from '@/components/Header/SectionHeader'
import { deliverables } from '@/constant'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HowIDeliverValue = () => {
  return (
    <section className='p-32 flex flex-col max-lg:px-10 items-center justify-center gap-10'>
      <SectionHeader
        header="How I Deliver Value"
        description="More than just code—it's about quality, communication, and outcomes."
      />
      <article className='w-full grid grid-cols-3 max-lg:grid-cols-1 gap-10'>
        {deliverables.map((action) => (
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 * action.id, ease: 'easeOut' } }}
                viewport={{ once: true }}
                key={action.id}
                className='p-8 rounded-xl bg-accent flex flex-col items-center gap-5 w-full'
            >
                <Image
                    src={action.icon}
                    alt='Icon'
                    width={65}
                    height={50}
                />
                <h1 className='text-xl font-semibold text-center'>{action.title}</h1>
                <p>{action.description}</p>
            </motion.div>
        ))}
      </article>
    </section>
  )
}

export default HowIDeliverValue