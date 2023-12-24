import React from 'react'
import dp from "../../images/dp.jpg"
const AppointmentCard = () => {
  return (
   <div className="appointmentCard">
    <div className="upperAppointcard">
      <img src={dp} alt="" srcset="" />
      <div className="appointdetails">
        <p className="appointmetwith">Sudhanshu</p>
        <p className="appointmenttime"> 04:30 AM to 5:30 AM</p>
        <p className="appointmentDate">3rd Jan 2024</p>
      </div>
      </div>
      <div className="lowerAppointCard">
        <p className='appointStatus'>Status : Pending</p>
      </div>
   </div>
  )
}

export default AppointmentCard