import React from 'react'
import { useNavigate } from 'react-router-dom'

const PredictionCard = ({setvis,dis}) => {
  const navigate = useNavigate()
    const handleClick = ()=>{
        setvis(false)
        navigate(`/list/${dis?dis:"null"}`)
    }
  return (
    <div className='Predictioncard'>
        <div className="prdictonIamage"></div>
        <div className="prediction">{dis?dis:"null"}</div>
        <button style={{fontSize:'smaller',width:"90%",height:"6vh"}} onClick={handleClick}>Doctor Recommendation</button>
    </div>
  )
}

export default PredictionCard