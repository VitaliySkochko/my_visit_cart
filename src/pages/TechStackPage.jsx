import React from 'react';
import '../styles/TechStackPage.css';

const STACK = [
  {
    group: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'Python', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React', 'React Router', 'HTML5/CSS3', 'Responsive UI/UX'],
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST APIs', 'EmailJS (transactional)'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'Firebase Firestore', 'SQL fundamentals'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Firebase Hosting/Storage/Auth', 'Render (Deployments)'],
  },
  {
    group: 'AI & LLM Ops',
    items: ['OpenAI API', 'Prompt Engineering', 'RAG basics', 'LangChain'],
  },
  {
    group: 'Analytics & Monitoring',
    items: ['Microsoft Clarity', 'Google Analytics', 'Amplitude'],
  },
   {
    group: 'Workflow & Tools',
    items: ['Git / GitHub', 'Postman', 'Project setup & CI basics'],
  },
];

export default function TechStackPage() {
  return (
    <main className="tech-page">
      <header className="tech-hero appear">
        <div className="contact-hero__glass">
          <h1>Tech Stack</h1>
        </div>
      </header>

      <section className="tech-grid">
        {STACK.map((block, i) => (
          <article
            key={block.group}
            className="tech-card glass-card appear"
            style={{ animationDelay: `${0.05 * (i + 1)}s` }}
          >
            <div className="tech-card__badge">{block.group}</div>
            <h3 className="tech-card__title">{block.group}</h3>
            <ul className="tech-card__list">
              {block.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
