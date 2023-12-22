import React from 'react'
import './Notification.css'
import SingleNotifCard from './SingleNotifCard'
const Notfication = () => {
  return (
    <div className='notificationPage'>
      <div className="notificationScreen">
        <div className="notifhead">
          <h3>Notifications <span className='redtext'>3+</span> </h3>
          <p>Mark all as read</p>
        </div>
        <div className="notifContainer">
          <SingleNotifCard />
          <SingleNotifCard />
          <SingleNotifCard />
          <SingleNotifCard />
          <SingleNotifCard />
        </div>
      </div>
    </div>
  )
}

export default Notfication