import React, { useState } from 'react';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // 👉 ВАРІАНТ 1 (просто): відкрити поштовий клієнт
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:you@example.com?subject=Portfolio%20contact&body=${body}`;

    // 👉 ВАРІАНТ 2: пізніше підключимо бекенд (Fetch/axios на свій endpoint)
    setSent(true);
  };

  return (
    <main className="contact-page">
      <header className="contact-hero">
        <div className="contact-hero__glass">
          <h1>Contact</h1>
          <p>Let’s build something glossy and impactful together.</p>
        </div>
      </header>

      <section className="contact-grid">
        <article className="contact-card">
          <h3>Direct</h3>
          <ul className="contact-list">
            <li><a href="mailto:you@example.com">you@example.com</a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </article>

        <article className="contact-card contact-card--form">
          <h3>Send a message</h3>
          {sent ? (
            <div className="sent">
              <p>Thanks! Your default mail app should open now. I’ll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Hi! I’d like to discuss a project…"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button className="btn btn--primary" type="submit">Send</button>
            </form>
          )}
        </article>
      </section>
    </main>
  );
}
