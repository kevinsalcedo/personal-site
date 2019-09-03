import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ScrollMenu = props => {
  return (
    <Navbar bg="light" variant="light" collapseOnSelect expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link onClick={ () => props.doScroll(0) }>Home</Nav.Link>
          <Nav.Link onClick={ () => props.doScroll(1) }>About</Nav.Link>
          <Nav.Link onClick={ () => props.doScroll(2) }>Work</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ScrollMenu;
