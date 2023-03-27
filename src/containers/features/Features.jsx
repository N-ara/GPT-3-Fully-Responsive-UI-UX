import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature.jsx";

const featuresData = [
  {
    title: "Lorem ipsum coetur adipcing elit. ",
    text: "Lorem ipsum dolor sit amet. elit nunc pis sed nisl. Nam eu est risus. Orci varius natoque penatibus et magnis own.",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor retra lig eu est risus. Orci varius natoque penatibus et magnis imperdiet, ex.",
  },
  {
    title: "Lorem ipsum dolor sit vdn nlfdn",
    text: "Lorem ipsum dolor sit amet. nunc pharetra ligula, natoque penatibus et magnis dis parturient montes. velit nunc pharetra.",
  },
  {
    title: "Lorem ipsum dolor",
    text: "lorem ipsum dolor sit amet. vdn nlfdn oio lvf dvfd kbfd kb dlk fdnhrth t trtm hht",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
