import React, { useState } from 'react';
import ContactInput from './ContactInput';
import ContactUsSubmit from './ContactUsSubmit';
import ThankYou from './ThankYou';

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

  const toggleInput = event => {
    const etv = event.target.value;
    const etpid = event.target.parentElement.id;
    if (etpid === 'name') setName(etv);
    else if (etpid === 'companyName') setCompanyName(etv);
    else if (etpid === 'email') setEmail(etv);
    else if (etpid === 'phone') setPhone(etv);
    if (etv === '') {
      if (etpid === 'name') setActiveName(true);
      else if (etpid === 'companyName') setActiveCompanyName(true);
      else if (etpid === 'email') setActiveEmail(true);
    }
  };

  const checkAllInputs = () => {
    if (name !== '' && email !== '' && companyName !== '') {
      setEverythingOk(true);
      resetVariables();
    }
  };

  return (
    <div className={newContactUs ? 'contactUs' : 'display-none'}>
      <div className="contactUs-box">
        <div className="contactUs-header">
          <h4>Share your Brand Story</h4>
          <p>
            Learn how we can help you to increase your brand recognition.
            <br></br>
            We will contact you shortly.
          </p>
        </div>
        {everythingOk ? (
          <ThankYou />
        ) : (
          <div className="contactUs-content">
            <ContactInput
              iconClass={'fas fa-user-circle'}
              id={'name'}
              toggleInput={toggleInput}
              span={'Name *'}
              value={name}
              activeInput={activeName}
            />

            <ContactInput
              iconClass={'fas fa-city'}
              id={'companyName'}
              toggleInput={toggleInput}
              span={'Company name *'}
              value={companyName}
              activeInput={activeCompanyName}
            />

            <ContactInput
              iconClass={'fas fa-envelope'}
              id={'email'}
              toggleInput={toggleInput}
              span={'Email *'}
              value={email}
              activeInput={activeEmail}
            />

            <ContactInput
              iconClass={'fas fa-phone'}
              id={'phone'}
              toggleInput={toggleInput}
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
