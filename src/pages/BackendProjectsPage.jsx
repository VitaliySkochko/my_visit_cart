// src/pages/BackendProjectsPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css';
import shot1 from '../img/project-1.jpg';
import shot2 from '../img/backend-project_2.webp';

export default function BackendProjectsPage() {
  const { t } = useTranslation();

  const BACKEND_PROJECTS = [
    {
      title: t('backend_project_1_title'),
      year: 2025,
      desc: t('backend_project_1_desc'),
      tags: ['Node.js', 'Express', 'OpenAI API', 'Firebase', 'Automation', 'Cloud Functions'],
      image: shot1,
    },
    {
      title: t('backend_project_capi_title'),
      year: 2025,
      desc: t('backend_project_capi_desc'),
      tags: ['Node.js', 'Express', 'AppsFlyer', 'RevenueCat', 'Facebook CAPI', 'Amplitude'],
      image: shot2,
    },
  ];

  return (
    <main className="web-projects">
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>{t('backend_projects_title')}</h1>
        </div>
      </header>

      <section className="wp-list">
        {BACKEND_PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={0.06 * (i + 1)} showLinks={false} />
        ))}
      </section>
    </main>
  );
}
