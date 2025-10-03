// src/pages/AboutPage.jsx
import React from "react";
import "../styles/AboutPage.css";
import portrait from "../img/portrait.png";

// logos
import bigsportLogo from "../img/project-1.jpg";
import intwritingLogo from "../img/intwriting.png";

// duration utility (English version)
function formatDuration(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0 && months === 0) return "less than a month";
  if (years === 0) return `${months} mo${months > 1 ? "s" : ""}`;
  if (months === 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
}

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: ".02s" }}>
        <div className="contact-hero__glass">
          <h1>Vitaliy Skochko</h1>
        </div>
      </header>

      {/* BIO */}
      <section className="about-bio">
        <div className="about-bio__media appear" data-delay="0.05s">
          <div className="bio-photo">
            <img src={portrait} alt="Portrait of Vitaliy Skochko" />
            <span className="bio-photo__shine" aria-hidden="true" />
          </div>
        </div>

        <div className="about-bio__text glass-card appear" data-delay="0.1s">
          <h2>Biography</h2>
          <p>
            I am a software developer at <strong>Intelligent Writing</strong>, focusing on building
            modern applications with <strong>React</strong> as my primary technology stack.
            My journey into IT began in <strong>November 2023</strong> when I started learning
            Java to understand the fundamentals of <strong>Object-Oriented Programming</strong>.
          </p>
          <p>
            I studied entirely on my own, driven by curiosity and a desire to create something
            meaningful. The motivation came while I was working as a copywriter at a sports news
            website. When that project closed, I was inspired to build my own platform —
            which eventually became <strong>BigSport</strong>, a sports media platform I founded
            and developed as a full-stack engineer.
          </p>
          <p>
            Beyond coding, I am passionate about product thinking — understanding how technology
            can solve real problems, improve user experience, and scale into something bigger.
          </p>
        </div>
      </section>

      {/* CAREER */}
      <section className="about-career">
        <h2 className="appear" data-delay="0.05s">IT Career</h2>
        <ol className="timeline">

          {/* Intelligent Writing — Eng Manager */}
          <li className="appear" data-delay="0.16s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">

              <div className="tl-company-center">
                <a
                  href="https://intwriting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="Intelligent Writing"
                >
                  <img src={intwritingLogo} alt="Intelligent Writing logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">Intelligent Writing</span>
              </div>

              <div className="tl-meta">
                Oct 2025 – Present · {formatDuration("2025-10-01")}
              </div>

              <div className="tl-title">Engineering Manager</div>
            </div>
          </li>

          {/* Intelligent Writing — Full-stack */}
          <li className="appear" data-delay="0.12s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">

              <div className="tl-company-center">
                <a
                  href="https://intwriting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="Intelligent Writing"
                >
                  <img src={intwritingLogo} alt="Intelligent Writing logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">Intelligent Writing</span>
              </div>

              <div className="tl-meta">
                Feb 2025 – Oct 2025 · {formatDuration("2025-02-01", "2025-10-01")}
              </div>

              <div className="tl-title">Full-stack Web Developer</div>
            </div>
          </li>

          {/* BigSport */}
          <li className="appear" data-delay="0.08s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">

              {/* Company centered */}
              <div className="tl-company-center">
                <a
                  href="https://bigsport.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="BigSport"
                >
                  <img src={bigsportLogo} alt="BigSport logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">BigSport</span>
              </div>

              {/* Dates */}
              <div className="tl-meta">
                Apr 2025 – Present · {formatDuration("2025-04-01")}
              </div>

              {/* Role */}
              <div className="tl-title">Founder & Full-stack Developer</div>
            </div>
          </li>




        </ol>
      </section>



    </main>
  );
}
