import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import webImage from "../img/web.png";
import backendImage from "../img/backend.png";
import useScrollReveal from "../utils/useScrollReveal";
import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const webReveal = useScrollReveal();
  const backendReveal = useScrollReveal({ threshold: 0.25, rootMargin: '0px 0px -20% 0px' });

  return (
    <main className="projects-page">
      <header className="projects-page__intro">
        <h1 className="page-title-accent page-title-accent--enter">{t("projects_title")}</h1>
      </header>

      <section
        ref={webReveal.sectionRef}
        className={`projects-direction projects-direction--web${webReveal.isVisible ? " is-visible" : ""}`}
        aria-labelledby="projects-web-title"
      >
        <div className="projects-direction__visual projects-direction__visual--web">
          <img src={webImage} alt={t("projects_web_alt")} />
        </div>

        <div className="projects-direction__content">
          <h2 id="projects-web-title">{t("projects_web_showcase_title")}</h2>
          <p>{t("projects_web_showcase_description")}</p>
          <Link className="detail-link" to="/projects/web">
            <span>{t("home_projects_more")}</span>
            <span className="detail-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        ref={backendReveal.sectionRef}
        className={`projects-direction projects-direction--backend${backendReveal.isVisible ? " is-visible" : ""}`}
        aria-labelledby="projects-backend-title"
      >
        <div className="projects-direction__content">
          <h2 id="projects-backend-title">{t("projects_backend_showcase_title")}</h2>
          <p>{t("projects_backend_showcase_description")}</p>
          <Link className="detail-link" to="/projects/backend">
            <span>{t("home_projects_more")}</span>
            <span className="detail-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="projects-direction__visual projects-direction__visual--backend">
          <img src={backendImage} alt={t("projects_backend_alt")} />
        </div>
      </section>
    </main>
  );
}
