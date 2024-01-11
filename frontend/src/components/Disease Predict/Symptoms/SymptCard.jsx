import React from 'react'

const SymptCard = ({ques,name }) => {
  return (
    <div className="symptCard">
              <p>{ques}</p>
              <div>
                <input type="radio"  name={name} value="CSS" />
                <label htmlFor="Yes">Yes</label>
                <input
                  type="radio"
                  name={name}
                  value="JavaScript"
                />
                <label htmlFor="No">No</label>
              </div>
            </div>
  )
}

export default SymptCard