import React, { useState, useEffect } from 'react';
import './CompanyProfile.css';
import CompanySpec from './companyAdditions/specBox/CompanySpec';
import OfferDetails from './companyAdditions/offerDetails/OfferDetails';
import AnimatedInput from '../../additions/AnimatedInput';
import Checkbox from '../../additions/Checkbox';
import AdditionalInfo from './companyAdditions/offerDetails/AdditionalInfo';
import { companyOffers } from '../../../../constans';
import Map from '../../map/MapBox';


const CompanyProfile = ({
  profile
}) => {
  const [compName, setCompName] = useState('');
  const [email, setEmail] = useState('');
  const [userStory, setUserStory] = useState('');
  const [showMore, setShowMore] = useState(false);

  const toggleCompName = event => {
    setCompName(event.target.value);
  };

  const toggleEmail = event => {
    setEmail(event.target.value);
  };

  const toggleUserStory = event => {
    setUserStory(event.target.value);
  };

  const renderDetails = () => {
    return profile.companyOfferDetails.map((detail, index) => (
      <OfferDetails key={index} level={detail[0]} description={detail[1]} />
    ));
  };

  return (
    <div className='sidebar-box'>
      <div className="sidebar-offers">
        <div className="offer-details">
          <div className="offer-header">
            <div className={`offer-backgorund ${profile.bgColor}`}>
              <div className="offer-content">
                <div className="offer-imgBox">
                  <div className="offer-img">
                    <img src={profile.img} />
                  </div>
                </div>
                <div className="offer-info">
                  <div className="offer-salary">
                    {profile.min} - {profile.max} net/month
                </div>
                  <div className="offer-remoteUp">
                    <h1>{profile.companyName}</h1>
                    <div className={profile.remote ? 'offer-remote' : 'display-none'}>
                      Remote
                  </div>
                  </div>
                  <h2>{profile.companyAddress}</h2>
                </div>

                <div className="offer-apply">
                  <i className="fas fa-envelope" />
                  <a href='#ua'><h2>Apply</h2> </a>
                </div>

              </div>
              <div className="offer-specBox">
                <CompanySpec
                  companyName={profile.companyName}
                  name={profile.name}
                  companyLink={profile.companyLink}
                  companySize={profile.companySize}
                  companyType={profile.companyType}
                  exp={profile.exp}
                  age={profile.age}
                  offerDetail={profile.offerDetail}
                />
              </div>
            </div>
          </div>
          <div className="offer-details-content">
            <div className="offer-details-header">Tech stack</div>
            <div className="offer-details-box">
              <div className="offer-details-box-content">{renderDetails()}</div>
            </div>
          </div>
          <div className="offer-details-content">
            <div className="offer-details-header">description</div>
            <div className="offer-description-box">
              <div className="offer-description-content">
                <div>{profile.companyDescription}</div>
                <AdditionalInfo companyAddress={profile.companyAddress} name={profile.name} />
              </div>
            </div>
          </div>

          <div className="offer-details-content">
            <div className="offer-details-header">Apply for this job</div>
            <div className="offer-apply-box">
              <div className="offer-apply-box-content">
                <AnimatedInput
                  className={'cont inpont'}
                  type={'text'}
                  name={'name'}
                  value={compName}
                  checkInputLength={toggleCompName}
                  checkInputBlurLength={toggleCompName}
                  span={'First & last name'}
                  spanClass={'mg-btm6'}
                  insideIcon={'far fa-user'}
                />

                <AnimatedInput
                  className={'cont inpont'}
                  type={'text'}
                  name={'name'}
                  value={email}
                  checkInputLength={toggleEmail}
                  checkInputBlurLength={toggleEmail}
                  span={'Email'}
                  spanClass={'mg-btm6'}
                  insideIcon={'fas fa-envelope'}
                />
                <div className="wd-100">
                  <div className="cont bigg-input inpont width-auto">
                    <div className="companyProfileTextArea ">
                      <textarea
                        type="text"
                        name="userSurname"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userStory}
                        onChange={toggleUserStory}
                      />
                      <label htmlFor="surname" className="label-name">
                        <span className="content-name mg-left20">
                          Introduce Yourself
                      </span>
                        <i className="fas fa-pen tai" />
                      </label>
                    </div>
                  </div>

                  <div className="upload-cv">
                    <div className="upload-cvContent">
                      <div className="getFile-box">
                        <i className="fas fa-file-upload mgl-40" />
                      UploadCV(.pdf)
                    </div>
                    </div>
                  </div>
                </div>

                <Checkbox
                  paragraph={'Processing data in future recruitment'}
                  className="newBox"
                  inputClass="newBox-input"
                />
                <h3 className="showMore" onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'less' : 'more'}
                </h3>
                <div className={showMore ? 'apply-agree' : 'display-none'}>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych dla celów
                  przyszłych rekrutacji.
              </div>
              </div>
              <div className="additional-info">
                <h3>
                  This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="blanc">
                    Privacy Policy
                </a>
                and
                <a href="https://policies.google.com/terms" target="blanc">
                    Terms of Service
                </a>
                apply.
              </h3>
                <div className="applyToState" id='ua'>
                  <div className="applyBtn">
                    apply{' '}
                    <div className="apply-dart">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-map'><Map profile={profile} /></div>
    </div>
  );
};

export default CompanyProfile;
