import React from 'react';
import { Link } from 'react-router-dom';

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
  expLevel
}) => {
  const renderTags = () => {
    return companyTags.map((tag, index) => (
      <span className="tag" key={index}>
        {tag}
      </span>
    ));
  };

  const test = () => {
    console.log(oldTechnology, newTechnology);
  };

  return (
    <div
      {...test()}
      className={
        newTechnology === '' && city === '' && expLevel === ''
          ? 'offer-item'
          : newTechnology === '' &&
            city === companyAddress[1] &&
            (expLevel === '' || expLevel === exp)
          ? 'offer-item'
          : city === '' &&
            newTechnology === oldTechnology &&
            (expLevel === '' || expLevel === exp)
          ? 'offer-item'
          : city === companyAddress[1] &&
            newTechnology === oldTechnology &&
            (expLevel === '' || expLevel === exp)
          ? 'offer-item'
          : (city === 'Trójmiasto' &&
              companyAddress[1] === 'Gdańsk' &&
              (oldTechnology === newTechnology || newTechnology === '') &&
              (expLevel === '' || expLevel === exp)) ||
            (city === 'Trójmiasto' &&
              companyAddress[1] === 'Gdynia' &&
              (oldTechnology === newTechnology || newTechnology === '') &&
              (expLevel === '' || expLevel === exp)) ||
            (city === 'Trójmiasto' &&
              companyAddress[1] === 'Sopot' &&
              (oldTechnology === newTechnology || newTechnology === '') &&
              (expLevel === '' || expLevel === exp))
          ? 'offer-item'
          : remote &&
            city === 'Remote' &&
            newTechnology === '' &&
            (expLevel === '' || expLevel === exp)
          ? 'offer-item'
          : remote &&
            city === 'Remote' &&
            oldTechnology === newTechnology &&
            (expLevel === '' || expLevel === exp)
          ? 'offer-item'
          : (expLevel === '' || expLevel === exp) &&
            (oldTechnology === newTechnology || newTechnology === '') &&
            (city === '' || city === companyAddress[1])
          ? 'offer-item'
          : city === companyAddress[1] &&
            newTechnology !== oldTechnology &&
            (expLevel === '' || expLevel === exp)
          ? 'display-none'
          : city !== companyAddress[1] &&
            newTechnology === oldTechnology &&
            (expLevel === '' || expLevel === exp)
          ? 'display-none'
          : city === companyAddress[1] &&
            newTechnology === oldTechnology &&
            (expLevel !== '' || expLevel !== exp)
          ? 'display-none'
          : 'display-none'
      }
    >
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
              <span className="offer-title">{title}</span>
              <div className={remote ? 'remote-up' : 'display-none'}>
                Remote
              </div>
              <div className="flex-right">
                <span className="salary-row">
                  {min} - {max} PLN
                </span>
                <span className={age === 'New' ? 'age new' : 'age'}>{age}</span>
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
