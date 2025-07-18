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
    description: "Monetra is a clean, modern financial dashboard that helps users organize multiple wallets, track spending in real time, and stay informed with instant notifications. Designed for clarity and control, it simplifies budgeting, transactions, and shared expense management—all from one intuitive interface.",
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
      'Kaha is a modern and responsive website crafted for a construction company that values both function and aesthetics. Designed with clean visuals, clear structure, and thoughtful user experience, the site reflects the firm’s commitment to quality craftsmanship and forward-thinking design. From showcasing projects to making it easy for clients to get in touch, the site supports both branding and business goals through a seamless digital experience.',
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
