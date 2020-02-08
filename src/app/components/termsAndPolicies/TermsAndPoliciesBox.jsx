import React from 'react';

const TermsAndPoliciesBox = ({ h1, h3, first_link, second_link, text }) => {
  return (
    <div className="content">
      <h1>{h1}</h1>
      <h3>
        Latest / Aktualny:
        <a href={first_link} target="blanc">
          {text}
          <i className="far fa-file-pdf"></i>
        </a>
      </h3>
      <h3>
        {h3}
        <a href={second_link} target="blanc">
          {text}
          <i className="far fa-file-pdf"></i>
        </a>
      </h3>
    </div>
  );
};

export default TermsAndPoliciesBox;
