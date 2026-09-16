import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Code2, Dumbbell, ExternalLink, Facebook, Flag, Globe2, Instagram, Linkedin, Medal, Monitor, Target, Trophy, X, Youtube } from 'lucide-react';
import SocialCards from '../components/SocialCards';
import useScrollReveal from '../utils/useScrollReveal';
import bigSportLogo from '../img/project-1.jpg';
import version201 from '../img/version/version_2.01.png';
import version202 from '../img/version/version_2.02.png';
import version203 from '../img/version/version_2.03.png';
import version301 from '../img/version/version_3.01.png';
import version302 from '../img/version/version_3.02.png';
import version303 from '../img/version/version_3.03.png';
import version401 from '../img/version/version_4.01.png';
import version402 from '../img/version/version_4.02.png';
import version403 from '../img/version/version_4.03.png';
import version404 from '../img/version/version_4.04.png';
import version501 from '../img/version/version_5.01.png';
import version502 from '../img/version/version_5.02.png';
import version503 from '../img/version/version_5.03.png';
import version504 from '../img/version/version_5.04.png';
import '../styles/BigSportPage.css';

const directionIcons = {
  ukrainianFootball: Flag,
  championships: Globe2,
  europeanCups: Trophy,
  biathlon: Target,
  sports: Dumbbell,
  tournaments: Medal,
};

const versionGalleries = {
  version2: [version201, version202, version203],
  version3: [version301, version302, version303],
  version4: [version401, version402, version403, version404],
  version5: [version501, version502, version503, version504],
};

const historyIcons = {
  youtube: Youtube,
  development: Code2,
  instagram: Instagram,
  website: Monitor,
  linkedin: Linkedin,
  facebook: Facebook,
};

const bigSportSocialNetworks = [
  { name: 'YouTube', href: 'https://www.youtube.com/@BigSport-TV1', icon: Youtube },
  { name: 'Instagram', href: 'https://www.instagram.com/bigsport.com.ua/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bigsport', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587925061004', icon: Facebook },
];

export default function BigSportPage() {
  const { t, i18n } = useTranslation();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const directionsReveal = useScrollReveal({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
  const historyReveal = useScrollReveal({ threshold: 0, rootMargin: '0px 0px -5% 0px' });
  const socialsReveal = useScrollReveal({ threshold: 0.25, rootMargin: '0px 0px -20% 0px' });
  const timelineRef = useRef(null);
  const directions = t('bigsport_portfolio_directions', { returnObjects: true });
  const directionItems = Array.isArray(directions) ? directions : [];
  const history = t('bigsport_history_items', { returnObjects: true });
  const historyItems = Array.isArray(history) ? history : [];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    const items = Array.from(timeline.querySelectorAll('.bigsport-timeline__item'));
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-revealed'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -12% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [i18n.resolvedLanguage, historyItems.length]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const bounds = timeline.getBoundingClientRect();
      const lineTop = bounds.top + 22;
      const lineHeight = Math.max(bounds.height - 44, 1);
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - lineTop) / lineHeight));
      timeline.style.setProperty('--timeline-progress', progress);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!selectedGallery) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedGallery(null);
      if (event.key === 'ArrowLeft') {
        setSelectedGallery((current) => {
          if (!current) return current;
          const length = versionGalleries[current.gallery].length;
          return { ...current, index: (current.index - 1 + length) % length };
        });
      }
      if (event.key === 'ArrowRight') {
        setSelectedGallery((current) => {
          if (!current) return current;
          const length = versionGalleries[current.gallery].length;
          return { ...current, index: (current.index + 1) % length };
        });
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGallery]);

  const activeGalleryImages = selectedGallery ? versionGalleries[selectedGallery.gallery] : [];

  return (
    <main className="bigsport-page">
      <header className="bigsport-page__intro">
        <h1 className="page-title-accent page-title-accent--enter">{t('bigsport_title')}</h1>
      </header>

      <section className="bigsport-overview" aria-label={t('bigsport_title')}>
        <div className="bigsport-overview__brand" aria-hidden="true">
          <div className="bigsport-overview__glow" />
          <div className="bigsport-overview__logo">
            <img src={bigSportLogo} alt="" />
          </div>
        </div>

        <div className="bigsport-overview__content">
          <p className="bigsport-overview__description">{t('bigsport_hero_description')}</p>

          <dl className="bigsport-meta">
            <div className="bigsport-meta__row">
              <dt>{t('bigsport_development_label')}</dt>
              <dd>{t('bigsport_development_value')}</dd>
            </div>
            <div className="bigsport-meta__row">
              <dt>{t('bigsport_site_start_label')}</dt>
              <dd>{t('bigsport_site_start_value')}</dd>
            </div>
            <div className="bigsport-meta__row">
              <dt>{t('bigsport_domain_label')}</dt>
              <dd>
                <a href="https://bigsport.com.ua/" target="_blank" rel="noopener noreferrer">
                  <span>bigsport.com.ua</span>
                  <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        ref={directionsReveal.sectionRef}
        className={`bigsport-directions${directionsReveal.isVisible ? ' is-visible' : ''}`}
        aria-labelledby="bigsport-directions-title"
      >
        <div className="bigsport-directions__heading">
          <h2 id="bigsport-directions-title">{t('bigsport_directions_title')}</h2>
        </div>

        <div className="bigsport-directions__grid">
          {directionItems.map((item) => {
            const Icon = directionIcons[item.key] || Trophy;
            return (
              <article className="bigsport-direction" key={item.key}>
                <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        ref={historyReveal.sectionRef}
        className={`bigsport-history${historyReveal.isVisible ? ' is-visible' : ''}`}
        aria-labelledby="bigsport-history-title"
      >
        <div className="bigsport-history__heading">
          <h2 id="bigsport-history-title">{t('bigsport_history_title')}</h2>
        </div>

        <div className="bigsport-timeline" ref={timelineRef}>
          {historyItems.map((item, index) => {
            const HistoryIcon = historyIcons[item.icon] || Monitor;
            return (
              <article
                className={`bigsport-timeline__item${index === historyItems.length - 1 ? ' is-current' : ''}`}
                key={item.date}
              >
                <span className="bigsport-timeline__marker" aria-hidden="true">
                  <HistoryIcon size={15} strokeWidth={1.8} />
                </span>
                <div className="bigsport-timeline__card">
                  <p className="bigsport-timeline__date">{item.date}</p>
                  <h3>{item.title}</h3>
                  {item.gallery && versionGalleries[item.gallery] && (
                    <button
                      className="bigsport-timeline__link bigsport-timeline__gallery-trigger"
                      type="button"
                      onClick={() => setSelectedGallery({ gallery: item.gallery, index: 0, version: item.version })}
                    >
                      <span>{t('bigsport_view_photos')}</span>
                      <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
                    </button>
                  )}
                  {item.link && (
                    <a
                      className="bigsport-timeline__link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{item.linkLabel}</span>
                      <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        ref={socialsReveal.sectionRef}
        className={`bigsport-socials${socialsReveal.isVisible ? ' is-visible' : ''}`}
        aria-labelledby="bigsport-socials-title"
      >
        <div className="bigsport-socials__heading">
          <h2 id="bigsport-socials-title">{t('bigsport_socials_title')}</h2>
        </div>
        <SocialCards networks={bigSportSocialNetworks} ariaLabel={t('bigsport_socials_title')} />
      </section>

      {selectedGallery && (
        <div
          className="bigsport-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t('bigsport_lightbox_label')}
          onClick={() => setSelectedGallery(null)}
        >
          <button
            className="bigsport-lightbox__close"
            type="button"
            onClick={() => setSelectedGallery(null)}
            aria-label={t('bigsport_close_preview')}
            autoFocus
          >
            <X aria-hidden="true" size={24} />
          </button>
          <div className="bigsport-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <img
              className="bigsport-lightbox__image"
              src={activeGalleryImages[selectedGallery.index]}
              alt={t('bigsport_version_preview_alt', { version: selectedGallery.version, number: selectedGallery.index + 1 })}
            />
            <button
              className="bigsport-lightbox__nav bigsport-lightbox__nav--prev"
              type="button"
              onClick={() => setSelectedGallery((current) => ({
                ...current,
                index: (current.index - 1 + activeGalleryImages.length) % activeGalleryImages.length,
              }))}
              aria-label={t('bigsport_previous_photo')}
            >
              <ChevronLeft aria-hidden="true" size={28} />
            </button>
            <button
              className="bigsport-lightbox__nav bigsport-lightbox__nav--next"
              type="button"
              onClick={() => setSelectedGallery((current) => ({
                ...current,
                index: (current.index + 1) % activeGalleryImages.length,
              }))}
              aria-label={t('bigsport_next_photo')}
            >
              <ChevronRight aria-hidden="true" size={28} />
            </button>
            <p className="bigsport-lightbox__counter" aria-live="polite">
              {selectedGallery.index + 1} / {activeGalleryImages.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
