import React from 'react';

const LanguageButton = ({ active, flag, setLanguage, id }) => {
  return (
    <div className={active === id ? 'flag' : 'flag opacity'}>
      <img src={flag} onClick={setLanguage} alt="" />
    </div>
  );
};

export default LanguageButton;
