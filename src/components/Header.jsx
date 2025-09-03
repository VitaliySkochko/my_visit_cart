import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';   // 👈 додали
import '../styles/Header.css';

const links = [
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/tech', label: 'Tech Stack' },   // можеш поки лишити якір, якщо сторінки нема
  { to: '/contact', label: 'Contact' },   // теж саме
];

export default function Header() {
  const [open, setOpen] = useState(false);

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

  return (
    <header className="site-header" role="banner">
      <div className="nav">
        <Link className="brand" to="/">
          <div className="brand__text">
            <span className="brand__title">Vitaliy Skochko</span>
            <span className="brand__subtitle">Frontend / Full-Stack Developer</span>
          </div>
        </Link>

        <nav className="nav__links" aria-label="Main menu">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav__link" onClick={handleNavClick}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav__cta" onClick={handleNavClick}>
            Hire Me
          </Link>
        </nav>

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

      {/* Mobile drawer */}
      <div
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="drawer__inner">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="drawer__link" onClick={handleNavClick}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="drawer__cta" onClick={handleNavClick}>
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
