import React from "react";
import "./Contact.css";
import logoDark from "../../assets/img/logo-dark.png"; // logo fijo, siempre modo dark
import { Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* Lado izquierdo */}
        <div className="contact-left">
          <img src={logoDark} alt="Logo" className="contact-logo" />
          <p className="contact-text">{t("contact.text")}</p>
        </div>

        {/* Línea vertical */}
        <div className="contact-divider"></div>

        {/* Lado derecho */}
        <div className="contact-right">
          <div className="contact-item">
            <Phone size={24} className="contact-icon" />
            <span>{t("contact.phone")}</span>
          </div>
          <div className="contact-item">
            <Mail size={24} className="contact-icon" />
            <span>{t("contact.email")}</span>
          </div>

          {/* Botones sociales */}
          <div className="contact-socials">
            <a
              href={t("contact.linkedinUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              <Linkedin size={24} />
              <span>{t("contact.linkedin")}</span>
            </a>
            <a
              href={t("contact.instagramUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              <Instagram size={24} />
              <span>{t("contact.instagram")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
