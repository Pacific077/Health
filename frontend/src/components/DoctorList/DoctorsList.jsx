import React, { useContext, useEffect, useState } from "react";
import "./DoctorList.css";
import DoctorCard from "./DoctorCard";
import { GetAllDoctor } from "../../Apis/DoctorAPis";
import SendAppointmentForm from "./SendAppointmentForm";
import FormContext from "../../context/Forms/FormsContext";
import ReactLoading from 'react-loading';
import { useParams } from "react-router-dom";


const DoctorsList = () => {
  const [doctorList, setDoctorList] = useState(null);
  const [loading, setloading] = useState(false);
  const formcontext = useContext(FormContext);
  const {AppointmentReqFromVis} = formcontext;
  const {dieseaseName} = useParams()


  useEffect(() => {
    console.log("diseaseName",dieseaseName)
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await GetAllDoctor({dieseaseName});
        setDoctorList(response.data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="docListPage">

     {AppointmentReqFromVis && <SendAppointmentForm />}
      <h1 className="dotorListHead">{dieseaseName==="null"?"All":dieseaseName} Doctors Lists :</h1>
      <div className="doctCardContainer">
        {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="purple" height={120} width={120} /></div>}
        {doctorList ? (
          doctorList.map((doctor) => {
            return (
              <DoctorCard
              key={doctor._id}
                DrId={doctor.userId}
                name={doctor.name}
                Fee={doctor.Fees}
                Speciality={doctor.Speciality}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
       
      </div>
    </div>
  );
};

export default DoctorsList;
