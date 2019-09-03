import React from "react";
import Home from "./pages/Home";
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

          {/* Titles go after the frames */ }
          <ParaLayer offset={ 2.20 } speed={ 0.5 } center>
            <h2>Work Experience</h2>
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

        <ScrollMenu doScroll={ this.doScroll } />
      </div>
    );
  }
}

export default App;
