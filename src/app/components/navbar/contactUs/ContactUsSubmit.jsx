import React from 'react';

const ContactUsSubmit = ({ everythingOk, checkAllInputs }) => {
  return (
    <div className="contactUs-submitBox">
      <div
        className={everythingOk ? 'display-none' : 'contactUs-submit'}
        onClick={checkAllInputs}
      >
          {/*TODO: tag i do poprawy*/}
        CONTACT US <i className="far fa-paper-plane"></i>
      </div>
    </div>
  );
};

export default ContactUsSubmit;
