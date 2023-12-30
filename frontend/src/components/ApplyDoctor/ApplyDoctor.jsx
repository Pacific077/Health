import React from "react";
import { useNavigate  } from "react-router-dom";
import "./ApplyDoctor.css";
import { SendDoctorReqApi } from "../../Apis/UserApi";
import { toast } from "react-toastify";
const ApplyDoctor = () => {
    const navigate = useNavigate()

  const handleSubmit =async () => {
  
    try {
      const result = await SendDoctorReqApi({
        name:"anything",
        email:"abcd@email.com",
        password:"random",
        Speciality:"sb kch",
        Fees:45678,
        date:"21:12:12",
        time:"12:34"
      });
      console.log("result after applying for dotor form",result);
      if(result.status===200){
        toast.success("Applied for Doctor Role");
        navigate('/home');
      }
    } catch (error) {
      
    }

    
  };

  return (
    <div className="ApplyDoctorPage">
      <div className="InfoBeforeApply">
        <h1 className="ApplicationHead">Some Key Points</h1>
        <ul className="applicationPoints">
          <li>
            Please note that due to a high volume of applicants, it may take
            some time for our team to process and review your application.
          </li>
          <li>
            Ensure all provided information is accurate and complete to expedite
            the application process
          </li>
          <li>
            Our team will verify your qualifications and credentials to ensure a
            high standard of medical care on our platform.
          </li>
          <li>
            Emphasize your commitment to patient privacy and confidentiality,
            adhering to all healthcare data protection regulations.
          </li>
        </ul>
      </div>
      <div className="applictionForm">
        <h1>Application Form</h1>
        <div className="frstBlock">
          <div className="nameApp">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="emailApp">
            <label htmlFor="">Email</label>

            <input type="email" />
          </div>
        </div>
        <div className="secondBlock">
          <p>What is Your Gender ?</p>
          <input type="radio" id="male" name="gender" value="Bike" />
          <label for="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="Car" />
          <label for="female"> Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="Car" />
          <label for="other"> Others</label>
          <br />
        </div>
        <div className="thrdblock">
          <h1>//complete rest form</h1>
        </div>
        <div className="applicationBtnCont">
          <button className="applicationSubmitBtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyDoctor;
