// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/ProjectCard.css';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({
  title,
  subtitle,
  year,
  desc,
  tags = [],
  image,
  href,
  repo,
  delay = 0,
  showLinks = true, // 👈 новий проп: показувати кнопки чи ні
}) {
  const { t } = useTranslation();

  return (
    <article
      className="proj-card glass-border appear"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="proj-card__thumb">
        <img src={image} alt={title} loading="lazy" />
        <span className="proj-card__shine" aria-hidden="true" />
      </div>

      <div className="proj-card__body">
        <h3 className="proj-card__title">
          {title}
          {year && <span className="proj-card__year"> · {year}</span>}
        </h3>

        {subtitle && <div className="proj-card__subtitle">{subtitle}</div>}
        {desc && <p className="proj-card__desc">{desc}</p>}

        {tags?.length > 0 && (
          <ul className="proj-card__tags" aria-label={t('tech_stack')}>
            {tags.map((tItem) => (
              <li key={tItem} className="tag">{tItem}</li>
            ))}
          </ul>
        )}

        {/* показуємо кнопки лише якщо showLinks === true */}
        {showLinks && (
          <div className="proj-card__actions">
            {href && (
              <a
                className="link-arrow"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('view_project')}</span>
                <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
              </a>
            )}
            {repo && (
              <a
                className="link-arrow"
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('view_code')}</span>
                <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
