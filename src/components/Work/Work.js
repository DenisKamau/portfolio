import React from "react";
import "./Work.css";
import image1 from "../../assets/delight.png";
import image2 from "../../assets/payments.png";
import image3 from "../../assets/dash.png";
import { Element } from "react-scroll";

const Work = () => {
  return (
    <Element name="work">
      <section className="section">
        <div className="container work">
          <h4 className="workHeading">Latest work</h4>

          <div className="project__Row">
            <div className="leftBlock">
              <h2>Naibrom Liquor Store</h2>
              <div className="techRow">
                <button>Next js</button>
                <button>Sass</button>
                <button>APIs</button>
                <button>Firebase</button>
              </div>
              <p>
                This is a headless ecommerce store I built for a client. The client needed a store where his customers can view all his products & order online. It utilizes APIs to handle ecommerce operations e.g adding to cart and checkouts. <br /> <br /> A customer can also create an account & track orders made in realtime. This site has a <text style={{ fontWeight: "700", color: "#000 !important" }}> Dark mode </text>
                too.
              </p>
              <a href="https://naibrom.delivery">
                <button>View project</button>
              </a>
            </div>
            <div className="rightBlock">
              <img src={image1} alt="projectimage" />
            </div>
          </div>
          <div className="project__Row second">
            <div className="leftBlock">
              <h2>Payments System Landing Page</h2>
              <div className="techRow">
                <button>HTML</button>
                <button>Sass</button>
                <button>Javascript</button>
              </div>
              <p>This is a homepage design and build for a concept project – a payments system application. It was converted from a Figma design to a website using Html, Css and Javascript.</p>
              <a href="https://payment-lp.vercel.app/">
                <button>View project</button>
              </a>
            </div>
            <div className="rightBlock">
              <img src={image2} alt="projectimage" />
            </div>
          </div>
          <div className="project__Row last">
            <div className="leftBlock">
              <h2>Covid Tracker</h2>
              <div className="techRow">
                <button>HTML</button>
                <button>Sass</button>
                <button>APIs</button>
                <button>Javascript</button>
              </div>
              <p>
                This is a Covid-19 Tracker that displays the number of positive cases, nagative cases and total number of people tested. All data displayed is fetched from an API and are from the latest reports. <br /> <br /> Positive cases in a county are displayed as red bubbles on the map of Kenya.
              </p>
              <a href="https://covid-dashboard-two.vercel.app/">
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
