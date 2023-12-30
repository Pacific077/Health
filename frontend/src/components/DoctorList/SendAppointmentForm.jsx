import React, { useContext } from "react";
import "./SendAppointmentform.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContext from "../../context/Forms/FormsContext";
import { toast } from "react-toastify";
import { SendAppReqApi } from "../../Apis/UserApi";

const SendAppointmentForm = () => {
  const formcontext = useContext(FormContext);
  const { UnsetVisiblity, DoctorId } = formcontext;
  const handleClick = () => {
    UnsetVisiblity();
  };
  const handleSendReq = async () => {
    try {
      const resp = await SendAppReqApi({id:DoctorId,//will work in future
      date:"12/21/12",
      time:"12:12:12"})
      if(resp.status===200){
       toast.success("Appointment request sent !!"); 
      }
      UnsetVisiblity()
    } catch (error) {
      toast.error("Something Went wrong")
    }

  };
  return (
    <div className="sendAppointReqForm">
      <div className="appointmentformDatetime">
        <h2>Booking appointment with Dr Ojha </h2>
        <h3>PLese select date and time</h3>
        <label htmlFor="">Date</label>
        <input type="date" />
        <label htmlFor="">Time</label>

        <input type="time" />
        <div className="appointmentformBtnCont">
          <button className="appointmentformReqBtn" onClick={handleSendReq}>
            Request
          </button>
          <button className="appointmentformCancelBtn" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
      <div className="appointmentformImg">
        <FontAwesomeIcon
          onClick={handleClick}
          className="crossIcon"
          icon={faX}
        />
      </div>
    </div>
  );
};

export default SendAppointmentForm;
