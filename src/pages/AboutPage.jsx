import React from "react";
import { useTranslation } from "react-i18next";
import { ChartNoAxesCombined, Code2, ExternalLink, Rocket, Sparkles } from "lucide-react";
import portrait from "../img/vitaliy_skochko_transparent.png";
import intelligentWritingLogo from "../img/intwriting.png";
import bigSportLogo from "../img/project-1.jpg";
import { formatExperienceDuration } from "../utils/experienceDuration";
import useScrollReveal from "../utils/useScrollReveal";
import "../styles/AboutPage.css";

const focusAreas = [
  { key: "development", icon: Code2 },
  { key: "analytics", icon: ChartNoAxesCombined },
  { key: "ai", icon: Sparkles },
  { key: "products", icon: Rocket },
];

const companyExperience = {
  intelligentWriting: { startDate: "2025-02-01", endDate: null },
  bigSport: { startDate: "2024-07-01", endDate: null },
};

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "ua";
  const careerReveal = useScrollReveal();

  return (
    <main className="about-page">
      <header className="about-intro">
        <h1 className="about-intro__title page-title-accent page-title-accent--enter">{t("about_page_label")}</h1>
      </header>

      <section className="about-profile" aria-labelledby="biography-title">
        <div className="about-profile__photo">
          <img src={portrait} alt={t("portrait_alt")} />
        </div>

        <div className="about-biography">
          <h2 id="biography-title">{t("bio_title")}</h2>
          <div className="about-biography__copy">
            <p>{t("bio_paragraph_1")}</p>
            <p>{t("bio_paragraph_2")}</p>
            <p>{t("bio_paragraph_3")}</p>
            <p>{t("bio_paragraph_4")}</p>
          </div>

          <div className="about-focus" aria-label={t("focus_areas_label")}>
            {focusAreas.map(({ key, icon: Icon }) => (
              <article className="about-focus__item" key={key}>
                <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                <h3>{t(`focus_${key}_title`)}</h3>
                <p>{t(`focus_${key}_text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={careerReveal.sectionRef}
        className={`about-career${careerReveal.isVisible ? " is-visible" : ""}`}
        aria-labelledby="career-title"
      >
        <div className="about-career__heading">
          <h2 id="career-title">{t("career_title")}</h2>
        </div>

        <div className="experience-list">
          <article className="experience-company">
            <div className="experience-company__identity">
              <div className="experience-logo">
                <img src={intelligentWritingLogo} alt="Intelligent Writing logo" />
              </div>
              <div>
                <a className="experience-company__link" href="https://intwriting.com" target="_blank" rel="noopener noreferrer">
                  <span>Intelligent Writing</span>
                  <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
                </a>
                <p className="experience-company__employment">{t("experience_full_time")}</p>
              </div>
            </div>

            <div className="experience-period">
              <p className="experience-years">{t("experience_iw_years")}</p>
              <p className="experience-duration">
                {formatExperienceDuration(
                  companyExperience.intelligentWriting.startDate,
                  companyExperience.intelligentWriting.endDate,
                  language
                )}
              </p>
            </div>

            <div className="experience-positions experience-positions--multiple">
              <div className="experience-position is-current">
                <h3>Engineering Manager</h3>
                <p>{t("experience_iw_manager_date")}</p>
              </div>
              <div className="experience-position">
                <h3>Full-stack Web Developer</h3>
                <p>{t("experience_iw_developer_date")}</p>
              </div>
            </div>
          </article>

          <article className="experience-company">
            <div className="experience-company__identity">
              <div className="experience-logo">
                <img src={bigSportLogo} alt="BigSport logo" />
              </div>
              <div>
                <a className="experience-company__link" href="https://bigsport.com.ua/" target="_blank" rel="noopener noreferrer">
                  <span>BigSport</span>
                  <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
                </a>
                <p className="experience-company__employment">{t("experience_part_time")}</p>
              </div>
            </div>

            <div className="experience-period">
              <p className="experience-years">{t("experience_bigsport_years")}</p>
              <p className="experience-duration">
                {formatExperienceDuration(
                  companyExperience.bigSport.startDate,
                  companyExperience.bigSport.endDate,
                  language
                )}
              </p>
            </div>

            <div className="experience-positions">
              <div className="experience-position is-current">
                <h3>Founder &amp; Full-stack Developer</h3>
                <p>{t("experience_bigsport_date")}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
