import React, { useState } from 'react';
import './AddOffer.css';
import LanguageSwitch from './parts/languageSwitch/LanguageSwitch';
import PriceCards from './parts/priceCards/PriceCards';
import SliderBox from './parts/slider/SliderBox';
import Partners from './parts/partners/Partners';
import MoreAboutUs from './parts/moreAboutUs/MoreAboutUs';
import IntroHeader from './parts/introHeader/IntroHeader';

const AddOffer = () => {
  const [pl, setPl] = useState(true);

  const onLanguageChange = newLang => {
    setPl(newLang);
  };

  return (
    <div className="add-offer">
      <IntroHeader pl={pl} />

      <div className="pricing-table">
        <LanguageSwitch pl={pl} changeLanguage={onLanguageChange} />

        <h1>
          {pl
            ? 'Poznaj ogłoszenia na Just Join IT'
            : 'Get to know job ads on Just Join IT'}
        </h1>

        <PriceCards pl={pl} />
      </div>

      <SliderBox />

      <Partners pl={pl} />

      <MoreAboutUs pl={pl} />
    </div>
  );
};

export default AddOffer;
