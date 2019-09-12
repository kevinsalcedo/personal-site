import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <Container className="parallax-grid">
      <Row className="justify-content-center">
        <Col xs={12} sm={8}>
          <p className="trails-body" style={{ textAlign: "center" }}>
            If you'd like to collaborate on a project, or if you want to start a
            conversation, you can e-mail me at the link below!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
