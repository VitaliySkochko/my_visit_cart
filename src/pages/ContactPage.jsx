import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import SocialCards from "../components/SocialCards";

const socialNetworks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vitaliy-skochko-b8a150336/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/VitaliySkochko", icon: Github },
  { name: "Instagram", href: "https://www.instagram.com/vitaliyskochko/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/vitaliy.skochko/", icon: Facebook },
];

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="social-page">
      <header className="social-page__intro">
        <h1 className="page-title-accent page-title-accent--enter">{t("contact_title")}</h1>
      </header>

      <SocialCards networks={socialNetworks} ariaLabel={t("contact_title")} />
    </main>
  );
}
