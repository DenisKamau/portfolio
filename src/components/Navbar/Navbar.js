import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import Scroll from "react-scroll";

// Animation
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
  slideInDown: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
};

//

const ScrollLink = Scroll.Link;

const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  return (
    <StyleRoot style={{ width: "100%" }}>
      <div style={styles.fadeInDown} className="navbar">
        <nav className="navSection container">
          <div className="navbar__Container container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul
              style={isMobile ? styles.slideInDown : null}
              className={isMobile ? "navbar__mobileLinks" : "navbar__Links"}
              onClick={() => setisMobile(false)}
            >
              <ScrollLink to="work" spy={true} smooth={true} duration={1000}>
                <li onClick={() => setisMobile(false)} className="mywork">
                  My Work
                </li>
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} duration={1000}>
                <li onClick={() => setisMobile(false)} className="contact">
                  Contact
                </li>
              </ScrollLink>
            </ul>
            <button onClick={() => setisMobile(!isMobile)} className="menu">
              {isMobile ? <>✕</> : <>☰</>}
            </button>
          </div>
        </nav>
      </div>
    </StyleRoot>
  );
};

export default Navbar;
