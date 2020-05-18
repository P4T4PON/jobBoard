import React from 'react';
import SpecBox from './specBox/SpecBox';

const CompanySpec = ({
  testObj
}) => {
  return (
    <div className="offerSpecBox">
      <SpecBox
        companyLink={testObj && testObj[0].companyLink}
        iconClass={'fas fa-city'}
        linkText={testObj && testObj[0].name}
        typeText={'Company name'}
        iconColor={'i-red'}
      />
      <SpecBox
        iconClass={'fas fa-user-friends'}
        linkText={testObj && testObj[0].companySize}
        typeText={'Company size'}
        iconColor={'i-yellow'}
      />
      <SpecBox
        iconClass={'fas fa-file'}
        linkText={'B2B'}
        typeText={testObj && testObj[0].companyType}
        iconColor={'i-purple'}
      />
      <SpecBox
        iconClass={'fas fa-chart-line'}
        linkText={testObj && testObj[0].exp}
        typeText={'EXP. lvl'}
        iconColor={'i-green'}
      />
      <SpecBox
        iconClass={'far fa-clock'}
        linkText={testObj && testObj[0].age}
        typeText={'Added'}
        iconColor={'i-blue'}
      />
    </div>
  );
};

export default CompanySpec;
