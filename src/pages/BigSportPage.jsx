// =============================
// src/pages/BigSportPage.jsx
// =============================
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ContactPage.css'; // спільні токени/анімації/white-card
import '../styles/BigSportPage.css';
import { Globe, Instagram, Youtube, Linkedin } from 'lucide-react';

import img1 from '../img/project-1.jpg';

export default function BigSportPage() {
  const { t } = useTranslation();

  // списки (безпечне читання масивів)
  const coverage = Array.isArray(t('bigsport_coverage_items', { returnObjects: true }))
    ? t('bigsport_coverage_items', { returnObjects: true })
    : [];

  const formats = Array.isArray(t('bigsport_formats_items', { returnObjects: true }))
    ? t('bigsport_formats_items', { returnObjects: true })
    : [];

  const principles = Array.isArray(t('bigsport_principles_items', { returnObjects: true }))
    ? t('bigsport_principles_items', { returnObjects: true })
    : [];

  return (
    <main className="bigsport-page">
      {/* HERO — уніфікований solid-білий */}
      <header className="bigsport-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="bigsport-hero__solid">
          <h1 className="bigsport-hero__title">{t('bigsport_title')}</h1>
        </div>
      </header>

      {/* === ONE PHOTO (NO SLIDER) === */}
      <section
        className="bigsport-photo appear"
        style={{
          animationDelay: '.05s',
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="bigsport-photo__overlay" />
        
      </section>

      {/* === GRID === */}
      <section className="bigsport-grid">
        <article className="white-card appear" style={{ animationDelay: '.10s' }}>
          <h3>{t('bigsport_about_title')}</h3>
          <p>{t('bigsport_about_text')}</p>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.15s' }}>
          <h3>{t('bigsport_mission_title')}</h3>
          <p>{t('bigsport_mission_text')}</p>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.20s' }}>
          <h3>{t('bigsport_coverage_title')}</h3>
          <ul className="list">
            {coverage.map((it, idx) => (
              <li key={`cov-${idx}`}>
                <strong>{it.label}:</strong> {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.25s' }}>
          <h3>{t('bigsport_formats_title')}</h3>
          <ul className="list">
            {formats.map((it, idx) => (
              <li key={`fmt-${idx}`}>
                <strong>{it.label}</strong> — {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.30s' }}>
          <h3>{t('bigsport_principles_title')}</h3>
          <ul className="list">
            {principles.map((it, idx) => (
              <li key={`prn-${idx}`}>
                <strong>{it.label}</strong> — {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.35s' }}>
          <h3>{t('bigsport_audience_title')}</h3>
          <p>{t('bigsport_audience_text')}</p>
        </article>

        <article className="white-card appear" style={{ animationDelay: '.40s' }}>
          <h3>{t('bigsport_team_title')}</h3>
          <ul className="list">
            <li>
              <strong>{t('bigsport_founder_label')}:</strong> {t('name')}
            </li>
            <li>
              <strong>{t('bigsport_email_label')}:</strong>{' '}
              <a href="mailto:bigsportssait@gmail.com">bigsportssait@gmail.com</a>
            </li>
          </ul>
        </article>

        {/* LINKS */}
        <article className="white-card appear" style={{ animationDelay: '.45s' }}>
          <h3>{t('bigsport_links_title')}</h3>
          <div className="socials socials--icons">
            <a
              className="soc soc--web"
              href="https://bigsport.com.ua/"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
            <a
              className="soc soc--instagram"
              href="https://www.instagram.com/bigsport.com.ua/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              className="soc soc--youtube"
              href="https://www.youtube.com/@BigSport-TV1"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              className="soc soc--linkedin"
              href="https://www.linkedin.com/company/bigsport/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
