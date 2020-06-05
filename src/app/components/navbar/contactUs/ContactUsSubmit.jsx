import React from 'react';

const ContactUsSubmit = ({ everythingOk, checkAllInputs }) => {
  return (
    <div className="contactUsSubmitBox">
      <div
        className={everythingOk ? 'display-none' : 'contactUsSubmit'}
        onClick={checkAllInputs}
      >
        CONTACT US <i className="far fa-paper-plane" />
      </div>
    </div>
  );
};

export default ContactUsSubmit;
