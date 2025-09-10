import React from 'react';
import '../styles/ContactPage.css';   // reuse glass styles
import '../styles/BigSportPage.css';  // light additions

export default function BigSportPage() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <header className="contact-hero appear">
        <div className="contact-hero__glass">
          <h1>BigSport</h1>
          <p>A modern sports platform: instant news, clear analytics, and easy navigation.</p>
        </div>
      </header>

      {/* GRID */}
      <section className="contact-grid">
        {/* About BigSport */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.05s' }}>
          <h3>About BigSport</h3>
          <p>
            BigSport is a modern sports platform created for those who want to get the most important updates first-hand:
            real-time news, clear analysis, and convenient navigation across clubs, tournaments, and sports.
          </p>
        </article>

        {/* Mission */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.1s' }}>
          <h3>Mission</h3>
          <p>
            To develop sports culture in Ukraine: deliver information quickly, explain the context,
            and inspire with the stories of athletes and teams.
          </p>
        </article>

        {/* Coverage */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.15s' }}>
          <h3>Coverage</h3>
          <ul className="list">
            <li><strong>Ukrainian Football:</strong> UPL, Ukrainian Cup, club pages, and the national team.</li>
            <li><strong>European Leagues:</strong> Premier League, La Liga, Serie A, Bundesliga, Ligue 1.</li>
            <li><strong>European Cups:</strong> Champions League, Europa League, Conference League.</li>
            <li><strong>Biathlon:</strong> World Cup, championships, Ukrainian athletes’ performances.</li>
            <li><strong>Other Sports:</strong> boxing, tennis, MMA, futsal, and more.</li>
          </ul>
        </article>

        {/* Formats */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.2s' }}>
          <h3>Formats</h3>
          <ul className="list">
            <li><strong>News</strong> — key facts only, no fluff.</li>
            <li><strong>Reviews & Analytics</strong> — details, numbers, and trends.</li>
            <li><strong>Interviews</strong> — voices of athletes, coaches, and experts.</li>
            <li><strong>Club Archive</strong> — team pages that left competitions but remain in history.</li>
          </ul>
        </article>

        {/* Principles */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.25s' }}>
          <h3>Principles</h3>
          <ul className="list">
            <li><strong>Speed</strong> — publish fast, update responsibly.</li>
            <li><strong>Accuracy</strong> — respect for facts and sources.</li>
            <li><strong>Usability</strong> — logical structure and clean interface.</li>
            <li><strong>Respect</strong> — ethical standards and professional language.</li>
          </ul>
        </article>

        {/* Audience */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.3s' }}>
          <h3>Audience</h3>
          <p>
            For fans who want to stay updated, for journalists and authors who need verified facts,
            and for everyone who loves sports as much as we do.
          </p>
        </article>

        {/* Team & Contact */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.35s' }}>
          <h3>Team & Contact</h3>
          <ul className="list">
            <li>Created with passion for sports.</li>
            <li><strong>Founder & Editor-in-Chief:</strong> Vitaliy Skochko</li>
            <li><strong>Email:</strong> <a href="mailto:bigsportssait@gmail.com">bigsportssait@gmail.com</a></li>
          </ul>
        </article>

        {/* Links */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.4s' }}>
          <h3>Links</h3>
          <div className="links-grid">
            <a className="about-teaser__cta" href="https://bigsport.com.ua/" target="_blank" rel="noreferrer">Website</a>
            <a className="about-teaser__cta" href="https://www.instagram.com/bigsport.com.ua/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="about-teaser__cta" href="https://www.youtube.com/@BigSport-TV1" target="_blank" rel="noreferrer">YouTube</a>
            <a className="about-teaser__cta" href="https://www.linkedin.com/company/bigsport/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </article>
      </section>
    </main>
  );
}
