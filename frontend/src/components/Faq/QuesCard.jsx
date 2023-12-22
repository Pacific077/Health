import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
const QuesCard = (props) => {
  const [isopen, setisopne] = useState(false);
  const toggleisopen = () => {
    setisopne(!isopen);
  };
  return (
    <div className="QuesCardCont" onClick={toggleisopen}>
      <div className="quesarrowcont">
        <h3 className="ques">{props.ques}</h3>
        {isopen ? (
            <BiSolidUpArrow className="downarrow"  />
            ) : (
            <BiSolidDownArrow className="downarrow"  />
        )}
      </div>
      {isopen && (
        <p className="answer">
         {props.ans}
        </p>
      )}
    </div>
  );
};

export default QuesCard;
