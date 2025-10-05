import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AboutTeaser from './components/AboutTeaser';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WebProjectsPage from './pages/WebProjectsPage';
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';
import SectionCards from "./components/SectionCards";
import BigSportPage from './pages/BigSportPage';
import HomeHero from './components/HomeHero';        // 👈 NEW
import './App.css';

function Home() {
  return (
    <main className="page">
      <HomeHero>
        <AboutTeaser />
        <SectionCards />     {/* тепер картки знаходяться всередині фото-фону */}
      </HomeHero>
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`App ${isHome ? 'is-home' : ''}`} id="home">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/web" element={<WebProjectsPage />} />
        <Route path="/tech" element={<TechStackPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bigsport" element={<BigSportPage />} />
      </Routes>
    </div>
  );
}
