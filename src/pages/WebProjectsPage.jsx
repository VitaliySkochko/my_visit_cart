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

export default function WebProjectsPage() {
  const { t } = useTranslation();

  // беремо масив проектів із JSON
  const PROJECTS = t('web_projects', { returnObjects: true });

  // мапимо зображення вручну, бо вони з локальних імпортів
  const images = [shot6, shot5, shot4, shot3, shot2, shot1];

  return (
    <main className="web-projects">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>{t('web_projects_title')}</h1>
        </div>
      </header>

      {/* LIST */}
      <section className="wp-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            year={p.year}
            desc={p.desc}
            tags={p.tags}
            image={images[i]} // 👈 додаємо відповідне зображення
            href={p.href}
            delay={0.06 * (i + 1)}
          />
        ))}
      </section>
    </main>
  );
}
