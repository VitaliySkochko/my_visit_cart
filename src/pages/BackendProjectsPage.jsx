// =============================
// src/pages/BackendProjectsPage.jsx
// =============================
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css'; // reuse unified styles (web-hero, wp-list, white card)

// images
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
      {/* HERO — уніфікований solid-білий (використовує стилі з WebProjectsPage.css) */}
      <header className="web-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="web-hero__solid">
          <h1 className="web-hero__title">{t('backend_projects_title')}</h1>
        </div>
      </header>

      {/* LIST */}
      <section className="wp-list">
        {BACKEND_PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={0.06 * (i + 1)} showLinks={false} />
        ))}
      </section>
    </main>
  );
}
