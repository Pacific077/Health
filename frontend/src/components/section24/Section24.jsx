import React from 'react'
import "./Section24.css"
import PropCard from '../Cards/PropCard'
import PropArr from './PorpArr'
import './sec24resp.css'
const Section24 = () => {
  return (
    <div className='sec24'>
      {PropArr.map((arr)=>{
        return <PropCard img={arr.img} head ={arr.head}/>
      })}

        
    </div>
  )
}

export default Section24