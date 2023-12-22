import React from "react";
import "./FeatureAchive.css";

const FeatureCard = (props) => {
  return (
    <div className="featureCardCont">
      <img src={props.img} alt="" className="featurecardimg" />
      <h3 className="featurecardhead">{props.head}</h3>
      <p className="featureCardDesc">
       {props.desc}
      </p>
    </div>
  );
};

export default FeatureCard;
