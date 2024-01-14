import React, { useState } from "react";
import "./Symptoms.css";
import SymptCard from "./SymptCard";
import {features, quesarr} from "./SymptomsList";
import axios from "axios";
import PredictionCard from "./PredictionCard";
import ReactLoading from 'react-loading';
const Symptoms = () => {
  const [loading,setLoading] = useState(false);
  const [vis,setvis] = useState(false);
  const [disease,setdisease] = useState("");
  const [answer, setAnswer] = useState(Array(132).fill(0));
  

  const handleFormChange = (idx, reply)=>{
    const newArray = [...answer];
    newArray[idx] = reply;
    setAnswer(newArray);
  } 

  const handlePredict = async ()=>{
    // setLoading(true);
    // console.log("predict called");
    // const resp = await axios.post("/api/v1/doctor/predict",[features,answer]);
    // setLoading(false);
    // setdisease(resp.data.Result)
    setvis(true);

  }

  const introStyle = {
    fontWeight: 900,
    borderRight: "4px solid red",
    
  };
  return (
    <div className="Intro">
      <div className="introScreen">
        <div className="introPage" >
        {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="purple" height={120} width={120} /></div>}
          {vis&&<PredictionCard setvis={setvis} dis={disease} />}
          <h1 className="symphead">Please Select all That Applies</h1>
          <div className="symptCont" >
          {quesarr.map((obj,idx) => (
            <SymptCard handleFormChange={handleFormChange} key={obj.id} idx={idx} question={obj.q} />
          ))} 
            <div className="symptBtnCont" onClick={handlePredict}><button>Predict</button></div>
          </div>
        </div>
        <div className="diseasePredicProgress">
          <div className="intro1">Introduction</div>
          {/* <div className="intro2">Patients</div> */}
          <div className="intro3" style={!vis ? introStyle : undefined}>
            Symptoms
          </div>
          <div className="intro5" style={vis ? introStyle : undefined}>Results</div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
