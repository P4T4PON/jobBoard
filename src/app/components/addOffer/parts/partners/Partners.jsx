import React from 'react';
import PartnersImg from './partners.svg';
import CardSection from './CardSection';

const Partners = ({ pl }) => {
  return (
    <div className="partners">
      <div className="main-grid">
        <div className="partners-header">
          <div className="partners-text">
            <h1>
              {pl
                ? 'Stali Partnerzy mają \n jeszcze lepiej!'
                : 'Regular Partners have even more benefits!'}
            </h1>
            {pl
              ? 'Proponujemy atrakcyjne warunki za pakiety ogłoszeń'
              : ' We offer attractive conditions for job ad packages'}
            <p>{pl ? 'masz pytania?' : 'Do you have any questions?'}</p>
          </div>
          <div className="partners-img">
            <img src={PartnersImg} alt="" />
          </div>
        </div>
      </div>
      <div className="partners-row">
        <CardSection pl={pl} type={'c1'} text={'+48 737 175 805'} />
        <CardSection pl={pl} type={'c2'} text={'sales@justjoin.it'} />
      </div>
    </div>
  );
};

export default Partners;
