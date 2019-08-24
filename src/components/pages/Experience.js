import React from "react";
import { Grid, Menu, List } from "semantic-ui-react";
import { Transition } from "react-spring/renderprops";
import { jobs } from "../data/work";

class Experience extends React.Component {
  state = {
    index: 0
  };

  toggleWork = index => {
    this.setState({ index });
  };

  render() {
    const { index } = this.state;
    return (
      <Grid
        columns="equal"
        rows="equal"
        padded
        relaxed="very"
        stackable
        className="parallax-grid"
      >
        <Grid.Row />
        <Grid.Row only="large screen" />
        <Grid.Row columns="equal">
          <Grid.Column />
          <Grid.Column width={4}>
            <Menu secondary vertical compact>
              {jobs.map(({ name }, jobIndex) => {
                return (
                  <Menu.Item
                    name={name}
                    key={name}
                    active={index === jobIndex}
                    onClick={() => this.toggleWork(jobIndex)}
                  >
                    {name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Grid.Column>
          <Grid.Column width={8}>
            <Transition
              items={index}
              from={{
                position: "absolute",
                transform: "translate3d(0,-150px,0)",
                opacity: 0
              }}
              enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
              leave={{ transform: "translate3d(0,150px,0)", opacity: 0 }}
              config={{
                mass: 10,
                friction: 75
              }}
            >
              {newIndex => props => {
                const newJob = jobs[newIndex];
                return (
                  <div style={props}>
                    <h3>{newJob.title}</h3>
                    <List>
                      {newJob.description.map((item, i) => (
                        <List.Item key={i}>{item}</List.Item>
                      ))}
                    </List>
                  </div>
                );
              }}
            </Transition>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}
export default Experience;
