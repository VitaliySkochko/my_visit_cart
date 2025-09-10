import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutTeaser.css';
import aboutPhoto from '../img/about-photo.png'; // 👉 своє фото

export default function AboutTeaser() {
  return (
    <div
      className="about-teaser"
      style={{ backgroundImage: `url(${aboutPhoto})` }}
    >
      <div className="about-teaser__overlay" />
      <div className="about-teaser__glass">
        <h2 className="about-teaser__title">About Me</h2>
        <p className="about-teaser__text">
          I’m Vitaliy — Full-Stack Developer who loves clean code and sharp design.
          I craft modern web apps that blend elegant UI with solid engineering.
        </p>
        <Link to="/about" className="about-teaser__cta">Read full bio</Link>
      </div>
    </div>
  );
}
