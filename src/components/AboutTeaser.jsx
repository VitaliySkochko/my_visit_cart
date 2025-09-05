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
  I’m Vitaliy — a passionate Full-Stack Developer with a sharp eye for design 
  and a love for clean, scalable code. I build modern, high-performance web 
  applications that blend elegant UI with solid engineering. Always curious, 
  always learning — turning ideas into digital experiences that truly stand out.
</p>
        <Link to="/about" className="about-teaser__cta">Read full bio</Link>
      </div>
    </div>
  );
}
