import React from "react";
import "./Footer.css";
import { Element } from "react-scroll";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <Element name="contact">
      <section className="section footerSection">
        <div className="container footer">
          <div className="footerContent">
            <div className="footerLeft">
              <h2 className="footerHeader">
                Interested ? <br />
                Let's get in touch !
              </h2>
              <p className="footerParagraph">
                If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at
                <span style={{ color: "rgb(77, 119, 249)" }}> denokim55@gmail.com</span> or call me
                <span style={{ color: "rgb(77, 119, 249)" }}> +254710857297</span>
              </p>
            </div>
            <div className="footerRight">
              <form className="form">
                <div className="formTopSection">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input disabled required placeholder="Enter your name" type="text" name="from_name" />
                  </div>
                  <div className="emailInput">
                    <label htmlFor="email">Email</label>
                    <input disabled required placeholder="Enter your email" type="email" name="reply_to" />
                  </div>
                </div>
                <div className="formBottomSection">
                  <label htmlFor="message">Message</label>
                  <textarea disabled required placeholder="Enter your message" type="text" name="message" />
                </div>
                <button disabled type="submit" className="formButton">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="footerIcons">
            <p className="copyright">Copyright © 2022 Denis. All rights reserved</p>
            <div className="linkIcons">
              <a href="https://github.com/DenisKamau?tab=repositories">
                <img className="githubIcon" src={githubIcon} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/denis-kimani-9229001a9/">
                <img src={linkedinIcon} alt="linkedim" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Footer;
