import React from "react";
import ParaLayer from "../elements/ParaLayer";
import corner from "../../assets/corner_top.png";
import corner_bottom from "../../assets/corner_bottom.png";

const PageFrame = props => {
  return (
    <>
      <ParaLayer {...props} style={{ marginLeft: "10vw", marginTop: "10vh" }}>
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
          marginLeft: "90vw",
          marginTop: "90vh"
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
