import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projectsImage from "../img/web-projects-card-transparent.png";
import "../styles/ProjectsShowcase.css";

export default function ProjectsShowcase() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`projects-showcase-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="projects-showcase-title"
    >
      <div className="projects-showcase">
        <div className="projects-showcase__visual">
          <img src={projectsImage} alt={t("home_projects_image_alt")} />
        </div>

        <div className="projects-showcase__content">
          <h2 className="projects-showcase__title" id="projects-showcase-title">
            {t("home_projects_title")}
          </h2>
          <p className="projects-showcase__description">{t("home_projects_description")}</p>
          <Link className="projects-showcase__more detail-link" to="/projects">
            <span>{t("home_projects_more")}</span>
            <span className="detail-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
