// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutTeaser from './components/AboutTeaser';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WebProjectsPage from './pages/WebProjectsPage';
import TechStackPage from './pages/TechStackPage';   // 👈 NEW
import ContactPage from './pages/ContactPage';       // 👈 NEW
import './App.css';

function Home() {
  return (
    <main className="page">
      <section id="about" className="section">
        <AboutTeaser />
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Explore my work across web (mobile is coming soon).</p>
      </section>

      <section id="tech" className="section">
        <h2>Tech Stack</h2>
        <p>A quick overview of tools and technologies I use.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Reach me via email or the contact form.</p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="App" id="home">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/web" element={<WebProjectsPage />} />
        <Route path="/tech" element={<TechStackPage />} />       {/* 👈 NEW */}
        <Route path="/contact" element={<ContactPage />} />      {/* 👈 NEW */}
      </Routes>
    </div>
  );
}
