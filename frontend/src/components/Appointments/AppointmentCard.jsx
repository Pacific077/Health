import React, { useEffect, useState } from 'react'
import dp from "../../images/dp.jpg"
const AppointmentCard = ({drname,date,time,status}) => {
  const [colore,setcolore] = useState("");
  useEffect(() => {
    if (status === 'approved') {
      setcolore('green');
    } else if (status === 'rejected') {
      setcolore('red');
    } else {
      setcolore('#B8860B');
    }
  }, [status]);
  return (
    
   <div className="appointmentCard">
    <div className="upperAppointcard">
      <img src={dp} alt="" srcset="" />
      <div className="appointdetails">
        <p className="appointmetwith">Dr. {drname}</p>
        <p className="appointmenttime"> {time}</p>
        <p className="appointmentDate">{date}</p>
      </div>
      </div>
      <div className="lowerAppointCard">
        <p className='appointStatus' style={{color:colore}}>Status : {status}</p>
      </div>
   </div>
  )
}

export default AppointmentCard