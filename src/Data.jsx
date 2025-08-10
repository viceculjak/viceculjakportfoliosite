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
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Frontend Development',
    title: 'Website and Mobile App',
    description:
      'Responsive & Pixel-Perfect components for a website layout. Scalable mobile app.',
  },
  {
    id: 2,
    name: ' Backend Development ',
    title: ' Server-Side Programming and Database Management & APIs ',
    description:
      'Using web frameworks such as Django (Python), Express (Node.js), and Ruby on Rails, Database Management using DBs like MongoDB, SQL, and Integrating APIs.',
  },
  {
    id: 3,
    name: ' Blockchain Development ',
    title: ' Smart Contract and Web3 ',
    description:
      ' Building Dapps such as DEX, NFT Marketplace, P2E game site, Wallet App, Chain Explorer, and Writing Smart contract, and Integrating contracts to the apps by using Web3 . ',
  },
  {
    id: 4,
    name: ' Solving Problems ',
    title: ' Test & Improvement ',
    description:
      ' Testing(QA test, Unit test..) and reviewing codes. Fixing bugs, Improving codes, and Delivering turn-key products ',
  },
  {
    id: 5,
    name: ' Production ',
    title: ' Web hosting and Mobile app publishment ',
    description:
      'Phurchasing domain, Hosting to the internet, and Publishing android/ios apps to the google play store.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML/CSS',
    percentage: 100,
    description:
      '',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 100,
    description:
      '',
  },

  {
    id: 3,
    name: 'React.js',
    percentage: 100,
    description:
      '',
  },

  {
    id: 4,
    name: 'Node.js/Express',
    percentage: 100,
    description:
      '',
  },

  {
    id: 5,
    name: 'MongoDB/MySQL',
    percentage: 100,
    description:
      '',
  },

  {
    id: 6,
    name: 'Typescript',
    percentage: 100 ,
    description:
      '',
  },
  {
    id: 7,
    name: 'Blockchain',
    percentage: 100,
    description:
      '',
  },
  {
    id: 8,
    name: 'TailwindCSS',
    percentage: 100,
    description:
      '',
  },
  {
    id: 9,
    name: 'Python',
    percentage: 100,
    description:
      '',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Frontend',
    title: 'Vice.site',
    description:
      'Portfolio website coded in vite, React.js, and TailwindCSS.',
  },
  {
    id: 2,
    img: Project2,
    category: 'Backend',
    title: 'gdnsolution.com',
    description:
      'Gdn Solutions was coded in PHP, Laravel, and MySQL had much fun coding this!',
  },
  {
    id: 3,
    img: Project3,
    category: 'Blockchain',
    title: 'Web3 Buy Me A Cookie',
    description:
      'Blockchain based Buy Me A Cookie web app with React.js, Next.js, TailwindCSS and Thirdweb.',
  },
  {
    id: 4,
    img: Project4,
    category: 'Frontend',
    title: 'tayaliving.com',
    description:
      'Modern responsive website built with React.js and TailwindCSS, featuring clean design and smooth user experience.',
  },
  {
    id: 5,
    img: Project5,
    category: 'Blockchain',
    title: 'NFT Marketplace DApp',
    description:
      'Decentralized NFT marketplace built with Solidity smart contracts, React.js, and Web3 integration for seamless trading.',
  },
  {
    id: 6,
    img: Project6,
    category: 'Frontend',
    title: 'buatiprice.com',
    description:
      'buatiprice.com was coded in php, mysql and Laravel.',
  },

];

export const cv = [
  {
    id: 1,
    title: 'CY Hristov Botev',
    subtitle: 'High School ',
    date: '2020 - Present',
    description:
      'Focused on mathematics, computer science, and technology. Developed foundational programming skills and completed advanced coursework in software development.',
    category: 'education',
  },


  {
    id: 4,
    title: 'Chief Technical Officer',
    subtitle: 'Soft Tech Inc.',
    date: '2020 - PRESENT',
    description:
      'Leading technical strategy and overseeing development teams. Architecting scalable solutions and implementing cutting-edge technologies for enterprise clients.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Full Stack web developer',
    subtitle: 'Kana Design Studio',
    date: '2019 - 2020',
    description:
      'Developed responsive web applications using React.js, Node.js, and MongoDB. Collaborated with design teams to create pixel-perfect user interfaces and optimize performance.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Blockchain Engineer',
    subtitle: 'Fiverr.com',
    date: '2018 - 2019',
    description:
      'Specialized in smart contract development using Solidity. Built DeFi protocols, NFT marketplaces, and Web3 integrations for various blockchain platforms.',
    category: 'experience',
  },

  {
    id: 7,
    title: 'Dapp developer',
    subtitle: 'Fiverr.com',
    date: '2017 - 2018',
    description:
      'Developed decentralized applications (DApps) with modern Web3 technologies. Created user-friendly interfaces for blockchain interactions and cryptocurrency transactions.',
    category: 'experience',
  },

  {
    id: 7,
    title: 'Frontend Engineer',
    subtitle: 'Fiverr.com',
    date: '2016 - 2017',
    description:
      'Built responsive and interactive user interfaces using HTML5, CSS3, and JavaScript. Focused on creating seamless user experiences and cross-browser compatibility.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Vice delivered an exceptional blockchain solution for our company. His expertise in smart contracts and Web3 integration exceeded our expectations. Highly recommended!',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Working with Vice was a pleasure. He perfectly translated our design concepts into a responsive, modern website. His attention to detail is outstanding.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Vice built our gym management system from scratch. The full-stack solution is robust, user-friendly, and has improved our operations significantly.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'As a startup founder, I needed a reliable tech partner. Vice delivered a scalable platform that grew with our business. His technical leadership is invaluable.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Vice created a stunning portfolio website that showcases my photography beautifully. The site is fast, responsive, and exactly what I envisioned.',
  },
];
