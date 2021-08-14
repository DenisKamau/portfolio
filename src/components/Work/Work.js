import React from "react";
import "./Work.css";
import image1 from "../../assets/Group-50.webp";
import image2 from "../../assets/Group-58.webp";
import image3 from "../../assets/Group-60.webp";
import { Element } from "react-scroll";

const Work = () => {
  return (
    <Element name="work">
      <section className="section">
        <div className="container work">
          <h4 className="workHeading">Latest work</h4>

          <div className="project__Row">
            <div className="leftBlock">
              <h2>Team App website</h2>
              <div className="techRow">
                <button>Webflow Design</button>
                <button>Webflow Development</button>
                <button>Concept</button>
              </div>
              <p>
                Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the
                website and the blog in Webflow which has one of the best CMS for blog hosting.
              </p>
              <a href="https://team-app-9ad9b5.webflow.io/">
                <button>View project</button>
              </a>
            </div>
            <div className="rightBlock">
              <img src={image1} alt="projectimage" />
            </div>
          </div>
          <div className="project__Row second">
            <div className="leftBlock">
              <h2>Chat App website</h2>
              <div className="techRow">
                <button>Webflow Design</button>
                <button>Webflow Development</button>
                <button>Concept</button>
              </div>
              <p>
                This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web
                page using Webflow.
              </p>
              <a href="https://chat-app-236a74.webflow.io/">
                <button>View project</button>
              </a>
            </div>
            <div className="rightBlock">
              <img src={image2} alt="projectimage" />
            </div>
          </div>
          <div className="project__Row last">
            <div className="leftBlock">
              <h2>Charity org. website</h2>
              <div className="techRow">
                <button>Design</button>
                <button>React Development</button>
                <button>Concept</button>
              </div>
              <p>
                This is a homepage design and build of a charity organization website designed first in Figma then built the responsive website using
                React js.
              </p>
              <a href="https://charitygroup.netlify.app/">
                <button>View project</button>
              </a>
            </div>
            <div className="rightBlock">
              <img src={image3} alt="projectimage" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Work;
