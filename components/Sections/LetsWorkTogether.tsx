import React from 'react'
import SectionHeader from '@/components/Header/SectionHeader'
import ContactForm from '@/components/Forms/ContactForm'

const LetsWorkTogether = () => {
  return (
    <section id='contact' className='min-h-screen p-32 flex flex-col items-center justify-center gap-10'>
      <SectionHeader
        header="Let's Work Together"
        headerCSS='text-5xl'
        description="Have a project in mind or just want to connect? I'm open to freelance, collaboration, or full-time opportunities."
      />
      <ContactForm/>
    </section>
  )
}

export default LetsWorkTogether
