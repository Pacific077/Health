import React from 'react'
import dp from "../../images/dp.jpg"
const SingleNotifCard = ({msg,newNot}) => {
  return (
    <div className={newNot === 1 ? "singleNotification newNotifbg" :"singleNotification"}>
        <img src={dp} alt="" srcset="" />
        <p>{msg}</p>
        <p>time</p>
  </div>
  )
}

export default SingleNotifCard