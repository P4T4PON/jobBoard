import React, { useState } from 'react';
import './AddOffer.css';
import plFlag from '../additions/img/pl.png';
import ukFlag from '../additions/img/uk.png';
import IntoHeader from './header/IntroHeader';
import PricingTable from './pricingTable/PricingTable'
import RecomendationCard from './recomendationCard/RecomendationCard'
import Partners from './partners/Partners'
import MoreAboutUs from './moreAboutUs/MoreAboutUs'

const AddOffer = () => {
  const [pl, setPl] = useState(true);

  const togglePl = (newPl) => {
    setPl(newPl)
  }

  return (
    <div className="addOffer">
      <IntoHeader pl={pl} />
      <PricingTable pl={pl} ukFlag={ukFlag} plFlag={plFlag} togglePl={togglePl} />
      <RecomendationCard />
      <Partners pl={pl} />
      <MoreAboutUs pl={pl} />
    </div>
  );
};

export default AddOffer;
