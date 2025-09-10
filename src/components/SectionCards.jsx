// src/components/SectionCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/SectionCards.css";

import img1 from "../img/web-projects-card.png";
import img2 from "../img/project-3.jpg";
import img3 from "../img/1111.png";

const CARDS = [
  { title: "Projects", image: img1, link: "/projects" },
  { title: "Contact", image: img2, link: "/contact" },
  { title: "BigSPORT", image: img3, link: "/bigsport" },
];

export default function SectionCards() {
  return (
    <section className="section-cards">
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="section-card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="section-card__overlay">
            <Link to={card.link} className="about-teaser__cta">
              {card.title}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
