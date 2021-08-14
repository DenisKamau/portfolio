import React, { useState } from "react";
import "./TopButton.css";
import arrow from "../../assets/Group 1.webp";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const TopButton = () => {
  const [Count, setCount] = useState(0);
  const [Visibility, setVisibility] = useState(false);

  const onAnimationIteration = () => {
    setCount(Count + 1);
  };

  const changeVisibility = () => {
    window.scrollY >= 70 ? setVisibility(true) : setVisibility(false);
  };

  window.addEventListener("scroll", changeVisibility);

  return (
    <div className={Visibility ? "topButton active" : "topButton"} onClick={scrollToTop} onAnimationIteration={onAnimationIteration}>
      <img className="arrowIcon" src={arrow} alt="topIcon" />
    </div>
  );
};

export default TopButton;
