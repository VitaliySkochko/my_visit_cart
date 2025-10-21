import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/ContactPage.css";
import "../styles/BigSportPage.css";
import { Globe, Instagram, Youtube, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../img/project-1.jpg";
import img2 from "../img/01.png";

export default function BigSportPage() {
  const { t } = useTranslation();

  // слайди беремо з перекладів (title, text) і прив’язуємо локальні картинки
  const slides = t("bigsport_slides", { returnObjects: true }).map((s, i) => ({
    ...s,
    img: [img1, img2][i] || img1,
  }));

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => { touchEndX.current = e.changedTouches[0].clientX; handleSwipe(); };
  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
  };

  const coverage = t("bigsport_coverage_items", { returnObjects: true });     // [{label, text}]
  const formats = t("bigsport_formats_items", { returnObjects: true });       // [{label, text}]
  const principles = t("bigsport_principles_items", { returnObjects: true }); // [{label, text}]

  return (
    <main className="contact-page">
      {/* HERO */}
      <header className="contact-hero appear">
        <div className="contact-hero__glass">
          <h1>{t("bigsport_title")}</h1>
        </div>
      </header>

      {/* === PHOTO SLIDER === */}
      <section
        className="bigsport-slider glass-card appear"
        style={{ animationDelay: ".05s" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="bigsport-slide"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          <div className="bigsport-slide__overlay" />
          <div className="bigsport-slide__content">
            <h3>{slides[current].title}</h3>
            <p>{slides[current].text}</p>
          </div>

          {/* кнопки (ховаються на мобільних через CSS) */}
          <button className="slider-btn prev" onClick={prev} aria-label={t("slider_prev_aria")}>
            <ChevronLeft size={28} />
          </button>
          <button className="slider-btn next" onClick={next} aria-label={t("slider_next_aria")}>
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* === GRID === */}
      <section className="contact-grid">
        <article className="contact-card glass-card appear" style={{ animationDelay: ".1s" }}>
          <h3>{t("bigsport_about_title")}</h3>
          <p>{t("bigsport_about_text")}</p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".15s" }}>
          <h3>{t("bigsport_mission_title")}</h3>
          <p>{t("bigsport_mission_text")}</p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".2s" }}>
          <h3>{t("bigsport_coverage_title")}</h3>
          <ul className="list">
            {coverage.map((it, idx) => (
              <li key={idx}>
                <strong>{it.label}:</strong> {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".25s" }}>
          <h3>{t("bigsport_formats_title")}</h3>
          <ul className="list">
            {formats.map((it, idx) => (
              <li key={idx}>
                <strong>{it.label}</strong> — {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".3s" }}>
          <h3>{t("bigsport_principles_title")}</h3>
          <ul className="list">
            {principles.map((it, idx) => (
              <li key={idx}>
                <strong>{it.label}</strong> — {it.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".35s" }}>
          <h3>{t("bigsport_audience_title")}</h3>
          <p>{t("bigsport_audience_text")}</p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".4s" }}>
          <h3>{t("bigsport_team_title")}</h3>
          <ul className="list">
            <li><strong>{t("bigsport_founder_label")}:</strong> {t("name")}</li>
            <li><strong>{t("bigsport_email_label")}:</strong> <a href="mailto:bigsportssait@gmail.com">bigsportssait@gmail.com</a></li>
          </ul>
        </article>

        {/* LINKS */}
        <article className="contact-card glass-card appear" style={{ animationDelay: ".45s" }}>
          <h3>{t("bigsport_links_title")}</h3>
          <div className="bigsport-links">
            <a href="https://bigsport.com.ua/" target="_blank" rel="noreferrer" aria-label="Website"><Globe size={40} /></a>
            <a href="https://www.instagram.com/bigsport.com.ua/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={40} /></a>
            <a href="https://www.youtube.com/@BigSport-TV1" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={40} /></a>
            <a href="https://www.linkedin.com/company/bigsport/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={40} /></a>
          </div>
        </article>
      </section>
    </main>
  );
}
