import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    coverImage: StaticImageData,
    name: string
}

const TechonologyBadge = ({ coverImage, name } : Props) => {
  return (
    <article className='p-3 px-6 bg-accent rounded-xl flex items-center gap-2 w-fit'>
        <Image
            src={coverImage}
            alt='Technology Icon'
            width={20}
            height={50}
        />
        <h3 className='font-medium text-base'>{name}</h3>
    </article>
  )
}

export default TechonologyBadge