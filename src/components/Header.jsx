// Header.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 👈
import logo from '../img/logo.png';
import '../styles/Header.css';

const links = [
  { to: '/about', key: 'nav_about' },
  { to: '/projects', key: 'nav_projects' },
  { to: '/contact', key: 'nav_contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'ua';

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

  const switchLanguage = (next) => {
    if (next === lang) return;
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <header className="site-header" role="banner">
      <div className="nav">
        <NavLink className="brand" to="/">
          <img className="brand__logo" src={logo} alt="Vitaliy Skochko" />
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
          <div className="lang-switch" role="group" aria-label={t('language')}>
            <button type="button" className={`lang-switch__option${lang === 'ua' ? ' is-active' : ''}`} aria-pressed={lang === 'ua'} onClick={() => switchLanguage('ua')}>UA</button>
            <button type="button" className={`lang-switch__option${lang === 'en' ? ' is-active' : ''}`} aria-pressed={lang === 'en'} onClick={() => switchLanguage('en')}>EN</button>
          </div>

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

        </div>
      </div>
    </header>
  );
}
