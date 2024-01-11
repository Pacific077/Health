import React from "react";
import "./Symptoms.css";
import SymptCard from "./SymptCard";
import quesarr from "./QuestionArr";
const Symptoms = () => {
  const introStyle = {
    fontWeight: 900,
    borderRight: "4px solid red",
  };
  return (
    <div className="Intro">
      <div className="introScreen">
        <div className="introPage">
          <h1 className="symphead">Please Select all That Applies</h1>
          <div className="symptCont">
            {quesarr.map((ques,index)=>{
              return <SymptCard ques = {ques.q} name={`q${index + 1}`} />
            })}
          
            <div className="symptBtnCont"><button>Predict</button></div>
          </div>
        </div>
        <div className="diseasePredicProgress">
          <div className="intro1">Introduction</div>
          <div className="intro2">Patients</div>
          <div className="intro3" style={introStyle}>
            Symptoms
          </div>
          <div className="intro4">Region</div>
          <div className="intro5">Results</div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
