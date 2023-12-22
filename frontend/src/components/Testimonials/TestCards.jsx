import React from "react";

const TestCards = (props) => {
  return (
    <div className="testcardCont">
      <h4 className="testcardname">{props.name}</h4>
      <p className="date">{props.date}</p>
      <p className="rating">{props.rating}</p>
      <p className="review">
        {props.review}
      </p>
    </div>
  );
};

export default TestCards;
