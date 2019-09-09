import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Parallax } from "react-spring/renderprops-addons";
import ParaLayer from "../components/elements/ParaLayer";
import PageFrame from "./ui/PageFrame";
import ScrollMenu from "./ui/ScrollMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.parallax = React.createRef();
  }

  doScroll = offset => {
    this.parallax.current.scrollTo(offset);
  };

  render() {
    return (
      <div>
        <Parallax ref={this.parallax} pages={4}>
          {/* Frames for each apge */}
          <PageFrame offset={0} speed={0} />
          <PageFrame offset={1} speed={0} />
          <PageFrame offset={2} speed={0} />
          <PageFrame offset={3} speed={0} />

          {/* Titles go after the frames */}
          <ParaLayer offset={1.2} speed={0.5} center>
            <h2 className="trails-header">About the Dev</h2>
          </ParaLayer>
          <ParaLayer offset={2.2} speed={0.5} center>
            <h2 className="trails-header">Work Experience</h2>
          </ParaLayer>
          <ParaLayer offset={3.2} speed={0.5} center>
            <h2 className="trails-header">Contact</h2>
          </ParaLayer>

          {/* Components loaded last to be interactive */}
          <ParaLayer offset={0} speed={0.25} middle center>
            <Home />
          </ParaLayer>
          <ParaLayer offset={1.08} speed={0.25} middle center>
            <About />
          </ParaLayer>
          <ParaLayer offset={2} speed={0.25} middle center>
            <Experience />
          </ParaLayer>
          <ParaLayer offset={3} speed={0.25} middle center>
            <Contact />
          </ParaLayer>
        </Parallax>

        <ScrollMenu doScroll={this.doScroll} parallax={this.parallax} />
      </div>
    );
  }
}

export default App;
