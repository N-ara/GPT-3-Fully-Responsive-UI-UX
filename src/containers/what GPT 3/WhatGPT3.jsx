import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature.jsx";

const WhatGPT4 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet. His defective nor convinced residence own.Nam imperdiet, ex a dignissim tristique, velit nunc pharetra ligula, eu varius odio mauris sed nisl. Nam eu est risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac nunc non metus interdum porta eu vel mauris."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet. His defective nor convinced residence own."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet. His defective nor convinced residence own. Nam imperdiet, ex a dignissim tristique, velit nunc pharetra ligula, natoque penatibus et magnis dis parturient montes. "
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet. His defective nor convinced residence own. Nam imperdiet, ex a dignissim tristique, velit nunc pharetra."
        />
      </div>
    </div>
  );
};
export default WhatGPT4;
