import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import backdrop from '../img/Collaborations.png';
import '../styles/WebProjectsPage.css';
import '../styles/CollaborationsPage.css';

const characterMs = 16;
const typingDuration = (text) => Array.from(text).length * characterMs;

function TypedText({ text, elapsed, start = 0 }) {
  const characters = Array.from(text);
  const count = Math.max(0, Math.floor((elapsed - start) / characterMs));
  if (count >= characters.length) return text;

  return (
    <>
      <span className="collaboration-sr-text">{text}</span>
      <span aria-hidden="true">
        {characters.slice(0, count).join('')}
        <span className="collaboration-untyped">{characters.slice(count).join('')}</span>
      </span>
    </>
  );
}

function CollaborationCard({ project, offset, t }) {
  const active = offset === 0;
  const [elapsed, setElapsed] = React.useState(Infinity);
  const periodStart = typingDuration(project.title) + 90;
  const badgesStart = periodStart + 120;
  const aboutStart = badgesStart + project.technologies.length * 70 + 80;
  const descriptionStart = aboutStart + 100;
  const contributionStart = project.description
    ? descriptionStart + typingDuration(project.description) + 140
    : aboutStart;
  const end = contributionStart + 100 + typingDuration(project.contribution);

  React.useLayoutEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setElapsed(Infinity);
      return undefined;
    }

    setElapsed(0);
    const started = performance.now();
    let frame;
    const tick = (now) => {
      const time = now - started;
      setElapsed(time >= end ? Infinity : time);
      if (time < end) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, project]);

  const time = active ? elapsed : Infinity;
  const pending = (start) => time < start ? 'collaboration-pending' : undefined;
  const title = <TypedText text={project.title} elapsed={time} />;

  return (
    <article
      className={`collaboration-project${active ? ' is-visible' : ''}`}
      style={{ '--slide-offset': offset }}
      aria-hidden={!active}
    >
      <div className="collaboration-project__intro">
        <h2>
          {project.href ? (
            <a href={project.href} target="_blank" rel="noopener noreferrer" tabIndex={active ? undefined : -1}>
              {title} <ExternalLink className={pending(periodStart)} aria-hidden="true" size={20} strokeWidth={1.8} />
            </a>
          ) : title}
        </h2>
        {project.period && <p className={pending(periodStart)}>{project.period}</p>}
        <ul className="collaboration-project__technologies">
          {project.technologies.map((technology, position) => (
            <li key={technology} className={pending(badgesStart + position * 70)}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="collaboration-project__details">
        {project.description && (
          <>
            <h3 className={pending(aboutStart)}>{t('collaboration_about')}</h3>
            <p><TypedText text={project.description} elapsed={time} start={descriptionStart} /></p>
          </>
        )}
        <h3 className={pending(contributionStart)}>{t('collaboration_contribution')}</h3>
        <p><TypedText text={project.contribution} elapsed={time} start={contributionStart + 100} /></p>
      </div>
    </article>
  );
}

function CollaborationCarousel({ projects, t, english }) {
  const [position, setPosition] = React.useState(0);
  const touchStart = React.useRef(null);
  const wheelTime = React.useRef(0);
  const total = projects.length;
  const wrap = (index) => ((index % total) + total) % total;
  const move = (direction) => {
    setPosition((current) => current + direction);
  };

  return (
    <section
      className="collaboration-carousel"
      style={{ '--carousel-backdrop': `url("${backdrop}")` }}
      aria-labelledby="collaborations-title"
      tabIndex={0}
      onKeyDown={(event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        if (event.target.closest('.collaboration-project')) {
          event.currentTarget.focus({ preventScroll: true });
        }
        move(event.key === 'ArrowRight' ? 1 : -1);
      }}
      onWheel={(event) => {
        if (Math.abs(event.deltaX) < 18 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
        const now = Date.now();
        const elapsed = now - wheelTime.current;
        wheelTime.current = now;
        if (elapsed > 180) move(Math.sign(event.deltaX));
      }}
      onTouchStart={(event) => {
        const { clientX, clientY } = event.touches[0];
        touchStart.current = { x: clientX, y: clientY };
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
      }}
    >
      <div className="collaboration-list">
        {[-2, -1, 0, 1, 2].map((offset) => (
          <CollaborationCard key={position + offset} offset={offset} project={projects[wrap(position + offset)]} t={t} />
        ))}
      </div>
      <div className="collaboration-carousel__controls">
        <button type="button" onClick={() => move(-1)} aria-label={english ? 'Previous project' : 'Попередній проєкт'}><ArrowLeft aria-hidden="true" /></button>
        <span className="collaboration-project__progress" aria-live="polite">
          {String(wrap(position) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button type="button" onClick={() => move(1)} aria-label={english ? 'Next project' : 'Наступний проєкт'}><ArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}

export default function CollaborationsPage() {
  const { t, i18n } = useTranslation();
  const entries = t('collaboration_projects', { returnObjects: true });
  const projects = Array.isArray(entries)
    ? [...entries].sort((a, b) =>
      Number(Boolean(b.ongoing)) - Number(Boolean(a.ongoing)) ||
      (b.completedMonth ?? b.startedMonth ?? '').localeCompare(a.completedMonth ?? a.startedMonth ?? '')
    )
    : [];

  return (
    <main className="web-projects">
      <header className="web-projects__intro">
        <h1 id="collaborations-title" className="page-title-accent page-title-accent--enter">
          {t('collaborations_title')}
        </h1>
      </header>
      {projects.length ? (
        <CollaborationCarousel projects={projects} t={t} english={i18n.resolvedLanguage === 'en'} />
      ) : (
        <p className="wp-list__empty">{t('collaborations_empty')}</p>
      )}
    </main>
  );
}
