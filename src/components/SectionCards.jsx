import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/SectionCards.css";
import { ArrowRight } from "lucide-react";

import img1 from "../img/web-projects-card.png";
import img2 from "../img/about-photo.png";
import img3 from "../img/1111.png";

export default function SectionCards() {
  const { t } = useTranslation();

  const CARDS = [
    { title: t("card_projects_title"), image: img1, link: "/projects" },
    { title: t("card_contacts_title"), image: img2, link: "/contact" },
    { title: t("card_bigsport_title"), image: img3, link: "/bigsport" },
  ];

  return (
    <section className="section-cards">
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="section-card glass-card"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <div
            className="section-card__image"
            style={{ backgroundImage: `url(${card.image})` }}
          />
          <div className="section-card__content">
            <h3 className="section-card__title">{card.title}</h3>

            <Link to={card.link} className="link-arrow">
              <span>{t("card_button_explore")}</span>
              <ArrowRight className="link-arrow__icon" size={18} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
