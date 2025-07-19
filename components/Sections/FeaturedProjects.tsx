"use client"
import React, { useState } from 'react'
import SectionHeader from '@/components/Header/SectionHeader'
import { listOfProjects, projectFilters } from '@/constant'
import DefaultButton from '../Buttons/DefaultButton'
import FeaturedProjectCard from '../Cards/FeaturedProjectCard'
import { easeOut, motion } from 'framer-motion'

const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectCardVariant = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
}

const FeaturedProjects = () => {

  const [projects, setProjects] = useState(listOfProjects)
  const [projectTitle, setProjectTitle] = useState("All")

  const handleTitles = (title: string) => {

    if (title === 'All') {
        setProjectTitle('All')
        setProjects(listOfProjects)
        return
    }

    setProjectTitle(title)
    setProjects(listOfProjects.filter((project) => project.type === title))
  }

  return (
    <section id='projects' className='min-h-screen p-32 max-lg:px-10 flex flex-col items-center justify-center gap-10'>
        <SectionHeader header='Featured Projects' description='Here’s What I’ve Built — Each One With a Purpose'/>
        <article className='flex items-center gap-2'>
            {projectFilters.map((title, index) => (
                <DefaultButton
                    handleClick={() => handleTitles(title)}
                    className='hover:bg-primary hover:text-background text-nowrap'
                    variant={projectTitle === title ? 'fill' : 'outline'}
                    key={index}
                >
                    {title}
                </DefaultButton>
            ))}
        </article>
        {projects.length > 0 ? (
            <motion.aside variants={containerVariant} initial='initial' animate='animate' className='grid grid-cols-2 max-xl:grid-cols-1 w-full gap-10'>
                {projects.map((project) => (
                    <motion.article variants={projectCardVariant}  key={project.id}>
                        <FeaturedProjectCard {...project}/>
                    </motion.article>
                ))}
            </motion.aside>
        ) : (
            <h2 className='text-3xl font-semibold uppercase text-primary'>No Projects </h2>
        )}
    </section>
  )
}

export default FeaturedProjects