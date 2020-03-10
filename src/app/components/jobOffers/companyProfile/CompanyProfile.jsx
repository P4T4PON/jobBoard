import React, { useState } from 'react';
import './CompanyProfile.css';
import CompanySpec from './companyAdditions/specBox/CompanySpec';
import OfferDetails from './companyAdditions/offerDetails/OfferDetails';
import AnimatedInput from '../../additions/AnimatedInput';
import Checkbox from '../../additions/Checkbox';
import AdditionalInfo from './companyAdditions/offerDetails/AdditionalInfo';

const CompanyProfile = ({
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

  const toggleOverflow = () => {
    document.querySelector('.sidebar-offers').scrollTop = 1000;
  };

  const toggleOffer = () => {
    console.log(offerDetail);
  };

  const renderDetails = () => {
    return offerDetail.map((detail, index) => (
      <OfferDetails key={index} level={detail[0]} description={detail[1]} />
    ));
  };

  return (
    <div className="sidebar-offers">
      {toggleOffer()}
      <div className="offer-details">
        <div className="offer-header">
          <div className={`offer-backgorund ${bgColor}`}>
            <div className="offer-content">
              <div className="offer-imgBox">
                <div className="offer-img">
                  <img src={img} />
                </div>
              </div>
              <div className="offer-info">
                <div className="offer-salary">
                  {min} - {max} net/month
                </div>
                <div className="offer-remoteUp">
                  <h1>{companyName}</h1>
                  <div className={remote ? 'offer-remote' : 'display-none'}>
                    Remote
                  </div>
                </div>
                <h2>{companyAddress}</h2>
              </div>

              <div className="offer-apply" onClick={toggleOverflow}>
                <i className="fas fa-envelope" />
                <h2>Apply</h2>
              </div>
            </div>
            <div className="offer-specBox">
              <CompanySpec
                companyName={companyName}
                name={name}
                companyLink={companyLink}
                companySize={companySize}
                companyType={companyType}
                exp={exp}
                age={age}
                offerDetail={offerDetail}
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
              <div>{companyDescription}</div>
              <AdditionalInfo companyAddress={companyAddress} name={name} />
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
              <div className="applyToState">
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
  );
};

export default CompanyProfile;
