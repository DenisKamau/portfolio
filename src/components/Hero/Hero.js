import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import avatar from "../../assets/avatar3.svg";
import Scroll from "react-scroll";

// Animation
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeIn: {
    animation: "x 1.1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};

//

const ScrollLink = Scroll.Link;

const Hero = () => {
  return (
    <StyleRoot>
      <div className="hero__Section">
        <div className="container heroContainer">
          <Navbar />
          <div style={styles.fadeIn} className="hero__Content">
            <img className="hero_image" src={avatar} alt="avatar" />
            <p className="hero_myName">Hi, I’m Denis 👋</p>
            <h1>
              Web Designer & <br />
              <span className="hero__Span">React/Webflow</span>
              <br /> Developer
            </h1>
            <p className="hero_paragraph">My goal is to create websites for those that want to stand out from the competition</p>

            <ScrollLink to="contact" spy={true} smooth={true} duration={1000}>
              <button>Hire me</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Hero;
