// =============================
// src/pages/WebProjectsPage.jsx
// =============================
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import '../styles/WebProjectsPage.css';

// images
import shot1 from '../img/project-1.jpg';
import shot2 from '../img/project-2.PNG';
import shot3 from '../img/project-3.jpg';
import shot4 from '../img/project-4.png';
import shot5 from '../img/project-5.jpg';
import shot6 from '../img/intwriting.png';
import shot7 from '../img/project-7.jpg';
import shot8 from '../img/project-8.png';
import luxMikrocementLogo from '../img/LM_01.png';
import cognitiveDefenceLogo from '../img/cd.png';

const hiddenWebProjectUrls = new Set([
  'https://appmachine.store',
  'https://social-network-spilno.web.app',
]);

const normalizeUrl = (url = '') => url.replace(/\/$/, '');

export default function WebProjectsPage() {
  const { t } = useTranslation();

  // беремо масив проектів із JSON безпечно
  const raw = t('web_projects', { returnObjects: true });
  const PROJECTS = Array.isArray(raw) ? raw : [];

  // мапимо зображення до фільтрації, щоб інші проєкти зберегли свої assets
  const images = [cognitiveDefenceLogo, luxMikrocementLogo, shot8, shot7, shot6, shot5, shot4, shot3, shot2, shot1];
  const visibleProjects = PROJECTS
    .map((project, index) => ({ project, image: images[index % images.length] }))
    .filter(({ project }) => !hiddenWebProjectUrls.has(normalizeUrl(project.href)));

  return (
    <main className="web-projects">
      <header className="web-projects__intro">
        <h1 className="page-title-accent page-title-accent--enter">{t('web_projects_title')}</h1>
      </header>

      <section className="wp-list">
        {visibleProjects.map(({ project: p, image }, i) => (
          <ProjectCard
            key={`${p.title}-${i}`}
            title={p.title}
            year={p.year}
            desc={p.desc}
            tags={p.tags}
            image={image}
            href={p.href}
            delay={0.06 * (i + 1)}
          />
        ))}
      </section>
    </main>
  );
}
