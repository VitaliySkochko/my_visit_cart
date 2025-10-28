// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const onChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErr(t('contact_fill_all') || 'Будь ласка, заповніть усі поля.');
      return false;
    }
    // дуже проста перевірка email
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setErr(t('contact_email_invalid') || 'Некоректний email.');
      return false;
    }
    setErr('');
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErr(
        'EmailJS env-параметри відсутні. Додай REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY.'
      );
      return;
    }

    setLoading(true);
    try {
      // Параметри під обидва варіанти змінних (латиниця/кирилиця),
      // щоб збігтись із твоїм шаблоном у EmailJS
      const params = {
        // латиниця (рекомендовано в шаблоні)
        name: form.name,
        email: form.email,
        message: form.message,
        title: 'Contact Form', // якщо у темі листа є {{title}}

        // мапінг під поля "Від імені {{name}}", "Відповісти на {{email}}"
        from_name: form.name,
        from_email: form.email,

        // дублікати кирилицею (на випадок, якщо в тілі шаблону стоять {{ім'я}} і {{повідомлення}})
        ["ім'я"]: form.name,
        повідомлення: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      console.error('EmailJS error:', e);
      setErr(t('contact_send_error') || 'Помилка під час відправлення. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <header className="contact-hero appear" style={{ animationDelay: '.02s' }}>
        <div className="contact-hero__glass">
          <h1>{t('contact_title')}</h1>
        </div>
      </header>

      {/* GRID */}
      <section className="contact-grid">
        {/* LEFT — social links */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.06s' }}>
          <h3>{t('contact_links_title')}</h3>
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
              href="https://www.facebook.com/vitaliy.skochko/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook size={30} strokeWidth={2.2} />
            </a>
          </div>
        </article>

        {/* RIGHT — contact form */}
        <article className="contact-card glass-card appear" style={{ animationDelay: '.1s' }}>
          <h3>{t('contact_form_title')}</h3>

          {sent ? (
            <div className="sent" role="status">
              <p>{t('contact_sent_message') || 'Дякую! Повідомлення надіслано.'}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              {err && (
                <div className="form-error" role="alert" style={{ marginBottom: 12 }}>
                  {err}
                </div>
              )}

              <div className="field">
                <label htmlFor="name">{t('contact_name') || "Ім'я"}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t('contact_name_placeholder') || "Ваше ім'я"}
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">{t('contact_email') || 'Email'}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact_email_placeholder') || 'you@example.com'}
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">{t('contact_message') || 'Повідомлення'}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t('contact_message_placeholder') || 'Ваше повідомлення...'}
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button
                className="about-teaser__cta"
                type="submit"
                aria-label={t('contact_send_aria') || 'Надіслати повідомлення'}
                disabled={loading}
              >
                <span>{loading ? (t('sending') || 'Надсилання…') : (t('contact_send_button') || 'Надіслати')}</span>
              </button>
            </form>
          )}
        </article>
      </section>
    </main>
  );
}
