import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import {
  dataportfolio,
  skillsGrouped,
  experience,
  meta,
} from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* ================= PROFILE SUMMARY ================= */}
        <section className="portfolio-hero">
          <h1>Profile Summary</h1>
          <p className="section-subtitle">
            Academic Background and Technical Expertise
          </p>

          <p className="hero-text">
            I am a Master of Science student in Data Science at Northeastern
            University’s Khoury College of Computer Sciences. I specialize in
            Machine Learning, Natural Language Processing, and Large Language
            Models, with experience across research, teaching, and industry.
            I focus on building scalable, reliable AI systems with real-world
            impact.
          </p>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="portfolio-section">
          <h2>Skills</h2>

          <div className="skills-grid">
            {skillsGrouped.map((group, i) => (
              <div key={i} className="skill-card">
                <h4>{group.category}</h4>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="portfolio-section">
          <h2>Experience</h2>

          <div className="experience-list">
            {experience.map((item, i) => (
              <div key={i} className="experience-item">
                <h4>{item.role}</h4>
                <p className="org">{item.org}</p>
                <span className="period">{item.period}</span>

                <ul className="experience-points">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="portfolio-section">
          <h2>Projects</h2>

          {dataportfolio.map((project, i) => (
            <div key={i} className="project-row">
              <img src={project.img} alt={project.title} />

              <div className="project-content">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
                <p>{project.summary}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project →
                </a>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </HelmetProvider>
  );
};
