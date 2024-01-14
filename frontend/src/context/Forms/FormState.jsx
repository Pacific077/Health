import React, { useState } from "react";
import FormContext from "./FormsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormState = ({ children }) => {

  const [AppointmentReqFromVis, setAppointmentReqFromVis] = useState(false);
  const [DoctorId, setDoctorID] = useState("");
  const [infoArr,setinfoArr] =useState([]);
  const [infoimg,setinfoimg] =useState("");
  const [Infotitle,setInfoTitle] =useState("");
  const setVisiblity = () => {
    setAppointmentReqFromVis(true);
  };
  const UnsetVisiblity = () => {
    setAppointmentReqFromVis(false);
  };
  return (
    <FormContext.Provider
      value={{
        AppointmentReqFromVis,
        setVisiblity,
        UnsetVisiblity,
        DoctorId,
        setDoctorID,
        infoArr,
        setinfoArr,
        setinfoimg,
        infoimg,
        Infotitle,
        setInfoTitle
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </FormContext.Provider>
  );
};

export default FormState;
