import React from "react";
import Home from "./pages/Home";
import { Header, Icon } from "semantic-ui-react";
import Experience from "./pages/Experience";
import { Parallax } from "react-spring/renderprops-addons";
import ParaLayer from "../components/elements/ParaLayer";
import PageFrame from "./ui/PageFrame";
import About from "./pages/About";
import ScrollMenu from "./ui/ScrollMenu";

class App extends React.Component {
  doScroll = offset => {
    this.parallax.scrollTo(offset);
  };

  render() {
    return (
      <div>
        <Parallax ref={ ref => (this.parallax = ref) } pages={ 3 }>
          {/* Frames for each apge */ }
          <PageFrame offset={ 0 } speed={ 0 } />
          <PageFrame offset={ 1 } speed={ 0 } />
          <PageFrame offset={ 2 } speed={ 0 } />


          {/* Chevron to indicate scrolling */ }
          <ParaLayer offset={ 0.9 } speed={ 0.5 } center>
            <Icon name="chevron down" size="big" />
          </ParaLayer>

          {/* Titles go after the frames */ }
          <ParaLayer offset={ 2.25 } speed={ 0.5 } center>
            <Header size="large">Work Experience</Header>
          </ParaLayer>

          {/* Components loaded last to be interactive */ }
          <ParaLayer offset={ 0 } speed={ 0.25 } middle center>
            <Home />
          </ParaLayer>
          <ParaLayer offset={ 1 } speed={ 0.25 } middle center>
            <About />
          </ParaLayer>
          <ParaLayer offset={ 2 } speed={ 0.25 } middle center>
            <Experience />
          </ParaLayer>
        </Parallax>

        {/* <ScrollMenu doScroll={ this.doScroll } /> */ }
      </div>
    );
  }
}

export default App;
