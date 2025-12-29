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
import shot6 from '../img/project-6.svg';
import shot7 from '../img/project-7.jpg';


export default function WebProjectsPage() {
  const { t } = useTranslation();

  // беремо масив проектів із JSON безпечно
  const raw = t('web_projects', { returnObjects: true });
  const PROJECTS = Array.isArray(raw) ? raw : [];

  // мапимо зображення вручну, бо вони з локальних імпортів
  const images = [shot7, shot6, shot5, shot4, shot3, shot2, shot1];

  return (
    <main className="web-projects">
      {/* HERO — уніфікований solid-білий, як на About/Contact/Projects */}
      <header className="web-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="web-hero__solid">
          <h1 className="web-hero__title">{t('web_projects_title')}</h1>
        </div>
      </header>

      {/* LIST */}
      <section className="wp-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={`${p.title}-${i}`}
            title={p.title}
            year={p.year}
            desc={p.desc}
            tags={p.tags}
            image={images[i % images.length]}
            href={p.href}
            delay={0.06 * (i + 1)}
          />
        ))}
      </section>
    </main>
  );
}

