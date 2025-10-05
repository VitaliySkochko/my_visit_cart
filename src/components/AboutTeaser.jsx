import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutTeaser.css';
import { ArrowRight } from 'lucide-react'; // 👈 додаємо стрілку

export default function AboutTeaser() {
  return (
    <div className="about-teaser about-teaser--glassonly">
      <div className="about-teaser__glass">
        <h2 className="about-teaser__title">About Me</h2>
        <p className="about-teaser__text">
          I’m Vitaliy — Full-Stack Developer who loves clean code and sharp design.
          I craft modern web apps that blend elegant UI with solid engineering.
        </p>

        {/* 👇 оновлена кнопка у форматі текст + стрілка */}
        <Link to="/about" className="link-arrow">
          <span>Read full bio</span>
          <ArrowRight className="link-arrow__icon" size={20} strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}
