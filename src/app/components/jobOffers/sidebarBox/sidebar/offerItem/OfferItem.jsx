import React from 'react';
import ItemContent from './itemContent/ItemContent'

const OfferItem = ({ city, toggleAllCities, newTechnology, expLevel, isDay, offer, value }) => {
  const { exp, min, max, technology, companyCity, remote, itemBorder } = offer

  const tileInFilters = () =>
    (expLevel['all'] === true || expLevel[exp] === true) &&
    ((value[0] * 1000) <= min && (value[1] * 1000) >= max) &&
    (newTechnology === '' || technology === newTechnology) &&
    (city === companyCity ||
      city === '' ||
      (remote && city === 'Remote') ||
      (city === 'Trójmiasto' &&
        (companyCity === 'Gdańsk' ||
          companyCity === 'Gdynia' ||
          companyCity === 'Sopot')))


  const filtersEmpty = () =>
    [newTechnology, city, expLevel, value[0], value[1]].every(element => element === '');

  const tileClasses = () => {
    let tileClass = '';
    if (filtersEmpty() || tileInFilters()) {
      tileClass = isDay ? 'offerItem' : 'offerItemNightMode';
    } else {
      tileClass = 'display-none';
    }
    return tileClass;
  };

  return (
    <div className={tileClasses()}>
      <div className={`itemBorder  ${itemBorder}`} />
      <ItemContent offer={offer} isDay={isDay} toggleAllCities={toggleAllCities} city={city} />
    </div>
  );
};
export default OfferItem;
