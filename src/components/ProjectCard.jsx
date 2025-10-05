import React from 'react';
import '../styles/ProjectCard.css';
import { ArrowRight } from 'lucide-react'; // 👈 додаємо іконку

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
}) {
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
          <ul className="proj-card__tags" aria-label="Tech stack">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        )}

        <div className="proj-card__actions">
          {href && (
            <a
              className="link-arrow"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <span>View project</span>
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
              <span>View code</span>
              <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
