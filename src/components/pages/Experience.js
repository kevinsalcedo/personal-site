import React from "react";
import { Grid, Menu, Container, List } from "semantic-ui-react";
import { Transition } from "react-spring/renderprops";
import { jobs } from "../data/work";

class Experience extends React.Component {
  state = {
    activeWork: "Conduent"
  };

  toggleWork = (e, item) => {
    this.setState({ activeWork: item.name });
  };

  render() {
    const { activeWork } = this.state;
    const selected = jobs.find(({ name }) => name === activeWork);
    return (
      <div className="trails-main">
        <Container text>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Menu secondary vertical stackable>
                {jobs.map(({ name }) => {
                  return (
                    <Menu.Item
                      name={name}
                      key={name}
                      active={activeWork === name}
                      onClick={this.toggleWork}
                    >
                      {name}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Transition
                items={activeWork}
                from={{
                  position: "absolute",
                  transform: "translate3d(0,-50px,0)",
                  opacity: 0
                }}
                enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
                leave={{ transform: "translate3d(0,-50px,0)", opacity: 0 }}
              >
                {() => props => (
                  <div style={props}>
                    <h3>{selected.title}</h3>
                    <List>
                      {selected.description.map((item, i) => (
                        <List.Item key={i}>{item}</List.Item>
                      ))}
                    </List>
                  </div>
                )}
              </Transition>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default Experience;
