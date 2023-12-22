import React from 'react'
import "./Faq.css"
import FaqArr from './FaqArr'
import QuesCard from './QuesCard'
import './Faqresp.css'
const Faq = () => {
  return (
    <div className='faqsec '>
        <h1 className='bigHead marBot'>Frequently Asked Questions</h1>
        
        <div className="quesCont">
          {
            FaqArr.map((ar)=>{
              return   <QuesCard ques={ar.ques} ans={ar.ans}/>
            })
          }
      
       
        </div>
        <h2 className='viewmore textblue'>View more</h2>
    </div>
  )
}

export default Faq