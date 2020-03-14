import React from 'react';
import { Link } from 'react-router-dom';
import { utils } from '../../../../utils';

const OfferItem = ({
  img,
  title,
  min,
  max,
  companyName,
  companyAddress,
  age,
  link,
  itemBorder,
  toggleProfile,
  bgColor,
  name,
  companyLink,
  companySize,
  companyType,
  exp,
  offerDetail,
  companyTags,
  companyDescription,
  city,
  remote,
  toggleAllCities,
  oldTechnology,
  newTechnology,
  expLevel,
  isDay
}) => {
  const renderTags = () => {
    return companyTags.map((tag, index) => (
      <span className={isDay ? 'tag' : 'tagNightMode'} key={index}>
        {tag}
      </span>
    ));
  };

  const tileInFilters = () =>
    (expLevel === '' || expLevel === exp) &&
    (newTechnology === '' || oldTechnology === newTechnology) &&
    (city === companyAddress[1] ||
      city === '' ||
      (remote && city === 'Remote') ||
      (city === 'Trójmiasto' &&
        (companyAddress[1] === 'Gdańsk' ||
          companyAddress[1] === 'Gdynia' ||
          companyAddress[1] === 'Sopot')));

  const filtersEmpty = () =>
    [newTechnology, city, expLevel].every(element => element === '');

  const tileClasses = () => {
    let tileClass = '';
    if (filtersEmpty() || tileInFilters()) {
      tileClass = isDay ? 'offer-item' : 'offer-itemNightMode';
    } else {
      tileClass = 'display-none';
    }
    return tileClass;
  };

  return (
    <div className={tileClasses()}>
      <div className={`item-border  ${itemBorder}`} />
      <Link
        to={link}
        onMouseDown={() =>
          toggleProfile(
            link,
            title,
            min,
            max,
            img,
            companyName,
            companyAddress,
            bgColor,
            name,
            companyLink,
            companySize,
            companyType,
            exp,
            age,
            offerDetail,
            companyDescription,
            remote
          )
        }
        onClick={() => toggleAllCities(city, '/')}
      >
        <div className="item-content">
          <div className="company-logo">
            <img src={img} />
          </div>
          <div className="item-row">
            <div className="primary-line">
              <span
                className={
                  isDay ? 'offer-title' : 'offer-title offer-titleNightMode'
                }
              >
                {title}
              </span>
              <div className={remote ? 'remote-up' : 'display-none'}>
                Remote
              </div>
              <div className="flex-right">
                <span className="salary-row">
                  {min} - {max} PLN
                </span>
                <span
                  className={
                    isDay === false && age === 'New'
                      ? 'ageNightMode newNightMode'
                      : isDay === false
                      ? 'ageNightMode'
                      : isDay && age === 'New'
                      ? 'age new'
                      : 'age'
                  }
                >
                  {age}
                </span>
              </div>
            </div>
            <div className="secondary-line">
              <span className="company-info">
                <span className="company-name">
                  <i className="fas fa-city" /> {companyName}
                </span>
                <span className="company-address">
                  <i className="fas fa-map-marker-alt" />
                  {companyAddress}
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
