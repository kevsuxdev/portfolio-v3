import { images } from '@/constant/images'

export const myTitles = [
  'Frontend Development',
  'Full-Stack Development',
  'Web Design',
]

export const projectFilters = ['All', 'Frontend', 'Full-Stack']

export const listOfProjects = [
  {
    id: 1,
    type: 'Full-Stack',
    coverPhoto: images.monetra,
    title: 'Monetra – All‑in‑One Personal Finance Dashboard',
    description:
      'Monetra is a clean, modern financial dashboard that helps users organize multiple wallets, track spending in real time, and stay informed with instant notifications. Designed for clarity and control, it simplifies budgeting, transactions, and shared expense management—all from one intuitive interface.',
    technologies: [
      images.react,
      images.next,
      images.tailwind,
      images.postgreSQL,
      images.prisma,
    ],
    link: {
      title: 'Monetra',
      href: 'https://monetraa.vercel.app/',
    },
  },
  {
    id: 2,
    type: 'Frontend',
    coverPhoto: images.kaha,
    title:
      'Kaha Construction – Modern Website for a Design-Forward Construction Firm',
    description:
      'Kaha is a responsive website built for a design-forward construction firm. It highlights the company’s projects and values through clean visuals, a clear layout, and a seamless user experience—making it easy for clients to connect and explore their work.',
    technologies: [
      images.react,
      images.next,
      images.tailwind,
      images.framerMotion,
    ],
    link: {
      title: 'Kaha Construction',
      href: 'https://www.kahaconstruction.com/',
    },
  },
  {
    id: 3,
    type: 'Full-Stack',
    coverPhoto: images.funday,
    title: 'Funday – Minimal Savings & Expense Tracker Web App',
    description:
      'Funday is a web application designed to help users track their savings and expenses effortlessly. It gives clear insights into spending habits and helps you understand exactly where your money goes—making financial awareness simple and stress-free.',
    technologies: [
      images.mongoDB,
      images.express,
      images.react,
      images.node,
      images.tailwind,
    ],
  },
  {
    id: 4,
    type: 'Full-Stack',
    coverPhoto: images.cassa,
    title: 'Cassa Caffea – Streamlined POS & Order Management for Coffee Shop',
    description:
      'Cassa Coffea is a POS system built for a coffee shop, designed as a school project. It features a cashier-friendly interface to handle orders, payments, and sales efficiently—making daily operations faster and more organized.',
    technologies: [
      images.laravel,
      images.tailwind,
      images.mySQL,
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

export const deliverables = [
  {
    id: 1,
    icon: images.cleanCode,
    title: 'Clean Code',
    description:
      'I write structured, maintainable code that follows best practices—ensuring your product remains fast, scalable, and easy to build on.',
  },
  {
    id: 2,
    icon: images.collaborative,
    title: 'Collaborative Workflow',
    description:
      'I communicate clearly and work closely with clients or teams, making feedback loops smooth and ensuring every step stays aligned with your goals.',
  },
  {
    id: 3,
    icon: images.reliable,
    title: 'Reliable Delivery',
    description:
      'You can count on me to ship quality work on time—tested, refined, and ready for real-world use without unnecessary delays.',
  },
]

export const socials = [
  {
    id: 1,
    name: 'Email',
    icon: images.email,
    href: 'mailto:markkevinromero.work@gmail.com',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: images.facebook,
    href: 'https://www.facebook.com/kevinromero00/',
  },
  {
    id: 3,
    name: 'Github',
    icon: images.github,
    href: 'https://github.com/kevsuxdev',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: images.instagram,
    href: 'https://www.instagram.com/kevsus_/',
  },
]

export const footerLinks = [
  {
    id: 1,
    header: 'Quick Links',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Who Am I', href: '#who-am-i' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    id: 2,
    header: 'Socials',
    links: [
      { name: 'Github', href: 'https://github.com/kevsuxdev' },
      { name: 'Facebook', href: 'https://www.facebook.com/kevinromero00/' },
      { name: 'Instagram', href: 'https://www.instagram.com/kevsus_/' },
    ],
  },
]
