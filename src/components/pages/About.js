import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { about } from "../data/about";

const About = () => {
  return (
    <Container className="parallax-grid">
      <Row>
        <Col xs={12} md={8}>
          {about["body"].map((item, i) => (
            <p className="trails-body" key={i}>
              {item}
            </p>
          ))}
        </Col>
        <Col
          md={4}
          className="justify-content-middle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            className="mah-face"
            src={about["photo"]}
            alt="me"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
