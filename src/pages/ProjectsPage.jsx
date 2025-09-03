// src/pages/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <main className="projects-landing">
      <header className="pl-hero">
        <div className="pl-hero__glass">
          <h1>Projects</h1>
          <p>Browse by category. Mobile & Desktop apps are coming soon. For now — Web projects.</p>
        </div>
      </header>

      <section className="pl-grid">
        <Link to="/projects/web" className="pl-card">
          <div className="pl-card__badge">Category</div>
          <h3 className="pl-card__title">Web Projects</h3>
          <p className="pl-card__desc">React, Node.js, Firebase/PostgreSQL, Render, and more.</p>
          <span className="pl-card__cta">View projects →</span>
        </Link>

        {/* приклад майбутніх категорій (поки disabled) */}
        <div className="pl-card pl-card--disabled" aria-disabled="true">
          <div className="pl-card__badge">Soon</div>
          <h3 className="pl-card__title">Mobile Apps</h3>
          <p className="pl-card__desc">React Native / Kotlin / Swift — planned section.</p>
          <span className="pl-card__cta">Coming soon</span>
        </div>
      </section>
    </main>
  );
}
