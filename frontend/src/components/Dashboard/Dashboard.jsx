import React from "react";
import "./Dashboard.css";
import img from "../../images/greet.png";

const Dashboard = () => {
  return (
    <div className="dashboardPage">
      <div className="Dashupper">
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
      <div className="DashLower">
        <div className="userinfoLeft">
          <p><span className="bolderfont">Name : </span>  John Doe</p>
          <p><span className="bolderfont">User_ID : </span>  John Doe</p>
          <p><span className="bolderfont">Address : </span>  John Doe</p>
          <p><span className="bolderfont">Phone : </span>  John Doe</p>
          <p><span className="bolderfont">BirthDate : </span>  John Doe</p>
          <p><span className="bolderfont">Age : </span>  John Doe</p>
        </div>
        <div className="userinfoRight">
        <p><span className="bolderfont">Email : </span>  John Doe</p>
          <p><span className="bolderfont">Role : </span>  John Doe</p>
          <p><span className="bolderfont">Status : </span>  John Doe</p>
          <p><span className="bolderfont">UserName : </span>  John Doe</p>
          <p><span className="bolderfont">Password : </span>  John Doe</p>
          <p><span className="bolderfont">Join Date : </span>  John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
