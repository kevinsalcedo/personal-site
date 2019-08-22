import React from "react";

import { ParallaxLayer } from "react-spring/renderprops-addons";

const ParaLayer = props => {
  const center = props.center === undefined ? false : props.center;
  const middle = props.middle === undefined ? false : props.middle;
  const extraStyle = props.style === undefined ? null : props.style;

  let style = { display: "flex", ...extraStyle };

  if (middle) {
    style = {
      ...style,
      alignItems: "center"
    };
  }
  if (center) {
    style = {
      ...style,
      justifyContent: "center"
    };
  }

  return (
    <ParallaxLayer style={style} {...props}>
      {props.children}
    </ParallaxLayer>
  );
};

export default ParaLayer;
