import React, { useState } from 'react';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:you@example.com?subject=Portfolio%20contact&body=${body}`;
    setSent(true);
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <header className="contact-hero appear">
        <div className="pl-hero__title">
          <h1>Contact</h1>
          
        </div>
      </header>

      {/* GRID */}
      <section className="contact-grid">
        {/* Direct */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.05s' }}>
          <h3>Direct</h3>
          <ul className="contact-list">
            <li><a href="mailto:you@example.com">you@example.com</a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </article>

        {/* Form */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.1s' }}>
          <h3>Send a message</h3>

          {sent ? (
            <div className="sent">
              <p>Thanks! Your default mail app should open now. I’ll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to discuss a project…"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button className="btn btn--primary" type="submit">
                <span>Send</span>
              </button>
            </form>
          )}
        </article>
      </section>
    </main>
  );
}
