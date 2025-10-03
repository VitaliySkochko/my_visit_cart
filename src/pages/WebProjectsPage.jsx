import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css';

// тимчасові зображення (поклади свої у /src/img/)
import shot1 from '../img/project-1.jpg';
import shot2 from '../img/project-2.PNG';
import shot3 from '../img/project-3.jpg';
import shot4 from '../img/project-4.png';
import shot5 from '../img/project-5.jpg';


const PROJECTS = [
  {
  title: 'SkinHelper — AI-Powered Cosmetics Store',
  desc: 'An innovative e-commerce platform with AI-driven skin analysis. The frontend is built with React, while the backend uses JavaScript with Express and an SQL database. Features include personalized AI skin diagnostics, product recommendations, and a modern shopping experience.',
  tags: ['React', 'Express', 'JavaScript', 'SQL', 'AI'],
  image: shot5, // заміниш на скріншот свого сайту
  href: 'https://www.skinhelper.store/',
},

  {
  title: 'Appmachine.store — Trusted Mobile Apps',
  desc: 'A platform showcasing trusted iOS and Android apps — already published, always available. Built with React and deployed on Render.com, with EmailJS integration for customer communication and Microsoft Clarity for analytics.',
  tags: ['React', 'Render.com', 'EmailJS', 'Microsoft Clarity'],
  image: shot4, 
  href: 'https://appmachine.store',
},

  {
  title: 'Busov — Freight Transport Services',
  desc: 'A corporate website for cargo transportation in Kyiv and across Ukraine. Developed with React and Firebase, featuring an integrated EmailJS service for direct client inquiries and email notifications.',
  tags: ['React', 'Firebase', 'EmailJS'],
  image: shot3, 
  href: 'https://busov.com.ua',
},

{
  title: 'Spilno — Community Social Network',
  desc: 'An experimental social network for communities, developed with React and Firebase. Features real-time data, authentication, and a modern UI designed for interaction and engagement.',
  tags: ['React', 'Firebase', 'Social Network'],
  image: shot2, // заміниш на свій скріншот
  href: 'https://social-network-spilno.web.app/',
},

  {
  title: 'BigSPORT — Sports News Website',
  desc: 'A dynamic sports news portal built with React and Firebase. Includes automated news parsing and rewriting powered by ChatGPT, with a Node.js + Express backend for processing and Firestore for data storage.',
  tags: ['React', 'Firebase', 'Node.js', 'Express', 'OpenAI'],
  image: shot1, // заміниш на скрін свого сайту
  href: 'https://bigsport.com.ua/', 
},
  
];

export default function WebProjectsPage() {
  return (
    <main className="web-projects">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>Web Projects</h1>
        </div>
      </header>


      {/* LIST */}
      <section className="wp-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={0.06 * (i + 1)} />
        ))}
      </section>
    </main>
  );
}
