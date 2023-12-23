import React, { useEffect, useState } from "react";
import "./DoctorList.css";
import DoctorCard from "./DoctorCard";
import { GetAllDoctor } from "../../Apis/DoctorAPis";
const DoctorsList = () => {
  const [doctorList, setDoctorList] = useState(null);

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
      <h1 className="dotorListHead">Doctors Lists :</h1>
      <div className="doctCardContainer">
        {doctorList ? (
          doctorList.map((doctor) => {
            return (
              <DoctorCard
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
