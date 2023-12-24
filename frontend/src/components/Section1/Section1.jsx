import React from "react";
import phone from "../../images/phone.png";
import sec1img from "../../images/sec1img.png";
import { useNavigate  } from "react-router-dom";
import "./Section1.css";
import "./sec1resp.css";
import  Typed  from "react-typed";

const Section1 = () => {
  const navigate = useNavigate();
  const handleClick =() =>{
    navigate('/intro')
  }
  return (
    <div className="sec1">
      <div className="sec1para">
        <h1 className="bigHead">
          The disease predictor model made by doctors for{"   "}
          <span className="textblue">
          <Typed
            strings={["Men", "Women","Children"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          ></Typed>
          </span>{" "}
        </h1>
        <p className="bigPara">
          Your comprehensive online healthcare solution, we provide 24x7 access
          to personalized healthcare services, seamless integration of health
          devices, and daily health updates, all within a unified and empowering
          ecosystem.
        </p>
        <div className="secBtnCont">
          <button className="interview" onClick={handleClick}>
            Start Interview
          </button>
        </div>
      </div>
      <div className="sec1phoneCont">
        <img className="sec1img" src={sec1img} alt="" />
        <img className="sec1phn" src={phone} alt="" />
      </div>
    </div>
  );
};

export default Section1;
