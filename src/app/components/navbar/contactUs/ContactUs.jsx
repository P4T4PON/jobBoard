import React, { useState } from 'react';
import ContactInput from './ContactInput';
import ContactUsSubmit from './ContactUsSubmit';

const ContactUs = ({ newContactUs }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [everythingOk, setEverythingOk] = useState(false);
  const [activeName, setActiveName] = useState(false);
  const [activeCompanyName, setActiveCompanyName] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);

  const resetVariables = () => {
    setName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
  };
  const toggleName = event => {
    setName(event.target.value)
    if (name != '') {
      setActiveName(true)
    }
  }
  const toggleCompany = event => {
    setCompanyName(event.target.value)
    if (companyName != '') {
      setActiveCompanyName(true)
    }
  }
  const toggleEmail = event => {
    setEmail(event.target.value)
    if (email != '') {
      setActiveEmail(true)
    }
  }
  const togglePhone = event => {
    setPhone(event.target.value)
  }

  const checkAllInputs = () => {
    if (name !== '' && email !== '' && companyName !== '') {
      setEverythingOk(true);
      resetVariables();
    }
  };

  return (
    <div className={newContactUs ? 'contactUs' : 'display-none'}>
      <div className="contactUsBox">
        <div className="contactUsHeader">
          <h4>Share your Brand Story</h4>
          <p>
            Learn how we can help you to increase your brand recognition.
            <br></br>
            We will contact you shortly.
          </p>
        </div>
        {everythingOk ? (
          <div className="everythingOkBox">
            <div className="everythingOk">
              <i className="fas fa-check-circle" />
              <b>Thank you!</b>
              <p>for contacting with us.</p>
            </div>
          </div>
        ) : (
            <div className="contactUsContent">
              <ContactInput
                iconClass={'fas fa-user-circle'}
                toggleInput={toggleName}
                span={'Name *'}
                value={name}
                activeInput={activeName}
              />

              <ContactInput
                iconClass={'fas fa-city'}
                toggleInput={toggleCompany}
                span={'Company name *'}
                value={companyName}
                activeInput={activeCompanyName}
              />

              <ContactInput
                iconClass={'fas fa-envelope'}
                toggleInput={toggleEmail}
                span={'Email *'}
                value={email}
                activeInput={activeEmail}
              />

              <ContactInput
                iconClass={'fas fa-phone'}
                toggleInput={togglePhone}
                span={'Phone number'}
                value={phone}
              />
            </div>
          )}
        <ContactUsSubmit
          everythingOk={everythingOk}
          checkAllInputs={checkAllInputs}
        />
      </div>
    </div>
  );
};

export default ContactUs;
