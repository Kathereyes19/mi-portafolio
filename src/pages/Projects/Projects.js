import React, { useRef } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const { theme } = useTheme(); // 👈 leemos el tema actual desde el contexto

  const projects = t("projects.items", { returnObjects: true });

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (!current) return;
    const cardWidth = current.querySelector(".project-card").offsetWidth + 16;
    current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`projects-section ${theme === "dark" ? "dark" : "light"}`}
      id="projects"
    >
      <h2 className="projects-title">{t("projects.title")}</h2>

      <div className="projects-wrapper">
        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((project, index) => {
            let imageSrc;
            try {
              // 👇 importa dinámicamente desde assets/projects
              imageSrc = require(`../../assets/projects/${project.image}`);
            } catch (error) {
              console.error("Error cargando imagen:", project.image, error);
              imageSrc = ""; // fallback vacío si falla
            }

            return (
              <div className="project-card" key={index}>
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    {t("projects.viewMore")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flechas solo en desktop */}
        <div className="carousel-controls">
          <button className="arrow-btn left" onClick={() => scroll("left")}>
            <ChevronLeft size={24} />
          </button>
          <button className="arrow-btn right" onClick={() => scroll("right")}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
