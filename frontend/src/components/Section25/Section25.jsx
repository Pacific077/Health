import React from 'react'
import "./Section25.css"
import FeatureCard from '../Cards/FeatureCard'
import AchivCard from '../Cards/AchivCard'
import FeatureArr from './FeatureArray'
import Achivarr from './Achivarr'
const Section25 = () => {
  return (
    <div className='sec25'>
      <div className="featurecardsHolder">
        {FeatureArr.map((arr)=>{
          return  <FeatureCard img={arr.img} head={arr.head} desc={arr.desc}/>
         
        })}
        
      </div>
      <div className="achivementcardsholder">
        {
          Achivarr.map((arr)=>{
            return <AchivCard img={arr.img} desc ={arr.desc}/>
          })
        }


      </div>
    </div>
  )
}

export default Section25