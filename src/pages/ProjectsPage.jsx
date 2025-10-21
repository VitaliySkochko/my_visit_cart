import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectsPage.css';
import { ArrowRight } from 'lucide-react';

import webThumb from '../img/web-projects-card.png';
import backendThumb from '../img/web-projects-card.png';

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <main className="projects-landing">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>{t('projects_title')}</h1>
        </div>
      </header>

      <section className="pl-grid">
        {/* Web Projects */}
        <article className="pl-card pl-card--pro">
          <div className="pl-card__thumb" aria-hidden="true">
            <img src={webThumb} alt={t('projects_web_alt')} />
            <span className="pl-card__shine" />
          </div>
          <div className="pl-card__content">
            <h3 className="pl-card__title">{t('projects_web_title')}</h3>
            <Link to="/projects/web" className="link-arrow">
              <span>{t('projects_explore')}</span>
              <ArrowRight className="link-arrow__icon" size={20} strokeWidth={2.4} />
            </Link>
          </div>
        </article>

        {/* Backend Projects */}
        <article className="pl-card pl-card--pro">
          <div className="pl-card__thumb" aria-hidden="true">
            <img src={backendThumb} alt={t('projects_backend_alt')} />
            <span className="pl-card__shine" />
          </div>
          <div className="pl-card__content">
            <h3 className="pl-card__title">{t('projects_backend_title')}</h3>
            <Link to="/projects/backend" className="link-arrow">
              <span>{t('projects_explore')}</span>
              <ArrowRight className="link-arrow__icon" size={20} strokeWidth={2.4} />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
