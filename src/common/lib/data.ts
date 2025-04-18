import React from 'react';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import glaucomaImg from '@/../public/images/glaucoma.jpeg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DAV Public School',
    location: 'Patna,Bihar',
    description:
      'Completed 10th and scored 86% in Board Exams.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'April 2018 - March 2019',
  },
  {
    title: 'Satyam International School',
    location: 'Patna,Bihar',
    description:
      'Completed 12th and scored 76% in Board Exams.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'March 2020 - June 2021',
  },
  {
    title: 'Siddaganga Institute of Technology',
    location: 'Tumkur,Karnataka',
    description:
      'Currently pursuing my B.E degree in major of Computer Science and Engineering with current CGPA as 8.20',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Dec 2021 - Present',
  },
  {
    title: 'Purple Shorts Bootcamp',
    location: 'Bangalore,karnataka',
    description: `Learning about Full stack Web Developer`,
    icon: React.createElement(BookIcon),
    date: 'Mar 2025 - Present',
  },
] as const;



export const projectsData = [
  {
    title: 'Intrusion Detection in Banking System Using ML',
    description: `This Project aims to deetect any type of cybersecurity in Banking Systems`,
    tags: ['Machine learning Algorithm', 'Random Forest', 'Decision Tree', 'XGBoost', 'Python'],
    imageUrl: auditMasterImg,
    link: 'https://github.com/Utkarshdev12/intrusion-detection-in-banking',
  },
  {
    title: 'Glaucoma Detection using CNN', 
    description:
      'This project aims to detect Glaucoma using Convolutional Neural Network (CNN) algorothm',
    tags: ['Machine learning algorithm', 'CNN', 'Python', 'Kaggle Datasets'],
    imageUrl: glaucomaImg,
    link: 'https://github.com/Utkarshdev12/Glaucoma-detection-usinng-CNN',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/Utkarshdev12/nextjs-portfolio',
  }
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg']
] as const;
