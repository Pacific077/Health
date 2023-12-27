import React from "react";
import "./Dashboard.css";
import img from "../../images/greet.png";
import dp from "../../images/dp.jpg";

const Dashboard = () => {
  return (
    <div className="dashboardPage">
      <div className="dashLeft">
        <img src={dp} alt="" srcset="" />
        <div className="dashinfo">

        <p>Name : John Doe</p>
        <p>Email : John@Doe.com</p>
        <p>Age : 69</p>
        <p>Gender : Binary</p>
        </div>
      </div>
      <div className="dashright">
        <div className="dashrightUpper">
          <div className="greetUserContainer">
          <div className="greet">
            <h1> Hi Albert!!!!!</h1>
            <h1>Welcome Back</h1>
          </div>
          <div className="greetimgcont">
            <img src={img} alt="" srcset="" className="greetImg" />
          </div>
        </div>
        </div>
        <div className="dashrightLower">
          <div className="uplaodProfilePic">
         <img src={dp} alt="" srcset="" />
         <h3>Update your Profile Picture</h3>
         <div className="dashBtnCont">
          <button className="DashChangeBtn">Change Pic</button>
          <button className="DashRemoveBtn">Remove Pic</button>
         </div>
          </div>
          <div className="updateuserName">

userName 
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Dashboard;

        // <div className="DashLower"></div>