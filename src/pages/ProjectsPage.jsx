import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsPage.css';
import { ArrowRight } from 'lucide-react'; // 👈 додаємо іконку

import webThumb from '../img/web-projects-card.png';

export default function ProjectsPage() {
  return (
    <main className="projects-landing">
      {/* HERO тільки з заголовком */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>Projects</h1>
        </div>
      </header>

      {/* Web Projects */}
      <section className="pl-grid">
        <article className="pl-card pl-card--pro">
          <div className="pl-card__thumb" aria-hidden="true">
            <img src={webThumb} alt="Web Projects" />
            <span className="pl-card__shine" />
          </div>

          <div className="pl-card__content">
            <h3 className="pl-card__title">Web Projects</h3>

            {/* 👇 заміна кнопки на стрілку */}
            <Link to="/projects/web" className="link-arrow">
              <span>Explore</span>
              <ArrowRight className="link-arrow__icon" size={20} strokeWidth={2.4} />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
