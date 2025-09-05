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
      <header className="pl-hero">
        <h1 className="pl-hero__title">Project</h1>
      </header>

      {/* Web Projects */}
      <section className="pl-grid">
  <article className="pl-card pl-card--pro">
    <div className="pl-card__thumb" aria-hidden="true">
      <img src={webThumb} alt="Web Projects" />
      <span className="pl-card__shine" />
    </div>

    <div className="pl-card__content">
      <span className="pl-card__badge">Web projects</span>
      <h3 className="pl-card__title">Web Projects</h3>
      <p className="pl-card__desc">
        React, Node.js, Firebase / PostgreSQL, Render — performant, elegant, scalable.
      </p>
      <Link to="/projects/web" className="pl-card__cta-btn">View →</Link>
    </div>
  </article>
</section>

    </main>
  );
}
