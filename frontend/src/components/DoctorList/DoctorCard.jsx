import React from 'react'
import dp from '../../images/dp.jpg'
const DoctorCard = () => {
  return (
    <div className="doctorcard">
    <div className="docCardImg">
        <img src={dp} alt="" srcset="" />
    </div>
    <div className="docCardName">
        <h3>Dr Sudhanshu Sinha</h3>
        <p>Gynecologist</p>
    </div>
    <div className="DocCardFeeDetails">
        <p>Fee : 500</p>
    </div>
    <div className="DocCardBtnCont">
        <button>Book Now</button>
    </div>
</div>
  )
}

export default DoctorCard