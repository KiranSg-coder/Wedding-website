// hero.jsx
import React from "react";
import Headers from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={Headers.heroContainer}>
        <div className={Headers.headerContent}>
          <h2>Your Heading Text</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
