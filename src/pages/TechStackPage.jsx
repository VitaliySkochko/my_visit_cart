// =============================
// src/pages/TechStackPage.jsx
// =============================
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/TechStackPage.css';

export default function TechStackPage() {
  const { t } = useTranslation();

  // Безпечно читаємо масив груп зі словника
  const raw = t('stack', { returnObjects: true });
  const STACK = Array.isArray(raw) ? raw : [];

  return (
    <main className="tech-page">
      {/* HERO — уніфікований solid-білий, як на About/Contact */}
      <header className="tech-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="tech-hero__solid">
          <h1 className="tech-hero__title">{t('tech_title')}</h1>
        </div>
      </header>

      {/* GRID */}
      <section className="tech-grid">
        {STACK.map((block, i) => (
          <article
            key={`${block?.group || 'g'}-${i}`}
            className="white-card tech-card appear"
            style={{ animationDelay: `${0.05 * (i + 1)}s` }}
          >
            <div className="tech-card__badge">{block?.group}</div>
            <h3 className="tech-card__title">{block?.group}</h3>
            <ul className="tech-card__list">
              {(block?.items || []).map((it, j) => (
                <li key={`${it}-${j}`}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

