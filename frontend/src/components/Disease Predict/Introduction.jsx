import React from "react";
import "./Intro.css";
import intrImg from "../../images/introrig.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {  useNavigate } from "react-router-dom";
const Introduction = () => {
  const navigate = useNavigate();
  const introStyle = {
    fontWeight: 900,
    borderRight: '4px solid red',
  };
  const handleClick = ()=>{
    navigate('/symptoms')
  }
  return (
    <div className="Intro">
      <div className="introScreen">
        <div className="introPage">
          <div className="introCont">
            <div className="leftintro">
              <div className="introdesc">
                <h1>Check your Symptoms</h1>
                <p>
                  Take a short (3 min) symptom assessment. The information you
                  give is safe and won't be shared. Your results will include:
                </p>
                <ul>
                  <li className="introbullet">Possible causes of symptoms</li>
                  <li className="introbullet">
                    Recommendations on what to do next
                  </li>
                </ul>
              </div>
              <div className="aboutTool">
                <h2>About this Tool</h2>
                <ul>
                  <li className="introbullet nostyle">
                    <FontAwesomeIcon className="introicons" icon={faCheck} />
                    Created and validated by doctors
                  </li>
                  <li className="introbullet nostyle">
                    <FontAwesomeIcon className="introicons" icon={faCheck} />
                    Clinically validated with patient cases
                  </li>
                  <li className="introbullet nostyle">
                    <FontAwesomeIcon className="introicons" icon={faCheck} />
                    Reported 100 percent acuuracy
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightintro">
              <img src={intrImg} alt="" />
            </div>
          </div>
          <div className="introbtncnt">
            <button className="introbtn" onClick={handleClick}>Next</button>
          </div>
        </div>
        <div className="diseasePredicProgress">
          <div className="intro1" style={introStyle} >Introduction</div>

          <div className="intro3">Symptoms</div>
          {/* <div className="intro4">Region</div> */}
          <div className="intro5">Results</div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
