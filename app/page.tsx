
import Footer from '@/components/Footer'
import FeaturedProjects from '@/components/Sections/FeaturedProjects'
import Hero from '@/components/Sections/Hero'
import HowIDeliverValue from '@/components/Sections/HowIDeliverValue'
import LetsWorkTogether from '@/components/Sections/LetsWorkTogether'
import WhoAmI from '@/components/Sections/WhoAmI'
import React from 'react'

const RootPage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <FeaturedProjects />
      <WhoAmI />
      <HowIDeliverValue />
      <LetsWorkTogether />
      <Footer />
    </main>
  )
}

export default RootPage
