import React, { useState } from "react";
import { Grid } from 'semantic-ui-react'
import { useTrail, animated, useSpring } from "react-spring";

const items = [ "Hi there,", "I'm Kevin Salcedo." ];
const config = { mass: 5, tension: 2000, friction: 400 };

const subheading = "Software Engineer, Rock Climber, Dog Dad";

const Home = () => {
  const [ toggle ] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  const props = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    config: {
      mass: 5,
      tension: 100,
      friction: 30
    }
  });
  return (
    <Grid columns='equal' rows='equal' padded className="parallax-grid">
      <Grid.Row />
      <Grid.Row>
        <Grid.Column />
        <Grid.Column width={ 14 }>
          { trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={ items[ index ] }
              className="trails-text"
              style={ {
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              } }
            >
              <animated.div style={ { height } }>{ items[ index ] }</animated.div>
            </animated.div>
          )) }
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid >
  )
};

export default Home;
