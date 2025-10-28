// =============================
// src/pages/ProjectsPage.jsx
// =============================
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectsPage.css';
import { ArrowRight } from 'lucide-react';

import webThumb from '../img/web-projects-card.png';
import backendThumb from '../img/web-projects-card.webp';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const cards = [
    {
      to: '/projects/web',
      title: t('projects_web_title'),
      alt: t('projects_web_alt'),
      img: webThumb,
      delay: 0.06,
    },
    {
      to: '/projects/backend',
      title: t('projects_backend_title'),
      alt: t('projects_backend_alt'),
      img: backendThumb,
      delay: 0.10,
    },
  ];

  return (
    <main className="projects-page">
      {/* HERO — solid-білий як About/Contact */}
      <header className="projects-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="projects-hero__solid">
          <h1 className="projects-hero__title">{t('projects_title')}</h1>
        </div>
      </header>

      {/* GRID */}
      <section className="pl-grid">
        {cards.map((c, i) => (
          <article key={c.to} className="white-card pl-card appear" style={{ animationDelay: `${c.delay}s` }}>
            <div className="pl-card__thumb" aria-hidden="true">
              <img src={c.img} alt={c.alt} />
              <span className="pl-card__shine" />
            </div>
            <div className="pl-card__content">
              <h3 className="pl-card__title">{c.title}</h3>
              <Link to={c.to} className="link-arrow">
                <span>{t('projects_explore')}</span>
                <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

