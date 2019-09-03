import React from "react";
import { Menu, List } from "semantic-ui-react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Transition } from "react-spring/renderprops";
import { jobs } from "../data/work";

class Experience extends React.Component {
  state = {
    index: 0
  };

  toggleWork = index => {
    this.setState({ index });
  };

  renderSelect = (index) => {
    return (
      <Menu secondary vertical compact>
        { jobs.map(({ name }, jobIndex) => {
          return (
            <Menu.Item
              name={ name }
              key={ name }
              active={ index === jobIndex }
              onClick={ () => this.toggleWork(jobIndex) }
            >
              { name }
            </Menu.Item>
          );
        }) }
      </Menu>


    )
  }

  renderDescription = (index) => {
    return (<Transition
      items={ index }
      from={ {
        position: "absolute",
        transform: "translate3d(0,-150px,0)",
        opacity: 0
      } }
      enter={ { transform: "translate3d(0,0px,0)", opacity: 1 } }
      leave={ { transform: "translate3d(0,150px,0)", opacity: 0 } }
      config={ {
        mass: 10,
        friction: 75
      } }
    >
      { newIndex => props => {
        const newJob = jobs[ newIndex ];
        return (
          <div style={ props }>
            <h3>{ newJob.title }</h3>
            <List>
              { newJob.description.map((item, i) => (
                <List.Item key={ i }>{ item }</List.Item>
              )) }
            </List>
          </div>
        );
      } }
    </Transition>
    )

  }

  renderGrid = () => {
    const { index } = this.state;
    return (
      <Container className="parallax-grid">
        <Row className="justify-content-md-center">
          <Col xs={ 12 } md={ 4 } >
            { this.renderSelect(index) }
          </Col>
          <Col xs={ 12 } md={ 4 } >
            { this.renderDescription(index) }
          </Col>
        </Row>
      </Container >
    )
  }

  render() {
    return this.renderGrid();
  }
}
export default Experience;
