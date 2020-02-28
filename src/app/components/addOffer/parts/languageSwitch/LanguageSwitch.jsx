import React, { useState } from 'react';
import plFlag from './pl.png';
import ukFlag from './uk.png';
import LanguageButton from './LanguageButton';

const LanguageSwitch = ({ changeLanguage }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="language-switch">
      <LanguageButton
        flag={ukFlag}
        setLanguage={() => {
          changeLanguage(false);
          setActive(0);
        }}
        active={active}
        id={0}
      />

      <LanguageButton
        flag={plFlag}
        setLanguage={() => {
          changeLanguage(true);
          setActive(1);
        }}
        active={active}
        id={1}
      />
    </div>
  );
};

export default LanguageSwitch;
