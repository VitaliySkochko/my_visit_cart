// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, subtitle, desc, tags = [], image, href, repo }) {
  return (
    <article className="proj-card">
      {image && <img className="proj-card__img" src={image} alt="" aria-hidden="true" />}
      <div className="proj-card__body">
        <h3 className="proj-card__title">{title}</h3>
        {subtitle && <div className="proj-card__subtitle">{subtitle}</div>}
        {desc && <p className="proj-card__desc">{desc}</p>}

        {!!tags.length && (
          <ul className="proj-card__tags">
            {tags.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        )}

        <div className="proj-card__actions">
          {href && <a className="btn btn--primary" href={href} target="_blank" rel="noreferrer">Live</a>}
          {repo && <a className="btn" href={repo} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </article>
  );
}
