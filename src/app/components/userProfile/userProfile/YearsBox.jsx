import React from 'react';

const YearsBox = props => {
  return (
    <div className="years-box" onClick={props.fooOnClick}>
      <p>{props.paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
