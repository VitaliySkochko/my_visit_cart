import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutTeaser.css';

export default function AboutTeaser() {
  return (
    <div className="about-teaser">
      <div className="about-teaser__glass">
        <h2 className="about-teaser__title">About Me</h2>
        <p className="about-teaser__text">
          I’m Vitaliy — a Frontend / Full-Stack developer crafting fast, glossy,
          magazine-style web experiences. Clean code. Elegant UI. Real business value.
        </p>
        <Link to="/about" className="about-teaser__cta">Read full bio</Link>
      </div>
    </div>
  );
}
