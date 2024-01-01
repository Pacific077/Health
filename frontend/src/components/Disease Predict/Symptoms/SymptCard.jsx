import React from 'react'

const SymptCard = () => {
  return (
    <div className="symptCard">
              <p>Are u having Itchings ?</p>
              <div>
                <input type="radio" id="css" name="itching" value="CSS" />
                <label htmlFor="Yes">Yes</label>
                <input
                  type="radio"
                  id="javascript"
                  name="itching"
                  value="JavaScript"
                />
                <label htmlFor="No">No</label>
              </div>
            </div>
  )
}

export default SymptCard