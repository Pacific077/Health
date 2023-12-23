import React from 'react'

import './DoctorList.css'
import DoctorCard from './DoctorCard'
const DoctorsList = () => {
  return (
    <div className='docListPage'>
        <h1 className='dotorListHead'>Doctors Lists :</h1>
        <div className="doctCardContainer">
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
    </div>
  )
}

export default DoctorsList