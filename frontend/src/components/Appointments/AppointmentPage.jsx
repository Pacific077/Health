import React from 'react'
import './Appointment.css'
import AppointmentCard from './AppointmentCard'
const AppointmentPage = () => {
  return (
    <div className='appointmentPage'>
      <div className="notificationScreen">
        <div className="notifhead">
          <h3>Appointments <span className='redtext'>3+</span> </h3>
          <p>Mark all as read</p>
        </div>
        <div className="appointmentcont">
      <AppointmentCard/>
      <AppointmentCard/>
      <AppointmentCard/>
     
        </div>
      </div>
    </div>
  )
}

export default AppointmentPage