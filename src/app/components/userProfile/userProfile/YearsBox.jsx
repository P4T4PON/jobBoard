import React from 'react';
//TODO: destrukturyzacja propsow, czym jest fooOnClick?
const YearsBox = props => {
  return (
    <div className="years-box" onClick={props.fooOnClick}>
      <p>{props.paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
