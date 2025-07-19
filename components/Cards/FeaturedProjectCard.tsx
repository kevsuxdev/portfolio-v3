import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    coverPhoto: StaticImageData
    title: string
    description: string
    type: string,
    technologies: StaticImageData[]
    link?: {
        title: string
        href: string
    }
}

const FeaturedProjectCard = ({ coverPhoto, title, description, technologies, link } : Props) => {

  return (
    <article className='p-8 bg-accent rounded-xl flex flex-col gap-4 w-full h-full'>
        <Image
            src={coverPhoto}
            alt='Cover Image'
            width={500}
            height={500}
            className='object-contain rounded-xl w-full'
        />
        <article className='flex flex-col gap-2 w-full'>
            <h3 className='text-lg font-semibold max-lg:text-base'>{title}</h3>
            <p className='text-white/70 max-lg:text-sm'>{description}</p>
        </article>
        <div className='flex items-start gap-2 w-full flex-wrap relative'>
            {technologies.map((technology, index) => (
                <Image
                    key={index}
                    src={technology}
                    alt='React Icon'
                    width={40}
                    height={50}
                    className='bg-background p-2 h-10 w-10 rounded-lg object-contain'
                />
            ))}
        </div>
        <p className='text-sm text-primary'>
            {link ? (
                    <Link
                        href={link.href}
                        target='_blank'
                        className='text-sm text-primary hover:underline'
                    >
                        Live at {link.title}
                    </Link>
                ) : <Link
                        href='#contact'
                        className='text-sm text-primary hover:underline'
                    >
                        Request Demo
                    </Link>
            }
        </p>
    </article>
  )
}

export default FeaturedProjectCard