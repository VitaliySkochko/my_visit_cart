// src/pages/WebProjectsPage.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css';

// тимчасові зображення (поклади свої у /src/img/)
import shot1 from '../img/project-1.jpg';
import shot2 from '../img/project-1.jpg';
import shot3 from '../img/project-1.jpg';

const PROJECTS = [
  {
    title: 'BigSports — Sports News Portal',
    subtitle: 'React • Firebase • Admin Panel • Analytics',
    desc: 'Content platform with Firestore, auth, admin tools, category feeds, and modern glossy UI.',
    tags: ['React', 'Firestore', 'Auth', 'Analytics'],
    image: shot1,
    href: 'https://example.com', // заміни на прод
    repo: 'https://github.com/yourname/bigsports', // опційно
  },
  {
    title: 'PDF Generator API (PDM)',
    subtitle: 'Node.js • PDFKit • Firebase Storage • Render',
    desc: 'Backend that takes SolidWorks-like JSON and generates multi-page PDFs with stamps by GOST.',
    tags: ['Node.js', 'PDFKit', 'Firebase Storage'],
    image: shot2,
    href: 'https://example.com',
    repo: 'https://github.com/yourname/pdm_a4',
  },
  {
    title: 'SkinHelper — AI Skin Analysis',
    subtitle: 'React • Node • PostgreSQL • OpenAI',
    desc: 'E-commerce + AI pipeline for skin analysis, sleek admin, consultations, and payments flow.',
    tags: ['React', 'Node', 'PostgreSQL', 'OpenAI'],
    image: shot3,
    href: 'https://example.com',
    repo: 'https://github.com/yourname/skinhelper',
  },
];

export default function WebProjectsPage() {
  return (
    <main className="web-projects">
      <header className="wp-hero">
        <div className="wp-hero__glass">
          <h1>Web Projects</h1>
          <p>Hand-picked work with a glossy, magazine-inspired aesthetic.</p>
        </div>
      </header>

      <section className="wp-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
    </main>
  );
}
