import React from "react";
import { Menu } from "semantic-ui-react";

const ScrollMenu = props => {
  return (
    <Menu floated="right" secondary stackable>
      <Menu.Item onClick={() => props.doScroll(0)}>Home</Menu.Item>
      <Menu.Item onClick={() => props.doScroll(1)}>About</Menu.Item>
      <Menu.Item onClick={() => props.doScroll(2)}>Work</Menu.Item>
    </Menu>
  );
};

export default ScrollMenu;
