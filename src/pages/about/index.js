import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  dataabout,
  experience,
  skillsGrouped,
  researchFocus,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="about-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header */}
        <Row className="section">
          <Col lg="12">
            <h1 className="page-title">Profile Overview</h1>
            <p className="page-subtitle">
              Academic background, research focus, and technical expertise
            </p>
            <hr />
          </Col>
        </Row>

        {/* About text */}
        <Row className="section">
          <Col lg="5">
            <h2 className="section-heading">{dataabout.title}</h2>
          </Col>
          <Col lg="7">
            <p className="body-text">{dataabout.aboutme}</p>
          </Col>
        </Row>

        {/* Research focus */}
        <Row className="section">
          <Col lg="5">
            <h2 className="section-heading">Research & Technical Focus</h2>
          </Col>
          <Col lg="7">
            <ul className="focus-list">
              {researchFocus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Experience */}
        <Row className="section">
          <Col lg="5">
            <h2 className="section-heading">Academic & Industry Experience</h2>
          </Col>
          <Col lg="7">
            <div className="timeline">
              {experience.map((item, i) => (
                <div key={i} className="timeline-item">
                  <h4>{item.role}</h4>
                  <p className="timeline-org">{item.org}</p>
                  <span className="timeline-date">{item.period}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="section">
          <Col lg="5">
            <h2 className="section-heading">Technical Competencies</h2>
          </Col>
          <Col lg="7">
            {skillsGrouped.map((group, i) => (
              <div key={i} className="skill-group">
                <h4>{group.category}</h4>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
