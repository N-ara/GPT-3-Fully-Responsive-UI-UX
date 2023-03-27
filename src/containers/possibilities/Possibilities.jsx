import React from "react";
import "./possibilities.css";
import possibilityImage from "../../assets/possibility.png";

const Possibilities = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibilities">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilities" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet. His defective nor convinced residence own.
          Nam imperdiet, ex a dignissim tristique, velit nunc pharetra. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
          Sed laoreet odio at dui tincidunt elementum. Vivamus sodales mauris
          sodales, sollicitudin neque in, congue mi. Maecenas egestas efficitur
          ex vitae consequat.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};
export default Possibilities;
