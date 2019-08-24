import React from "react";
import ParaLayer from "../elements/ParaLayer";
import corner from "../../assets/corner_top.png";
import corner_bottom from "../../assets/corner_bottom.png";

const topMargin = 12;
const bottomMargin = 100 - topMargin;

const PageFrame = props => {
  return (
    <>
      <ParaLayer
        {...props}
        style={{ marginLeft: `${topMargin}vw`, marginTop: `${topMargin}vh` }}
      >
        <img
          style={{
            display: "block",
            width: "10%",
            height: "auto"
          }}
          src={corner}
          alt="corner"
        />
      </ParaLayer>

      <ParaLayer
        {...props}
        style={{
          marginLeft: `${bottomMargin}vw`,
          marginTop: `${bottomMargin}vh`
        }}
      >
        <img
          style={{
            display: "block",
            width: "10%",
            height: "auto",
            transform: "translate(-100%, -100%)"
          }}
          src={corner_bottom}
          alt="corner"
        />
      </ParaLayer>
    </>
  );
};

export default PageFrame;
