import React from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/ContactPage.css';

export default function SocialCards({ networks, ariaLabel }) {
  return (
    <section className="social-grid" aria-label={ariaLabel}>
      {networks.map(({ name, href, icon: Icon }) => (
        <a className="social-card" href={href} target="_blank" rel="noopener noreferrer" aria-label={name} key={name}>
          <span className="social-card__icon" aria-hidden="true"><Icon size={48} strokeWidth={1.65} /></span>
          <span className="social-card__name">{name}</span>
          <ExternalLink className="social-card__arrow" aria-hidden="true" size={15} strokeWidth={1.8} />
        </a>
      ))}
    </section>
  );
}
