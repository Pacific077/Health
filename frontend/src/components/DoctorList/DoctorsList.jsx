import React, { useContext, useEffect, useState } from "react";
import "./DoctorList.css";
import DoctorCard from "./DoctorCard";
import { GetAllDoctor } from "../../Apis/DoctorAPis";
import SendAppointmentForm from "./SendAppointmentForm";
import FormContext from "../../context/Forms/FormsContext";

const DoctorsList = () => {
  const [doctorList, setDoctorList] = useState(null);
  const formcontext = useContext(FormContext);
  const {AppointmentReqFromVis} = formcontext;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllDoctor();
        setDoctorList(response.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="docListPage">

     {AppointmentReqFromVis && <SendAppointmentForm />}
      <h1 className="dotorListHead">Doctors Lists :</h1>
      <div className="doctCardContainer">
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
