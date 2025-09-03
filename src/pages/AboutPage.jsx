import React from 'react';
import '../styles/AboutPage.css';
import portrait from '../img/portrait.png'; // put your photo here

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <div className="about-hero__glass">
          <h1 className="about-hero__title">Vitaliy Skochko</h1>
          <p className="about-hero__subtitle">Frontend / Full-Stack Developer</p>
        </div>
      </header>

      <section className="about-bio">
        <div className="about-bio__media">
          <img src={portrait} alt="Vitaliy Skochko portrait" />
        </div>
        <div className="about-bio__text">
          <h2>Biography</h2>
          <p>
            I build modern web apps with a “glossy magazine” aesthetic.
            I care about performance, accessibility, and clean architecture.
            I’ve led projects end-to-end — from idea and design to deployment.
          </p>
          <p>
            Comfortable with React, Node.js, PostgreSQL/Firebase, CI/CD on Render,
            and product analytics. I enjoy polishing UI details and shipping value fast.
          </p>
        </div>
      </section>

      <section className="about-career">
        <h2>IT Career</h2>
        <ol className="timeline">
          <li>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-meta">2025 — Now</div>
              <div className="tl-title">Full-Stack Projects</div>
              <p>React + Node services, auth flows, PDF generation backends, Firebase/Render deployments.</p>
            </div>
          </li>
          <li>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-meta">2024 — 2025</div>
              <div className="tl-title">Sports News Platform</div>
              <p>Built a content platform with Firestore, admin panel, analytics, and automated ingestion.</p>
            </div>
          </li>
          <li>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-meta">Earlier</div>
              <div className="tl-title">Frontend Foundations</div>
              <p>Solid grounding in React, component design, state management, and UI performance.</p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
