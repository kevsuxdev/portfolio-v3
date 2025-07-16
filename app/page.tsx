import FeaturedProjects from '@/components/Sections/FeaturedProjects'
import Hero from '@/components/Sections/Hero'
import HowIDeliverValue from '@/components/Sections/HowIDeliverValue'
import LetsWorkTogether from '@/components/Sections/LetsWorkTogether'
import WhoAmI from '@/components/Sections/WhoAmI'
import React from 'react'

const RootPage = () => {
  return (
    <main>
      <Hero/>
      <FeaturedProjects/>
      <WhoAmI/>
      <HowIDeliverValue/>
      <LetsWorkTogether/>
    </main>
  )
}

export default RootPage
