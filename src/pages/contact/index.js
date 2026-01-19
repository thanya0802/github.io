import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormdata((prev) => ({
      ...prev,
      loading: true,
      show: false,
    }));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: contactConfig.WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormdata({
          name: "",
          email: "",
          message: "",
          loading: false,
          show: true,
          alertmessage: "SUCCESS! Thank you for your message.",
          variant: "success",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setFormdata((prev) => ({
        ...prev,
        loading: false,
        show: true,
        alertmessage: "Failed to send message. Please try again later.",
        variant: "danger",
      }));
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
  
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
  
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              dismissible
              onClose={() =>
                setFormdata((prev) => ({ ...prev, show: false }))
              }
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
  
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              <strong>Phone:</strong> {contactConfig.YOUR_FONE}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
  
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormdata({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </Col>
  
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormdata({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </Col>
              </Row>
  
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormdata({ ...formData, message: e.target.value })
                }
                required
              />
  
              <br />
  
              <button className="btn ac_btn" type="submit">
                {formData.loading ? "Sending..." : "Send"}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
