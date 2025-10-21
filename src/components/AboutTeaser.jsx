import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/AboutTeaser.css';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  const { t } = useTranslation();

  return (
    <div className="about-teaser about-teaser--glassonly">
      <div className="about-teaser__glass">
        <h2 className="about-teaser__title">{t('about_title')}</h2>
        <p className="about-teaser__text">{t('about_text')}</p>

        <Link to="/about" className="link-arrow">
          <span>{t('about_button')}</span>
          <ArrowRight className="link-arrow__icon" size={20} strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}
