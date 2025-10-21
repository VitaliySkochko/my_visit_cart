import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css';
import shot1 from '../img/project-1.jpg';

export default function BackendProjectsPage() {
  const { t } = useTranslation();

  const BACKEND_PROJECTS = [
    {
      title: t('backend_project_1_title'),
      year: 2025,
      desc: t('backend_project_1_desc'),
      // якщо хочеш перекладати теги — винеси їх теж у JSON
      tags: ['Node.js', 'Express', 'OpenAI API', 'Firebase', 'Automation', 'Cloud Functions'],
      image: shot1,
      href: 'https://bigsport.com.ua',
    },
  ];

  return (
    <main className="web-projects">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>{t('backend_projects_title')}</h1>
        </div>
      </header>

      {/* LIST */}
      <section className="wp-list">
        {BACKEND_PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={0.06 * (i + 1)} />
        ))}
      </section>
    </main>
  );
}
