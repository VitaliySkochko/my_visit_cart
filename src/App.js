import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WebProjectsPage from './pages/WebProjectsPage';
import BackendProjectsPage from './pages/BackendProjectsPage'; // 👈 додано
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';
import BigSportPage from './pages/BigSportPage';
import HomeHero from './components/HomeHero';
import ProjectsShowcase from './components/ProjectsShowcase';
import BigSportShowcase from './components/BigSportShowcase';
import ContactShowcase from './components/ContactShowcase';
import './App.css';

function Home() {
  return (
    <main className="page">
      <HomeHero />
      <ProjectsShowcase />
      <BigSportShowcase />
      <ContactShowcase />
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`App ${isHome ? 'is-home' : ''}`} id="home">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/web" element={<WebProjectsPage />} />
        <Route path="/projects/backend" element={<BackendProjectsPage />} /> {/* 👈 новий маршрут */}
        <Route path="/tech" element={<TechStackPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bigsport" element={<BigSportPage />} />
      </Routes>
    </div>
  );
}
