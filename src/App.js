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
import SectionCards from "./components/SectionCards";
import BigSportPage from './pages/BigSportPage';
import './App.css';

function Home() {
  return (
    <main className="page">
      <section id="about" className="section">
        <AboutTeaser />
      </section>

      <SectionCards />   {/* 👈 нові картки */}
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
        <Route path="/bigsport" element={<BigSportPage />} /> 
      </Routes>
    </div>
  );
}
