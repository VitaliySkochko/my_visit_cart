import React, { useState } from 'react';
import '../styles/ContactPage.css';
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react'; // 👈 заміна іконок

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
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>Contact</h1>
        </div>
      </header>

      {/* GRID */}
      <section className="contact-grid">
        {/* LEFT: title + icon links (в стилі BigSport) */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.06s' }}>
          <h3>Contacts</h3>
          <div className="socials socials--icons">
            <a
              href="https://www.linkedin.com/in/vitaliy-skochko-b8a150336/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={40} strokeWidth={2.2} />
            </a>
            <a
              href="https://github.com/VitaliySkochko"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={40} strokeWidth={2.2} />
            </a>
            <a
              href="https://www.instagram.com/vitaliyskochko/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram size={40} strokeWidth={2.2} />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook size={30} strokeWidth={2.2} />
            </a>
          </div>
        </article>

        {/* RIGHT: form */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.1s' }}>
          <h3>Send a message</h3>

          {sent ? (
            <div className="sent" role="status">
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
                  rows="5"
                  placeholder="Hi! I’d like to discuss a project…"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button className="about-teaser__cta" type="submit" aria-label="Send message by email">
                <span>Send</span>
              </button>
            </form>
          )}
        </article>
      </section>
    </main>
  );
}
