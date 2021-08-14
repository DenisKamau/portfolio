import React from "react";
import "./Services.css";
import icon1 from "../../assets/Group 44.webp";
import icon2 from "../../assets/Group 47.webp";
import icon3 from "../../assets/Group 49.webp";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: "x 1.1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};

const Services = () => {
  return (
    <StyleRoot>
      <div className="section">
        <div style={styles.fadeInUp} className="container services">
          <h2>
            My awesome <br />
            <span>services</span>
          </h2>
          <p className="services__Paragraph">
            Fuelled by a passion for designing and creating compelling products, I have a deep desire to excel and continuously improve in my work.
          </p>
          <div className="services__Row">
            <div className="service_Box">
              <img src={icon1} alt="icon1" />
              <h4>Designer</h4>
              <p className="caption">
                I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and
                helps you do your business well. I make sure your website is up to that standard.
              </p>
            </div>
            <div className="service_Box">
              <img src={icon2} alt="icon2" />
              <h4>Developer</h4>
              <p className="caption">
                I build websites in Webflow or using React where I can create responsive, powerful and fully custom websites. Plus, Webflow has an
                incredibly simple Content Editor for you and your team to edit website content quickly and easily.
              </p>
            </div>
            <div className="service_Box lastBox">
              <img src={icon3} alt="icon3" />
              <h4>UI/Ux</h4>
              <p className="caption">I create User friendly interfaces for your website and a web interface that is aesthetically pleasing.</p>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Services;
