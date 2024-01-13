import React from 'react';

const SymptCard = (props) => {

  const handleClick = (event) => {
    const reply = event.target.value; // Get the value of the selected radio button
    const idx = props.idx; // Use props.id as the index

    // Call the handleFormChange function passed as a prop
    props.handleFormChange(idx, reply);
    
  }

  return (
    <div className="symptCard">
      <p>{props.question}</p>
      <div>
        <input
          type="radio"
          id={`${props.idx}_Yes`}
          name={props.idx}
          value="1"
          onClick={handleClick}
        />
        <label htmlFor={`${props.idx}_Yes`}>Yes</label>
        <input
          type="radio"
          id={`${props.idx}_No`}
          name={props.idx}
          value="0"
          onClick={handleClick}
        />
        <label htmlFor={`${props.idx}_No`}>No</label>
      </div>
    </div>
  );
}

export default SymptCard;
