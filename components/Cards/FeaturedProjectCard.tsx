import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    coverPhoto: StaticImageData
    title: string
    type: string,
    technologies: StaticImageData[]
    link?: {
        title: string
        href: string
    }
}

const FeaturedProjectCard = ({ coverPhoto, title, technologies, link } : Props) => {
  return (
    <article className='p-8 bg-accent rounded-xl flex flex-col gap-4 w-full h-full'>
        <Image
            src={coverPhoto}
            alt='Monetra Cover'
            width={500}
            height={500}
            className='object-contain rounded-xl w-full'
        />
        <h3 className='text-base font-semibold'>{title}</h3>
        <div className='flex items-start gap-2 w-full flex-wrap'>
            {technologies.map((technology, index) => (
                <Image
                    key={index}
                    src={technology}
                    alt='React Icon'
                    width={40}
                    height={50}
                    className='bg-background p-2 rounded-lg'
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
                ) : 'Not Published'
            }
        </p>
    </article>
  )
}

export default FeaturedProjectCard