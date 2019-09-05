import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTrail, animated, useSpring } from "react-spring";

const items = ["Hi there,", "I'm Kevin Salcedo."];
const config = { mass: 5, tension: 2000, friction: 400 };

const subheading = "Software Engineer, Rock Climber, Dog Dad";

const Home = () => {
  const [toggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  const props = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 }
  });

  return (
    <Container className="parallax-grid">
      <Row>
        <Col xs={12} md={12}>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <animated.div style={props}>
            <h3 className="trails-sub">{subheading}</h3>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
