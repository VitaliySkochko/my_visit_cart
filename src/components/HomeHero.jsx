import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroPhoto from "../img/vitaliy_skochko_transparent.png";
import "../styles/HomeHero.css";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">{t("hero_greeting")}</p>
          <h1 className="home-hero__title" id="home-hero-title">
            <span>{t("hero_first_name")}</span>
            <span>{t("hero_last_name")}</span>
          </h1>
          <p className="home-hero__description">{t("hero_description")}</p>
          <Link className="home-hero__more detail-link" to="/about">
            <span>{t("hero_more_link")}</span>
            <span className="detail-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-hero__photo">
          <img src={heroPhoto} alt={t("portrait_alt")} />
        </div>
      </div>
    </section>
  );
}
