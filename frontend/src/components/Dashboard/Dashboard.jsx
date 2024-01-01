import React, { useState } from "react";
import "./Dashboard.css";
import img from "../../images/greet.png";
import dp from "../../images/dp.jpg";
import { UploadProfileApi } from "../../Apis/UserApi";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [loading,setLoading]= useState(false)
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log("files", e.target.files[0]);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("profile", file);
      const res = await UploadProfileApi({ formData });
      if (res.status === 200) {
        toast.success("Profile Picture updated");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }finally{
      setLoading(false);
    }
  };
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
            <input type="file" name="profile" id="" onChange={handleChange} />
            {loading&&  <progress value={null} />}
            <h3>Update your Profile Picture</h3>
            <div className="dashBtnCont">
              <button
                type="submit"
                className="DashChangeBtn"
                onClick={handleClick}
              >
                Change{" "}
              </button>
              <button className="DashRemoveBtn">Remove</button>
            </div>
          </div>
          <div className="updateuserName">userName</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// <div className="DashLower"></div>
