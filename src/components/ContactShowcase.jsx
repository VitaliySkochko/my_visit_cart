import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import useScrollReveal from "../utils/useScrollReveal";
import "../styles/ContactShowcase.css";

export default function ContactShowcase() {
  const { t } = useTranslation();
  const { sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`contact-showcase-section${isVisible ? " is-visible" : ""}`}
      aria-labelledby="contact-showcase-title"
    >
      <div className="contact-showcase">
        <div className="contact-showcase__form-wrap">
          <div className="contact-showcase__form-surface">
            <ContactForm />
          </div>
        </div>

        <div className="contact-showcase__content">
          <h2 className="contact-showcase__title" id="contact-showcase-title">
            {t("home_contact_title")}
          </h2>
          <div className="contact-showcase__copy">
            <p>{t("home_contact_description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
