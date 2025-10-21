// Header.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 👈
import '../styles/Header.css';

const links = [
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/tech', key: 'tech' },
  { to: '/contact', key: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleNavClick = () => setOpen(false);

  const toggleLanguage = () => {
    const next = lang === 'en' ? 'ua' : 'en';
    setLang(next);
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <header className="site-header" role="banner">
      <div className="nav">
        <NavLink className="brand" to="/">
          <div className="brand__text">
            <span className="brand__title">{t('name')}</span>
            <span className="brand__subtitle">{t('hero_title')}</span>
          </div>
        </NavLink>

        <nav className="nav__links" aria-label="Main menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              onClick={handleNavClick}
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        {/* 🔘 компактні дії справа: перемикач мови + бургер */}
        <div className="nav__actions">
          <button
            className="lang-switch"
            type="button"
            aria-label="Switch language"
            onClick={toggleLanguage}
          >
            {lang === 'en' ? 'UA' : 'EN'}
          </button>

          <button
            className="nav__toggle"
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="toggle__bar" />
            <span className="toggle__bar" />
            <span className="toggle__bar" />
          </button>
        </div>
      </div>

      <div
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="drawer__inner">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="drawer__link"
              onClick={handleNavClick}
            >
              {t(l.key)}
            </NavLink>
          ))}

          {/* Перемикач мови в drawer */}
          <button className="drawer__lang" type="button" onClick={toggleLanguage}>
            {lang === 'en' ? 'Українська' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
}
