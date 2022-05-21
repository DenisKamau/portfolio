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
            <p className="hero_myName">
              Hi, I’m Denis{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </p>
            <h1>
              Frontend web <span className="hero__Span">developer</span>,
              <span className="hero__Span">
                {" "}
                designer <br />{" "}
              </span>{" "}
              & software tinkerer <br />
            </h1>
            <p className="hero_paragraph">
              I am currently working at <span style={{ fontWeight: "600", color: "#4b5563" }}>Value Chain Factory </span> in Nairobi, Kenya.
            </p>

            <ScrollLink to="contact" spy={true} smooth={true} duration={1800}>
              <button>Contact me</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Hero;
