// =============================
// src/components/AboutTeaser.jsx
// =============================
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import '../styles/AboutTeaser.css';

export default function AboutTeaser(){
  const { t } = useTranslation();

  return (
    <div className="about-teaser appear" style={{ animationDelay: '.05s' }}>
      <div className="white-card about-teaser__card">
        <h2 className="about-teaser__title">{t('about_title')}</h2>
        <p className="about-teaser__text">{t('about_text')}</p>

        <Link to="/about" className="link-arrow" aria-label={t('about_button')}>
          <span>{t('about_button')}</span>
          <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}

