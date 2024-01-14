import React from 'react'

const PredictionCard = ({setvis,dis}) => {
    const handleClick = ()=>{
        setvis(false)
    }
  return (
    <div className='Predictioncard'>
        <div className="prdictonIamage"></div>
        <div className="prediction">{dis}</div>
        <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default PredictionCard