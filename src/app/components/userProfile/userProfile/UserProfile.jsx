import React, { useState, Fragment } from 'react';
import './UserProfile.css';
import UserPanel from '../UserPanel';
import AnimatedInput from '../../additions/AnimatedInput';
import UserDetails from './UserDetails';
import YearsBox from './YearsBox';
import SubmitButton from '../../additions/SubmitButton';
import { yearsBox } from '../../../../constans';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const isDay = useSelector(state => state.isDay);
  const [active, setActive] = useState(0);
  const [panelActive] = useState(1);
  const [userName, setUserName] = useState('TestUser');
  const [userSurname, setUserSurname] = useState('Bobicki');
  const [userEmail] = useState('bobek123@wp.pl');
  const [userCity, setUserCity] = useState('');
  const [userStory, setUserStory] = useState('');
  const [userLinkedin, setUserLinkedin] = useState('');
  const [userGithub, setUserGithub] = useState('');

  const checkUserNameLength = event => {
    setUserName(event.target.value);
  };

  const checkUserSurnameLength = event => {
    setUserSurname(event.target.value);
  };

  const checkUserCityLength = event => {
    setUserCity(event.target.value);
  };

  const checkUserStoryLength = event => {
    setUserStory(event.target.value);
  };

  const checkUserLinkedinLength = event => {
    setUserLinkedin(event.target.value);
  };

  const checkUserGithubLength = event => {
    setUserGithub(event.target.value);
  };

  const renderYearsBoxes = () => {
    return yearsBox.map((box, index) => (
      <YearsBox
        key={index}
        boxId={index + 1}
        toggleActive={() => setActive(index + 1)}
        active={active}
        paragraph={box}
        isDay={isDay}
      />
    ));
  };

  return (
    <div className="userLogin-content vw-99">
      <UserPanel active={panelActive} />
      <div
        className={
          isDay
            ? 'userLogin-container'
            : 'userLogin-container userLogin-containerNightMode'
        }
      >
        <div
          className={
            isDay
              ? 'userLoginContainer-content'
              : 'userLoginContainer-content userLoginContainer-contentNightMode'
          }
        >
          <h1>
            My profile <p>Complete your profile & apply with just one click!</p>
          </h1>
          <form className="myProfile-content">
            <UserDetails
              className={
                isDay
                  ? 'userDetails-content'
                  : 'userDetails-content userDetails-contentNightMode'
              }
              title={'USER DETAILS'}
              content={
                <Fragment>
                  <div className="userDetailsImg-content">
                    <div className="userDetails-img">
                      <label htmlFor="file-upload">
                        <div className="userDetails-changePhoto">
                          <i className="fas fa-pen"></i>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="myProfile-input">
                    <AnimatedInput
                      divClass={'display-none'}
                      className={
                        isDay
                          ? 'cont upi'
                          : 'cont contNightMode upi upiNightMode'
                      }
                      type={'text'}
                      name={'userName'}
                      value={userName}
                      checkInputLength={checkUserNameLength}
                      span={'Name'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={
                        isDay
                          ? 'cont upi'
                          : 'cont contNightMode upi upiNightMode'
                      }
                      type={'text'}
                      name={'userSurname'}
                      value={userSurname}
                      checkInputLength={checkUserSurnameLength}
                      span={'Surname'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={
                        isDay
                          ? 'cont upi pointerEventsNone '
                          : 'cont contNightMode upi pointerEventsNone upiNightMode'
                      }
                      type={'text'}
                      name={'userEmail'}
                      value={userEmail}
                      checkInputLength={() => ''}
                      span={'Email'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={
                        isDay
                          ? 'cont upi'
                          : 'cont contNightMode upi upiNightMode'
                      }
                      type={'text'}
                      name={'userCity'}
                      value={userCity}
                      checkInputLength={checkUserCityLength}
                      span={'City'}
                    />

                    <div
                      className={
                        isDay
                          ? 'cont upi bigg-input'
                          : 'cont upi upiNightMode bigg-input bigg-inputNightMode'
                      }
                    >
                      <div className="big-input">
                        <textarea
                          type="text"
                          name="userSurname"
                          autoComplete="off"
                          spellCheck="false"
                          required
                          value={userStory}
                          onChange={checkUserStoryLength}
                        />
                        <label htmlFor="surname" className="label-name">
                          <span className="content-name">
                            Introduce Yourself
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
            />

            <div className="uploadCV">
              <UserDetails
                className={
                  isDay
                    ? 'uploadCV-content'
                    : 'uploadCV-content uploadCV-contentNightMode'
                }
                title={'UPLOAD CV'}
                content={
                  <Fragment>
                    <b>Paste your Linkedin page as CV</b>
                    <AnimatedInput
                      divClass={'margTop20'}
                      iconClass={'fab fa-linkedin media-icon color-blue fs40'}
                      className={
                        isDay
                          ? 'cont margTop20'
                          : 'cont contNightMode upiNightMode margTop20'
                      }
                      type={'text'}
                      name={'linkedin'}
                      value={userLinkedin}
                      checkInputLength={checkUserLinkedinLength}
                      span={'Linkedin'}
                    />
                    <p>
                      <b>Or add as attachment</b>
                      (We accept: PDF)
                    </p>
                    <div className="display-flex flex-center">
                      <div className="uploadCV-uploadFile">
                        <div className="uploadFile-box">
                          <i className="fas fa-file-upload"></i>
                        </div>
                        <div className="uploadFile-text">
                          <p>
                            Drag and Drop or <b>Browse</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                }
              />

              <UserDetails
                className={
                  isDay
                    ? 'yearsOfExperiance-content'
                    : 'yearsOfExperiance-content yearsOfExperiance-contentNightMode'
                }
                title={'YEARS OF EXPERIANCE'}
                paragraph={'How many years of experience do you have?'}
                content={
                  <Fragment>
                    <div className="yearsBoxes-content">
                      {renderYearsBoxes()}
                    </div>
                  </Fragment>
                }
              />

              <UserDetails
                className={
                  isDay
                    ? 'socialLinks-content'
                    : 'socialLinks-content socialLinks-contentNightMode'
                }
                title={'SOCIAL LINKS'}
                content={
                  <Fragment>
                    <AnimatedInput
                      iconClass={'fab fa-github media-icon color-black fs40'}
                      className={
                        isDay ? 'cont' : 'cont upiNightMode contNightMode'
                      }
                      type={'text'}
                      name={'Github'}
                      value={userGithub}
                      checkInputLength={checkUserGithubLength}
                      span={'Github'}
                    />
                  </Fragment>
                }
              />
            </div>
          </form>
          <SubmitButton value={'Update profile'} className={'pink-button'} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
