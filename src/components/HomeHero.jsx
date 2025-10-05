import React from "react";
import "../styles/HomeHero.css";

export default function HomeHero({ children }) {
  return (
    <section className="home-hero" aria-label="Home hero">
      <div className="home-hero__inner">{children}</div>
    </section>
  );
}
