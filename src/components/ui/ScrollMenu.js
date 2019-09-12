import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class ScrollMenu extends React.Component {
  state = {
    activeItem: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { activeItem } = this.state;
    const ref = this.props.parallax.current;
    const currentPosition = ref.current;
    const pageSize = ref.space;
    const val = Math.floor((currentPosition + pageSize / 8) / pageSize);

    if (activeItem !== val) {
      this.setState({ activeItem: val });
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container className="scroll-menu">
        <Navbar expand="md" sticky="top">
          <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ml-auto" style={{ textAlign: "right" }}>
              <Nav.Item>
                <Nav.Link
                  className="trails-nav"
                  onClick={() => this.props.doScroll(0)}
                  active={activeItem === 0}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="trails-nav"
                  onClick={() => this.props.doScroll(1)}
                  active={activeItem === 1}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="trails-nav"
                  onClick={() => this.props.doScroll(2)}
                  active={activeItem === 2}
                >
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="trails-nav"
                  onClick={() => this.props.doScroll(3)}
                  active={activeItem === 3}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default ScrollMenu;
