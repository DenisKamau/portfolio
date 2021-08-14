import React, { useState } from "react";
import "./Footer.css";
import { Element } from "react-scroll";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import swal from "sweetalert";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

init("user_g8GaT7E2okg7wtNFPCMTx");

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID } = process.env;

const Footer = () => {
  const [ToSend, setToSend] = useState({
    from_name: "",
    to_name: "Denis",
    reply_to: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!ToSend.from_name || !ToSend.reply_to || !ToSend.message) {
      return swal("Fill in all details!", {
        buttons: false,
        icon: "error",
        timer: 1700,
      });
    } else {
      send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, ToSend)
        .then(() => {
          swal("Message Received!", {
            button: false,
            icon: "success",
            timer: 1700,
          });
          setToSend({
            from_name: "",
            reply_to: "",
            message: "",
          });
        })
        .catch(() => {
          swal("Error sending message! Please try again!", {
            buttons: false,
            icon: "error",
            timer: 1700,
          });
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...ToSend, [e.target.name]: e.target.value });
  };

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
                If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly
                at
                <span style={{ color: "rgb(77, 119, 249)" }}> denokim55@gmail.com</span> or call me
                <span style={{ color: "rgb(77, 119, 249)" }}> +254710857297.</span>
              </p>
            </div>
            <div className="footerRight">
              <form className="form">
                <div className="formTopSection">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input value={ToSend.from_name} onChange={handleChange} required placeholder="Enter your name" type="text" name="from_name" />
                  </div>
                  <div className="emailInput">
                    <label htmlFor="email">Email</label>
                    <input value={ToSend.reply_to} onChange={handleChange} required placeholder="Enter your email" type="email" name="reply_to" />
                  </div>
                </div>
                <div className="formBottomSection">
                  <label htmlFor="message">Message</label>
                  <textarea value={ToSend.message} onChange={handleChange} required placeholder="Enter your message" type="text" name="message" />
                </div>
                <button onClick={sendEmail} type="submit" className="formButton">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="footerIcons">
            <p className="copyright">Copyright © 2021 Denis. All rights reserved</p>
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
