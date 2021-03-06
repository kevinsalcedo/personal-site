import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Transition } from "react-spring/renderprops";
import { jobs } from "../data/work";

class Experience extends React.Component {
  state = {
    index: 0
  };

  // Changes the current selected work place
  toggleWork = index => {
    this.setState({ index });
  };

  // Param: index - the current active index of the list
  // Render the menu that lists each workplace
  renderSelect = index => {
    return (
      <ListGroup variant="flush">
        {jobs.map(({ name }, jobIndex) => (
          <ListGroupItem
            name={name}
            key={name}
            active={index === jobIndex}
            onClick={() => this.toggleWork(jobIndex)}
            className="trails-menu trails-menu-hover"
            action
          >
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  };

  // Param: index - the current active index in the list
  // Renders the description of the active workplace
  renderDescription = index => {
    const offset = -150;
    return (
      <div>
        <Transition
          items={index}
          style={{ position: "relative" }}
          from={{
            position: "absolute",
            transform: `translate3d(0,${offset}px,0)`,
            opacity: 0
          }}
          enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
          leave={{ transform: `translate3d(0,${offset * -1}px,0)`, opacity: 0 }}
          config={{
            mass: 10,
            friction: 75
          }}
        >
          {newIndex => props => {
            const newJob = jobs[newIndex];
            return (
              <div style={props}>
                <h2 className="trails-header-2">{newJob.title}</h2>
                <ListGroup variant="flush">
                  {newJob.description.map((item, i) => (
                    <ListGroupItem className="trails-menu-text" key={i}>
                      {item}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            );
          }}
        </Transition>
      </div>
    );
  };

  // Render the Bootstrap grid containing both the menu and descriptions
  renderGrid = () => {
    const { index } = this.state;
    return (
      <Container
        className="parallax-grid justify-content-center"
        style={{ height: "25vh" }}
      >
        <Row className="justify-content-center">
          <Col xs={12} lg={4}>
            {this.renderSelect(index)}
          </Col>
          <Col xs={12} lg={6}>
            {this.renderDescription(index)}
          </Col>
        </Row>
      </Container>
    );
  };

  render() {
    return this.renderGrid();
  }
}
export default Experience;
