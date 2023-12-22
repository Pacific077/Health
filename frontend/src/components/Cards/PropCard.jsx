import React from 'react'
import "./PropCard.css"

const PropCard = (props) => {
  return (
    <div className='propcardcont'>
        <h2 className="propcardhead">
        {props.head}
        </h2>
        <img src={props.img} alt="" className="propcardimg" />
    </div>
  )
}

export default PropCard