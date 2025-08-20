import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const API_KEY = "TU_API_KEY_AQUI"; // 🚨 Reemplaza con tu API Key
const USERNAME = "katherinereyes119"; // 🚨 Reemplaza con tu username Behance

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`
        );
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error cargando proyectos:", error);
      }
    };

    fetchProjects();
  }, []);

  // Funciones de navegación
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Mis Proyectos</h2>

      <div className="projects-carousel">
        {projects.length > 0 ? (
          projects.slice(currentIndex, currentIndex + 4).map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.covers?.original || project.covers[404]}
                alt={project.name}
                className="project-img"
              />
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.fields?.join(", ")}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Ver más
              </a>
            </div>
          ))
        ) : (
          <p className="loading">Cargando proyectos...</p>
        )}
      </div>

      <div className="carousel-buttons">
        <button onClick={prevSlide} className="carousel-btn">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="carousel-btn">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
