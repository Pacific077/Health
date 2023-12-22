import React from 'react'

const AchivCard = (props) => {
  return (
    <div className='AchivCardCont'>
        <img src={props.img} alt="" className="achivcardimg" />
        <p className="achivcarddesc">{props.desc}</p>
    </div>
  )
}

export default AchivCard