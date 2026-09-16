import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bigSportPreview from "../img/bigsport-transparent.png";
import useScrollReveal from "../utils/useScrollReveal";
import "../styles/BigSportShowcase.css";

export default function BigSportShowcase() {
  const { t } = useTranslation();
  const { sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`bigsport-showcase-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="bigsport-showcase-title"
    >
      <div className="bigsport-showcase">
        <div className="bigsport-showcase__content">
          <h2 className="bigsport-showcase__title" id="bigsport-showcase-title">BigSport</h2>
          <p className="bigsport-showcase__description">{t("home_bigsport_description")}</p>
          <Link className="home-hero__more detail-link" to="/bigsport">
            <span>{t("home_bigsport_more")}</span>
            <span className="detail-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="bigsport-showcase__visual">
          <a
            className="bigsport-showcase__visual-link"
            href="https://bigsport.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bigSportPreview} alt={t("home_bigsport_image_alt")} />
          </a>
        </div>
      </div>
    </section>
  );
}
