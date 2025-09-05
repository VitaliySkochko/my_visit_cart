import React from 'react';
import '../styles/TechStackPage.css';

const STACK = [
  { group: 'Frontend', items: ['React', 'Vite/CRA', 'React Router', 'Redux/Zustand', 'TypeScript', 'CSS Modules', 'Tailwind', 'Framer Motion'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST', 'JWT', 'PDFKit', 'CRON (node-cron)'] },
  { group: 'Databases & Cloud', items: ['PostgreSQL', 'Firebase (Auth, Firestore, Storage)', 'Render', 'Vercel', 'Netlify'] },
  { group: 'Dev & Tools', items: ['Git/GitHub', 'ESLint/Prettier', 'Postman', 'CI/CD basics', 'Analytics (Amplitude/GA)'] },
  { group: 'AI & Extras', items: ['OpenAI API', 'Prompting', 'RAG basics', 'Vector DB (FAISS)'] },
];

export default function TechStackPage() {
  return (
    <main className="tech-page">
      <header className="tech-hero appear">
        <div className="tech-hero__glass">
          <h1>Tech Stack</h1>
          <p>Tools I use to build fast, elegant, magazine-style products.</p>
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
