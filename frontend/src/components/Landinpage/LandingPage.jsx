import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nanvigate = useNavigate();

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  const handleLoginCLick = () => {
    nanvigate("/login");
  };
  const handleRegisterClick = () => {
    console.log("Register btn clickedd");
    nanvigate("/register");
  };
  return (
    <div className="landingpage">
      <div
        className="cursor"
        style={{ left: position.x, top: position.y }}
      ></div>
      <div className="landnav">
        <div className="landlogo"></div>
        <button className="register">About Us</button>
      </div>
      <div className="mainland">
        <div className="leftland">
          <h1 className="biglandfont">Your Journey to </h1>
          <h1 className="biglandfont">
            Better{" "}
            <span class="waviy">
              <span style={{ "--i": 1 }}>H</span>
              <span style={{ "--i": 2 }}>E</span>
              <span style={{ "--i": 3 }}>A</span>
              <span style={{ "--i": 4 }}>L</span>
              <span style={{ "--i": 5 }}>T</span>
              <span style={{ "--i": 6 }}>H</span>
            </span>{" "}
            Starts
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
            <button className="login" onClick={handleLoginCLick}>
              Login
            </button>
            <button className="register" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>
        <div className="rightland">
          <div className="landimage"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
