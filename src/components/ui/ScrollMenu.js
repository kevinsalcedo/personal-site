import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const ScrollMenu = props => {
  return (
    <Container>
      <Navbar expand="md">
        <Navbar.Toggle
          className="ml-auto"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ml-auto" style={{ textAlign: "right" }}>
            <Nav.Item>
              <Nav.Link
                className="trails-nav"
                onClick={() => props.doScroll(0)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="trails-nav"
                onClick={() => props.doScroll(1)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="trails-nav"
                onClick={() => props.doScroll(2)}
              >
                Work
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default ScrollMenu;
