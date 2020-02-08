import React from 'react';
import TermsAndPoliciesBox from './TermsAndPoliciesBox';
import './TermsAndPolicies.css';

const TermsAndPolicies = () => {
  return (
    <div className="backGround">
      <div className="wide">
        <TermsAndPoliciesBox
          h1={'Terms'}
          first_link={
            'https://bucket.justjoin.it/Regulamin+Just+Join+IT+z+dn.+23.05.2019.pdf'
          }
          second_link={
            'https://bucket.justjoin.it/Regulamin+Just+Join+IT+do+dn.+23.05.2019+.pdf'
          }
          h3={
            'Valid for deals finalized before 23.05.2019 / Dla umów sprzedaży zawartych do 23.05.2019:'
          }
          text={'Terms'}
        />
        <TermsAndPoliciesBox
          h1={'Privacy Policies'}
          first_link={
            'https://bucket.justjoin.it/Polityka+Prywatnos%CC%81ci+Just+Join+IT+z+dn.+23.05.2019.pdf'
          }
          second_link={
            'https://bucket.justjoin.it/Polityka+Prywatnos%CC%81ci+Just+Join+IT+do+dn.+23.05.2019.pdf'
          }
          h3={'Valid up to 23.05.2019 / Ważna do 23.05.2019:'}
          text={'Policy'}
        />
      </div>
    </div>
  );
};

export default TermsAndPolicies;
