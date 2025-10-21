import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/TechStackPage.css';

export default function TechStackPage() {
  const { t } = useTranslation();
  // беремо масив груп зі словника
  const STACK = t('stack', { returnObjects: true });

  return (
    <main className="tech-page">
      <header className="tech-hero appear">
        <div className="contact-hero__glass">
          <h1>{t('tech_title')}</h1>
        </div>
      </header>

      <section className="tech-grid">
        {STACK.map((block, i) => (
          <article
            key={block.group}
            className="tech-card glass-card appear"
            style={{ animationDelay: `${0.05 * (i + 1)}s` }}
          >
            <div className="tech-card__badge">{block.group}</div>
            <h3 className="tech-card__title">{block.group}</h3>
            <ul className="tech-card__list">
              {block.items.map((tItem) => <li key={tItem}>{tItem}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
