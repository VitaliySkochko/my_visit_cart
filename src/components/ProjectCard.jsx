// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({
  title,
  subtitle,
  year,
  desc,
  image,
  href,
  delay = 0,
  showLinks = true,
}) {
  const hasLink = showLinks && Boolean(href);
  const isExternalLink = /^https?:\/\//i.test(href || '');
  const logoModifier = href
    ? ` proj-card__thumb--${(isExternalLink ? new URL(href).hostname.replace(/^www\./, '').split('.')[0] : href)
      .replace(/[^a-z0-9-]/gi, '')}`
    : '';

  const thumbnail = (
    <span className={`proj-card__thumb${logoModifier}`}>
      <img src={image} alt="" loading="lazy" />
    </span>
  );

  return (
    <article
      className="proj-card appear"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="proj-card__icon">
        {hasLink && isExternalLink ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
            {thumbnail}
          </a>
        ) : hasLink ? (
          <Link to={href} aria-label={title}>
            {thumbnail}
          </Link>
        ) : thumbnail}
      </div>

      <div className="proj-card__identity">
        <h2 className="proj-card__title">
          {hasLink && isExternalLink ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <span>{title}</span>
              <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          ) : hasLink ? (
            <Link to={href}>
              <span>{title}</span>
              <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
            </Link>
          ) : title}
        </h2>
        {subtitle && <p className="proj-card__subtitle">{subtitle}</p>}
      </div>

      <div className="proj-card__year">
        {year && <span className="proj-card__year-dot" aria-hidden="true" />}
        {year || null}
      </div>

      <div className="proj-card__details">
        {desc && <p className="proj-card__desc">{desc}</p>}
      </div>
    </article>
  );
}
