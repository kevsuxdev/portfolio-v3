import FeaturedProjects from '@/components/Sections/FeaturedProjects'
import Hero from '@/components/Sections/Hero'
import WhoAmI from '@/components/Sections/WhoAmI'
import React from 'react'

const RootPage = () => {
  return (
    <main>
      <Hero/>
      <FeaturedProjects/>
      <WhoAmI/>
    </main>
  )
}

export default RootPage
