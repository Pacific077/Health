import React from 'react'

import "./InfoCard.css"
const InfoCard = (props) => {
  return (
    <div className='infocardcont'>
        <img src={props.icon} alt="" className="infoicon" />
        <h2 className="infohead">{props.head}</h2>
    </div>
  )
}

export default InfoCard