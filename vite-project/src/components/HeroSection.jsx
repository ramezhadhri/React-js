import React from "react";
import { Button } from "./button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-2.mp4"
        autoPlay
        loop
        muted
      ></video>
       <h1>khademni </h1>
       <p> here you can find your dream job </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED 
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i class="fa fa-play-circle" ></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
