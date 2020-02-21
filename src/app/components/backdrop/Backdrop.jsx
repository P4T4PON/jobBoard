import React from 'react';
import './Backdrop.css';

//wyjaśnij mi proszę, dlaczego tutaj zwracasz po prostu pustego diva? I zastanów się jakbyś mógł to zrobić inaczej

const Backdrop = ({ toggleMenu }) => {
  return <div className="backdrop" onClick={toggleMenu} />;
};

export default Backdrop;
