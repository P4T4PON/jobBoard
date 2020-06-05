import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CompanyProfile.css';
import { companyOffers } from '../../../../constans';
import OfferHeader from './offerHeader/OfferHeader'
import OfferDetailsContent from './offerDetailsContent/OfferDetailsContent'
import OfferDetailsBox from './offerDetailsContent/offerDetailsBox/OfferDetailsBox'
import OfferDescription from './offerDescription/OfferDescription'
import OfferApplyBox from './offerApplyBox/OfferApplyBox'

const CompanyProfile = ({
  toggleCoordinates,
  toggleLocation,
  location
}) => {
  const isDay = useSelector(state => state.isDay);
  const [testObj, setTestObj] = useState();
  const [userStory, setUserStory] = useState('');

  const toggleUserStory = event => {
    setUserStory(event.target.value);
  };

  useEffect(() => {
    const testMap = companyOffers.map(detail => detail.link === window.location.pathname && detail)
    setTestObj(testMap.filter((el) => {
      return el !== false;
    }))
  }, [testObj && testObj[0]])

  toggleCoordinates(testObj && testObj[0])

  return (
    <div className="offerDetails">
      <OfferHeader testObj={testObj} isDay={isDay} toggleLocation={toggleLocation} location={location} userStory={userStory} toggleUserStory={toggleUserStory} />

      <OfferDetailsContent text={'Tech stack'}>
        <OfferDetailsBox testObj={testObj} />
      </OfferDetailsContent>

      <OfferDetailsContent text={'Description'}>
        <OfferDescription testObj={testObj} />
      </OfferDetailsContent>

      <OfferDetailsContent text={'Apply for this job'}>
        <OfferApplyBox userStory={userStory} toggleUserStory={toggleUserStory} />
      </OfferDetailsContent>
    </div>
  );
};

export default CompanyProfile;

