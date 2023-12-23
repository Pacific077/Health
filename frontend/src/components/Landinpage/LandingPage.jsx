import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nanvigate = useNavigate()
   const handleLoginCLick = ()=>{
    nanvigate('/login')
   }
   const handleRegisterClick = ()=>{
    console.log("Register btn clickedd");
    //to be implemneted
   }
  return (
    <div className="landingpage">
      <div className="landnav">
        <div className="landlogo"></div>
        <button className="register">Free consult</button>
      </div>
      <div className="mainland">
        <div className="leftland">
          <h1 className="biglandfont">Your Journey to </h1>
          <h1 className="biglandfont">
            Better <span className="yellowtxt">Health</span> Starts
          </h1>
          <h1 className="biglandfont">Here</h1>
          <p className="landinfo">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            adipisci asperiores voluptate expedita vitae earum, excepturi natus
            cum ipsum illum fugiat nulla nihil accusamus voluptas voluptatum ab
            quibusdam tempora voluptatem repellendus eius. Sapiente quae officia
            sequi ipsa aliquam molestias facilis.
          </p>
          <div className="landbtncont">
            <button className="login" onClick={handleLoginCLick}>Login</button>
            <button className="register" onClick={handleRegisterClick} >Register</button>
          </div>
        </div>
        <div className="rightland">
          <div className="landimage">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
