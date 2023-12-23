import React from 'react'
import dp from '../../images/dp.jpg'
const DoctorCard = ({name,Fee ,Speciality}) => {
  return (
    <div className="doctorcard">
    <div className="docCardImg">
        <img src={dp} alt="" srcset="" />
    </div>
    <div className="docCardName">
        <h3>Dr {name}</h3>
        <p>{Speciality}</p>
    </div>
    <div className="DocCardFeeDetails">
        <p>Fee : {Fee}</p>
    </div>
    <div className="DocCardBtnCont">
        <button>Book Now</button>
    </div>
</div>
  )
}

export default DoctorCard