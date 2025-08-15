import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'FinTech Platform Development',
    title: 'Banking & Trade Finance Solutions',
    description:
      'Building secure, SEO-optimized fintech platforms specializing in bank guarantees, SBLCs, and trade finance. Integrated with Next.js 15, TypeScript, and advanced security protocols.',
  },
  {
    id: 2,
    name: 'Biotech & Research Platforms',
    title: 'EU-Compliant Distribution Systems',
    description:
      'Developing compliant research compound distribution platforms for biotech and pharmaceutical markets. Full-stack solutions with security, catalog management, and regulatory compliance.',
  },
  {
    id: 3,
    name: 'E-commerce & Medical Platforms',
    title: 'Secure Healthcare Solutions',
    description:
      'Building comprehensive e-commerce systems for medical stores with tRPC, PostgreSQL, and multi-layer security. Custom admin panels and user-facing interfaces.',
  },
  {
    id: 4,
    name: 'AI-Powered Applications',
    title: 'Machine Learning Integration',
    description:
      'Developing AI-powered consumer platforms with machine learning capabilities, modern UI, and intelligent user experiences for various industries.',
  },
  {
    id: 5,
    name: 'Strategic Program Direction',
    title: 'End-to-End Project Leadership',
    description:
      'Leading complete project lifecycles from concept to launch, including SEO strategy, lead generation architecture, and cross-border project management.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Next.js 15',
    percentage: 95,
    description: 'Latest React framework for production-ready fintech applications',
  },
  {
    id: 2,
    name: 'TypeScript',
    percentage: 90,
    description: 'Type-safe JavaScript for scalable applications',
  },
  {
    id: 3,
    name: 'React.js',
    percentage: 95,
    description: 'Modern UI library with hooks and state management',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    percentage: 90,
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    id: 5,
    name: 'Laravel/PHP',
    percentage: 85,
    description: 'Backend development and e-commerce solutions',
  },
  {
    id: 6,
    name: 'PostgreSQL',
    percentage: 85,
    description: 'Advanced database design and optimization',
  },
  {
    id: 7,
    name: 'tRPC',
    percentage: 90,
    description: 'Type-safe APIs and full-stack development',
  },
  {
    id: 8,
    name: 'MySQL',
    percentage: 80,
    description: 'Database management and optimization',
  },
  {
    id: 9,
    name: 'Cybersecurity',
    percentage: 85,
    description: 'CSRF, XSS, SQL Injection, IDOR protection',
  },
  {
    id: 10,
    name: 'SEO Strategy',
    percentage: 90,
    description: 'Search engine optimization and lead generation',
  }
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'FinTech',
    title: 'Global Finance Guarantee',
    description: 'Bank guarantee platform built with Next.js and Tailwind CSS, offering Tier-1 bank guarantees, SBLCs, and Letters of Credit.',
    link: 'https://www.globalfinanceguarantee.com/',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    img: Project2,
    category: 'FinTech',
    title: 'Heritage Cayman Bank',
    description: 'Immersive banking platform mockup with smooth animations and responsive design using ShadCN UI and Tailwind CSS.',
    link: 'https://hltd.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    img: Project3,
    category: 'FinTech',
    title: 'Cayora Finance',
    description: 'Full-stack financial platform with tRPC, NextAuth, and PostgreSQL for secure financial operations.',
    link: 'https://cayorafinance.com/',
    tech: ['Next.js', 'tRPC', 'NextAuth', 'PostgreSQL', 'TypeScript']
  },
  {
    id: 4,
    img: Project4,
    category: 'Web3',
    title: 'Master of Complications',
    description: 'Advanced Web3 platform with authentication and complex data management using modern TypeScript stack.',
    link: 'https://masterofcomplications.guru/',
    tech: ['Next.js', 'tRPC', 'NextAuth', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 5,
    img: Project5,
    category: 'Tools',
    title: 'BG Lookup',
    description: 'CSV parsing and data management tool with modern UI components and efficient data processing.',
    link: 'https://bglookup.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'CSV Processing']
  },
  {
    id: 6,
    img: Project6,
    category: 'Tools',
    title: 'BG EGN Validator',
    description: 'Advanced data validation and processing platform with intuitive user interface.',
    link: 'https://bgegn.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Data Validation']
  },
  {
    id: 7,
    img: Project1,
    category: 'Full Stack',
    title: 'ViraChemical',
    description: 'Comprehensive chemical management system built with Python Django, featuring secure operations and inventory management.',
    link: 'https://virachemical.com/',
    tech: ['Python', 'Django', 'PostgreSQL', 'Full Stack']
  },
  {
    id: 8,
    img: Project2,
    category: 'Agency',
    title: 'GenCoders Digital',
    description: 'Digital agency website offering realtor lead generation services with modern Python Flask backend.',
    link: 'https://gencoders.digital/',
    tech: ['Python', 'Flask', 'Tailwind CSS', 'Lead Generation']
  },

  {
    id: 9,
    img: Project4,
    category: 'Business',
    title: 'GDN Solution',
    description: 'Enterprise business solution platform with comprehensive service offerings and client management.',
    link: 'https://gdnsolution.com/',
    tech: ['PHP', 'Laravel', 'MySQL', 'Enterprise']
  },
  {
    id: 10,
    img: Project5,
    category: 'E-commerce',
    title: 'Buati Price',
    description: 'E-commerce pricing platform with dynamic pricing algorithms and user-friendly interface.',
    link: 'https://buatiprice.com/',
    tech: ['PHP', 'Laravel', 'MySQL', 'E-commerce']
  },
  {
    id: 11,
    img: Project6,
    category: 'Logistics',
    title: 'Alpha Cargo Line',
    description: 'Professional cargo and logistics management platform with tracking and scheduling capabilities.',
    link: 'https://alphacargoline.com/',
    tech: ['React', 'Node.js', 'Logistics', 'Tracking']
  },
  {
    id: 12,
    img: Project2,
    category: 'Portfolio',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing skills, projects, and experience with React and modern animations.',
    link: 'https://vice.contact',
    tech: ['React', 'Vite', 'Framer Motion', 'Modern UI']
  }
];

export const cv = [
  {
    id: 1,
    title: 'BSc in Finance',
    subtitle: 'Faculty of Economics, University of Rijeka (EFRI), Croatia',
    date: 'In Progress',
    description:
      'Currently pursuing a Bachelor of Science in Finance, combining academic knowledge with practical experience in fintech and financial platforms.',
    category: 'education',
  },
  {
    id: 2,
    title: 'High School Diploma',
    subtitle: 'Archdiocesan Classical High School "Don Frane Bulić" – Split, Croatia',
    date: '2016 - 2020',
    description:
      'Completed secondary education with focus on classical studies and academic excellence.',
    category: 'education',
  },
  {
    id: 3,
    title: 'Program Director & Full-Stack Developer',
    subtitle: 'Global Finance Guarantee – Bulgaria',
    date: '2025 - Present',
    description:
      'Directed the build and deployment of a modern, SEO-optimized fintech platform specializing in bank guarantees, SBLCs, and trade finance solutions. Integrated Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.',
    category: 'experience',
  },
  {
    id: 4,
    title: 'Founder & Full-Stack Developer',
    subtitle: 'ViraChemical – Croatia',
    date: '2025 - Present',
    description:
      'Created an EU-compliant research compound distribution platform for biotech and pharmaceutical markets. Managed full-stack development, security, and backend infrastructure.',
    category: 'experience',
  },
  {
    id: 5,
    title: 'Full-Stack Developer',
    subtitle: 'Master of Complications – Bulgaria',
    date: '2025',
    description:
      'Delivered a full-stack e-commerce system for medical store client with tRPC, PostgreSQL, and secure backend protocols. Built comprehensive admin panel and robust user-facing UI.',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Web Developer',
    subtitle: 'Various Clients (Kenya, Thailand, Bulgaria, Croatia)',
    date: '2024 - 2025',
    description:
      'Developed buatiprice.com and gdnsolution.com in Laravel/PHP/MySQL. Built AI-powered watch platform (viwatchai.com) with machine learning capabilities and modern UI.',
    category: 'experience',
  }
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Sarah Johnson',
    author: 'CEO, FinTech Startup',
    description:
      'Vice delivered an exceptional banking platform that exceeded our expectations. His expertise in Next.js and modern UI design helped us launch ahead of schedule with a product our users love.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Michael Chen',
    author: 'Product Manager, Tech Corp',
    description:
      'Working with Vice was a game-changer for our project. His full-stack skills and attention to detail resulted in a robust, scalable solution that handles our complex business requirements perfectly.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Emma Rodriguez',
    author: 'Startup Founder',
    description:
      'Vice built our entire e-commerce platform from scratch. His knowledge of modern frameworks and ability to deliver pixel-perfect designs made him an invaluable partner in our success.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'David Thompson',
    author: 'CTO, Digital Agency',
    description:
      'I highly recommend Vice for any complex web development project. His expertise in React, TypeScript, and backend technologies helped us deliver multiple client projects on time and within budget.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Lisa Park',
    author: 'Business Owner',
    description:
      'Vice transformed our business with a custom web application that streamlined our operations. His professional approach and technical expertise made the entire process smooth and efficient.',
  },
];
