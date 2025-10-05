import React, { useState } from "react";
import "../styles/ContactPage.css";
import "../styles/BigSportPage.css";
import { Globe, Instagram, Youtube, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../img/project-1.jpg";
import img2 from "../img/01.png";


export default function BigSportPage() {
  const slides = [
    {
  title: "BigSport — Modern Sports Media",
  text: "A next-generation Ukrainian sports news platform delivering verified stories, match highlights, and exclusive insights — all in one place.",
  img: img1, // емблема BigSport
},
{
  title: "BigSport 4.0 — Smarter, Faster, Stronger",
  text: "The latest version of our website with a redesigned interface.",
  img: img2, // версія сайту 4.0
},
    
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <main className="contact-page">
      {/* HERO */}
      <header className="contact-hero appear">
        <div className="contact-hero__glass">
          <h1>BigSport</h1>
        </div>
      </header>

      {/* === PHOTO SLIDER (окрема плашка) === */}
      <section className="bigsport-slider glass-card appear" style={{ animationDelay: ".05s" }}>
        <div
          className="bigsport-slide"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          <div className="bigsport-slide__overlay" />
          <div className="bigsport-slide__content">
            <h3>{slides[current].title}</h3>
            <p>{slides[current].text}</p>
          </div>

          <button className="slider-btn prev" onClick={prev} aria-label="Previous slide">
            <ChevronLeft size={28} />
          </button>
          <button className="slider-btn next" onClick={next} aria-label="Next slide">
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* === OLD GRID з інформаційними плашками === */}
      <section className="contact-grid">
        <article className="contact-card glass-card appear" style={{ animationDelay: ".1s" }}>
          <h3>About BigSport</h3>
          <p>
            BigSport is a modern sports platform created for those who want to get important updates first-hand:
            real-time news, clear analysis, and convenient navigation across clubs, tournaments, and sports.
          </p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".15s" }}>
          <h3>Mission</h3>
          <p>
            To develop sports culture in Ukraine: deliver information quickly, explain context,
            and inspire with athlete and team stories.
          </p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".2s" }}>
          <h3>Coverage</h3>
          <ul className="list">
            <li><strong>Ukrainian Football:</strong> UPL, Cup, national team.</li>
            <li><strong>European Leagues:</strong> Premier League, La Liga, Serie A, Bundesliga, Ligue 1.</li>
            <li><strong>European Cups:</strong> Champions League, Europa League, Conference League.</li>
            <li><strong>Biathlon:</strong> World Cup, Ukrainian athletes’ results.</li>
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".25s" }}>
          <h3>Formats</h3>
          <ul className="list">
            <li><strong>News</strong> — key facts only, no fluff.</li>
            <li><strong>Reviews</strong> — data and trends.</li>
            <li><strong>Interviews</strong> — athletes, coaches, experts.</li>
            <li><strong>Club Archive</strong> — teams that left competitions.</li>
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".3s" }}>
          <h3>Principles</h3>
          <ul className="list">
            <li><strong>Speed</strong> — publish fast, update responsibly.</li>
            <li><strong>Accuracy</strong> — respect for facts.</li>
            <li><strong>Usability</strong> — clean interface.</li>
            <li><strong>Respect</strong> — ethical language.</li>
          </ul>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".35s" }}>
          <h3>Audience</h3>
          <p>
            For fans, journalists, and everyone who loves sports as much as we do.
          </p>
        </article>

        <article className="contact-card glass-card appear" style={{ animationDelay: ".4s" }}>
          <h3>Team & Contact</h3>
          <ul className="list">
            <li><strong>Founder:</strong> Vitaliy Skochko</li>
            <li><strong>Email:</strong> <a href="mailto:bigsportssait@gmail.com">bigsportssait@gmail.com</a></li>
          </ul>
        </article>

        {/* LINKS (іконки) */}
        <article className="contact-card glass-card appear" style={{ animationDelay: ".45s" }}>
          <h3>Links</h3>
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
