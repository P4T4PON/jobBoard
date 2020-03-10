import React, { Fragment } from 'react';
import SpecBox from './SpecBox';

const CompanySpec = ({
  companyLink,
  name,
  companySize,
  companyType,
  exp,
  age
}) => {
  return (
    <Fragment>
      <SpecBox
        iconClass={'fas fa-city'}
        companyLink={companyLink}
        linkText={name}
        typeText={'Company name'}
        iconColor={'i-red'}
      />
      <SpecBox
        iconClass={'fas fa-user-friends'}
        linkText={companySize}
        typeText={'Company size'}
        iconColor={'i-yellow'}
      />
      <SpecBox
        iconClass={'fas fa-file'}
        linkText={'B2B'}
        typeText={companyType}
        iconColor={'i-purple'}
      />
      <SpecBox
        iconClass={'fas fa-chart-line'}
        linkText={exp}
        typeText={'EXP. lvl'}
        iconColor={'i-green'}
      />
      <SpecBox
        iconClass={'far fa-clock'}
        linkText={age}
        typeText={'Added'}
        iconColor={'i-blue'}
      />
    </Fragment>
  );
};

export default CompanySpec;
