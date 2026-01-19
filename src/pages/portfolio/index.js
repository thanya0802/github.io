import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="Portfolio-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="portfolio-list">
          {dataportfolio.map((project, i) => (
            <div key={i} className="portfolio-row">
              {/* LEFT: IMAGE */}
              <div className="portfolio-image">
                <img src={project.img} alt={project.title} />
              </div>

              {/* RIGHT: CONTENT */}
              <div className="portfolio-text">
                <h4>{project.title}</h4>
                <p>{project.summary}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
