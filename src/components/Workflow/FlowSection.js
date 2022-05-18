import React, { useState, useEffect } from "react";
import "./FlowSection.css";
import DesktopImage from "../../assets/desktopimage.webp";
import MobileiImage from "../../assets/mobileimage.webp";

const FlowSection = () => {
  const [MobileImage, setMobileImage] = useState(false);

  const changeImage = () => {
    window.innerWidth <= 478 ? setMobileImage(true) : setMobileImage(false);
  };

  useEffect(() => {
    window.addEventListener("resize", changeImage);
    return () => window.removeEventListener("resize", changeImage);
  }, []);

  window.addEventListener("scroll", changeImage);

  return (
    <section className="flowSection">
      <div className="container flow">
        <h2>
          Let’s go through the<span style={{ color: "rgba(107, 144, 255, 1)" }}> workflow</span>
        </h2>
        <img src={MobileImage ? MobileiImage : DesktopImage} alt="workflow" />
        <p>Each stage is coordinated with the client. This ensures that the site will be completed on time and the business requirements are met. </p>
      </div>
    </section>
  );
};

export default FlowSection;
