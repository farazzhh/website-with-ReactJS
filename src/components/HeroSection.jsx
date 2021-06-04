import React from "react";
import '../App.css'
import './HeroSection.css'
import Button from "./Button";
import './Button'


const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STRATED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WACTH TRAILER <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
