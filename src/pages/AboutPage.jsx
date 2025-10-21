import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AboutPage.css";
import portrait from "../img/portrait.png";

// logos
import bigsportLogo from "../img/project-1.jpg";
import intwritingLogo from "../img/intwriting.png";

// 🔧 Localized duration formatter
function formatDuration(startDate, endDate = new Date(), t) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0 && months === 0) return t("duration_less_month");
  if (years === 0) return t("duration_months", { count: months });
  if (months === 0) return t("duration_years", { count: years });
  return t("duration_full", { years, months });
}

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: ".02s" }}>
        <div className="contact-hero__glass">
          <h1>{t("name")}</h1>
        </div>
      </header>

      {/* BIO */}
      <section className="about-bio">
        <div className="about-bio__media appear" data-delay="0.05s">
          <div className="bio-photo">
            <img src={portrait} alt={t("portrait_alt")} />
            <span className="bio-photo__shine" aria-hidden="true" />
          </div>
        </div>

        <div className="about-bio__text glass-card appear" data-delay="0.1s">
          <h2>{t("bio_title")}</h2>
          <p>{t("bio_paragraph_1")}</p>
          <p>{t("bio_paragraph_2")}</p>
          <p>{t("bio_paragraph_3")}</p>
        </div>
      </section>

      {/* CAREER */}
      <section className="about-career">
        <h2 className="appear" data-delay="0.05s">
          {t("career_title")}
        </h2>
        <ol className="timeline">
          {/* Intelligent Writing — Eng Manager */}
          <li className="appear" data-delay="0.16s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">
              <div className="tl-company-center">
                <a
                  href="https://intwriting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="Intelligent Writing"
                >
                  <img src={intwritingLogo} alt="Intelligent Writing logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">Intelligent Writing</span>
              </div>
              <div className="tl-meta">
                {t("career_3_date", { duration: formatDuration("2025-10-01", undefined, t) })}
              </div>
              <div className="tl-title">{t("career_3_title")}</div>
            </div>
          </li>

          {/* Intelligent Writing — Full-stack */}
          <li className="appear" data-delay="0.12s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">
              <div className="tl-company-center">
                <a
                  href="https://intwriting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="Intelligent Writing"
                >
                  <img src={intwritingLogo} alt="Intelligent Writing logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">Intelligent Writing</span>
              </div>
              <div className="tl-meta">
                {t("career_2_date", {
                  duration: formatDuration("2025-02-01", "2025-10-01", t),
                })}
              </div>
              <div className="tl-title">{t("career_2_title")}</div>
            </div>
          </li>

          {/* BigSport */}
          <li className="appear" data-delay="0.08s">
            <div className="tl-dot" />
            <div className="tl-card glass-card">
              <div className="tl-company-center">
                <a
                  href="https://bigsport.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  title="BigSport"
                >
                  <img src={bigsportLogo} alt="BigSport logo" className="tl-logo" />
                </a>
                <span className="tl-company-name">BigSport</span>
              </div>
              <div className="tl-meta">
                {t("career_1_date", { duration: formatDuration("2024-07-01", undefined, t) })}
              </div>
              <div className="tl-title">{t("career_1_title")}</div>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
