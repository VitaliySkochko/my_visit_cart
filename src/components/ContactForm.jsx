import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (event) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErr(t("contact_fill_all") || "Будь ласка, заповніть усі поля.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setErr(t("contact_email_invalid") || "Некоректний email.");
      return false;
    }
    if (form.website && form.website.trim().length > 0) {
      setErr(t("contact_spam_detected") || "Виявлено спам. Спробуйте ще раз.");
      return false;
    }
    setErr("");
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErr(
        "EmailJS env-параметри відсутні. Додай REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setLoading(true);
    try {
      const params = {
        name: form.name,
        email: form.email,
        message: form.message,
        title: "Contact Form",
        from_name: form.name,
        from_email: form.email,
        "ім'я": form.name,
        повідомлення: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      setSent(true);
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setErr(t("contact_send_error") || "Помилка під час відправлення. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="sent" role="status" aria-live="polite">
        <p>{t("contact_sent_message") || "Дякую! Повідомлення надіслано."}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-busy={loading}>
      {err && (
        <div className="form-error" role="alert">
          {err}
        </div>
      )}

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={onChange}
        className="hp"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field">
        <label htmlFor="contact-name">{t("contact_name") || "Ім’я"}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder={t("contact_name_placeholder") || "Ваше ім’я"}
          value={form.name}
          onChange={onChange}
          autoComplete="name"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="contact-email">{t("contact_email") || "Email"}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder={t("contact_email_placeholder") || "you@example.com"}
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="contact-message">{t("contact_message") || "Повідомлення"}</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          placeholder={t("contact_message_placeholder") || "Ваше повідомлення..."}
          value={form.message}
          onChange={onChange}
          required
        />
      </div>

      <button
        className="about-teaser__cta contact-form__submit"
        type="submit"
        aria-label={t("contact_send_aria") || "Надіслати повідомлення"}
        disabled={loading}
      >
        <span>{loading ? (t("sending") || "Надсилання…") : (t("contact_send_button") || "Надіслати")}</span>
      </button>
    </form>
  );
}
