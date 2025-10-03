// src/pages/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsPage.css';

// 👉 Підстав своє невелике квадратне фото
import webThumb from '../img/web-projects-card.png';

export default function ProjectsPage() {
  return (
    <main className="projects-landing">
      {/* HERO тільки з заголовком */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>Project</h1>
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
      <Link to="/projects/web" className="pl-card__cta-btn">View →</Link>
    </div>
  </article>
</section>

    </main>
  );
}
