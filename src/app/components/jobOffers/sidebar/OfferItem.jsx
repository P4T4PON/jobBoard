import React from 'react';
import { Link } from 'react-router-dom';

const OfferItem = ({
  toggleProfile,
  city,
  toggleAllCities,
  newTechnology,
  expLevel,
  isDay,
  offer,
  value
}) => {
  const renderTags = () => {
    return offer.companyTags.map((tag, index) => (
      <span className={isDay ? 'tag' : 'tagNightMode'} key={index}>
        {tag}
      </span>
    ));
  };

  const tileInFilters = () =>
    (expLevel === '' || expLevel === offer.exp) &&
    ((value[0] * 1000) <= offer.min && (value[1] * 1000) >= offer.max) &&
    (newTechnology === '' || offer.technology === newTechnology) &&
    (city === offer.companyCity ||
      city === '' ||
      (offer.remote && city === 'Remote') ||
      (city === 'Trójmiasto' &&
        (offer.companyCity === 'Gdańsk' ||
          offer.companyCity === 'Gdynia' ||
          offer.companyCity === 'Sopot')))


  const filtersEmpty = () =>
    [newTechnology, city, expLevel, value[0], value[1]].every(element => element === '');


  const tileClasses = () => {
    let tileClass = '';
    if (filtersEmpty() || tileInFilters()) {
      tileClass = isDay ? 'offer-item' : 'offer-itemNightMode';
    } else {
      tileClass = 'display-none';
    }
    return tileClass;
  };

  const test = () => { }

  return (
    <div className={tileClasses()}>
      <div className={`item-border  ${offer.itemBorder}`} />
      <Link
        to={offer.link}

        onMouseDown={() =>
          toggleProfile(
            offer
          )
        }
        onClick={() => toggleAllCities(city, '/')}
      >
        <div className="item-content">
          <div className="company-logo">
            <img src={offer.img} />
          </div>
          <div className="item-row">
            <div className="primary-line">
              <span
                className={
                  isDay ? 'offer-title' : 'offer-title offer-titleNightMode'
                }
              >
                {offer.title}
              </span>
              <div className={offer.remote ? 'remote-up' : 'display-none'}>
                Remote
              </div>
              <div className="flex-right">
                <span className="salary-row">
                  {offer.min} - {offer.max} PLN
                </span>
                <span
                  className={
                    isDay === false && offer.age === 'New'
                      ? 'ageNightMode newNightMode'
                      : isDay === false
                        ? 'ageNightMode'
                        : isDay && offer.age === 'New'
                          ? 'age new'
                          : 'age'
                  }
                >
                  {offer.age}
                </span>
              </div>
            </div>
            <div className="secondary-line">
              <span className="company-info">
                <span className="company-name">
                  <i className="fas fa-city" /> {offer.companyName}
                </span>
                <span className="company-address">
                  <i className="fas fa-map-marker-alt" />
                  {offer.companyAddress} {offer.companyCity}
                </span>
              </span>
              <div className="tags">{renderTags()}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OfferItem;
