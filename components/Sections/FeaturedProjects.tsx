"use client"
import React, { useEffect, useState } from 'react'
import SectionHeader from '@/components/Header/SectionHeader'
import { listOfProjects, projectFilters } from '@/constant'
import DefaultButton from '../Buttons/DefaultButton'
import FeaturedProjectCard from '../Cards/FeaturedProjectCard'
import { easeOut, motion } from 'framer-motion'

const projectCardVariant = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.5, ease: easeOut } }
}

const FeaturedProjects = () => {

  const [projectTitle, setProjectTitle] = useState("All")
  const [projects, setProjects] = useState(listOfProjects)

  useEffect(() => {

    if (projectTitle === 'All') {
        setProjects(listOfProjects)
        return
    }

    setProjects(listOfProjects.filter((project) => project.type === projectTitle))
  }, [projectTitle])

  return (
    <section className='min-h-screen p-32 flex flex-col items-center justify-center gap-10'>
        <SectionHeader header='Featured Projects' description='Here’s What I’ve Built — Each One With a Purpose'/>
        <article className='flex items-center gap-2'>
            {projectFilters.map((title, index) => (
                <DefaultButton
                    handleClick={() => {
                        setProjectTitle(title)
                    }}
                    className='hover:bg-primary hover:text-background'
                    variant={projectTitle === title ? 'fill' : 'outline'}
                    key={index}
                >
                    {title}
                </DefaultButton>
            ))}
        </article>
        {projects.length > 0 ? (
            <motion.aside className='grid grid-cols-3 w-full gap-10'>
                {projects.map((project) => (
                    <motion.article variants={projectCardVariant} initial='initial' whileInView='animate' viewport={{ once: true }}  key={project.id}>
                        <FeaturedProjectCard {...project}/>
                    </motion.article>
                ))}
            </motion.aside>
        ) : (
            <h2 className='text-3xl font-semibold uppercase text-primary'>No Projects Yet</h2>
        )}
    </section>
  )
}

export default FeaturedProjects