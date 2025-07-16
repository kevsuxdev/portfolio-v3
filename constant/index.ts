import { images } from "@/constant/images"

export const myTitles = ['Frontend', 'Backend', 'Full-Stack']

export const projectFilters = ['All', 'Frontend', 'Backend', 'Full-Stack']

export const listOfProjects = [
  {
    id: 1,
    type: 'Full-Stack',
    coverPhoto: images.monetra,
    title: 'Monetra – Full-Stack Personal Finance Tracker Built for Clarity',
    technologies: [
        images.react,
        images.next,
        images.tailwind,
        images.postgreSQL,
        images.prisma,
    ],
    link: {
      title: 'Monetra',
      href: 'https://monetraa.vercel.app/'
    }
  },
  {
    id: 2,
    type: 'Frontend',
    coverPhoto: images.kaha,
    title: 'Kaha Construction – Modern Website for a Design-Forward Construction Firm',
    technologies: [
        images.react,
        images.next,
        images.tailwind,
        images.framerMotion
    ],
    link: {
      title: 'Kaha Construction',
      href: 'https://www.kahaconstruction.com/'
    }
  },
  {
    id: 3,
    type: 'Full-Stack',
    coverPhoto: images.funday,
    title: 'Funday – Minimal Savings & Expense Tracker Web App',
    technologies: [
        images.mongoDB,
        images.express,
        images.react,
        images.node,
        images.tailwind,
    ],
  },
]

export const listOfTechnologies = [
  { id: 1, name: 'HTML', coverImage: images.html },
  { id: 2, name: 'CSS', coverImage: images.css },
  { id: 3, name: 'JavaScript', coverImage: images.javascript },
  { id: 4, name: 'Typescript', coverImage: images.typescript },
  { id: 5, name: 'React JS', coverImage: images.react },
  { id: 6, name: 'Next JS', coverImage: images.next },
  { id: 7, name: 'Node JS', coverImage: images.node },
  { id: 8, name: 'Express JS', coverImage: images.express },
  { id: 9, name: 'Laravel', coverImage: images.laravel },
  { id: 10, name: 'Tailwind CSS', coverImage: images.tailwind },
  { id: 11, name: 'Prisma ORM', coverImage: images.prisma },
  { id: 12, name: 'PostgreSQL', coverImage: images.postgreSQL },
  { id: 13, name: 'MySQL', coverImage: images.mySQL },
  { id: 14, name: 'MongoDB', coverImage: images.mongoDB },
]