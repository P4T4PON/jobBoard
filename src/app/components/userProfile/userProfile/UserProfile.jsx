import React, { useState, Fragment } from 'react';
import './UserProfile.css';
import UserPanel from '../UserPanel';
import AnimatedInput from '../../additions/AnimatedInput';
import UserDetails from './UserDetails';
import YearsBox from './YearsBox';
import SubmitButton from '../../additions/SubmitButton';
//TODO: nie uzywasz zadeklarowanych funkcji to zmiany stanu w wielu miejscach
const UserProfile = () => {
  const [panelActive] = useState(1);
  const [userName, setUserName] = useState('TestUser');
  const [setName] = useState('TestUser');
  const [userSurname, setUserSurname] = useState('Bobicki');
  const [userEmail] = useState('bobek123@wp.pl');
  const [userCity, setUserCity] = useState('');
  const [userStory, setUserStory] = useState('');
  const [userLinkedin, setUserLinkedin] = useState('');
  const [userGithub, setUserGithub] = useState('');
<<<<<<< HEAD

  const toggleActive = event => {
=======
  // nazwa funckji let, w pętli lapiesz js'em elementy z domu i po nich iterujesz, w reactie sie tak nie robi i jest to niesamowicie niewydajne pod katem performance'u
  let toggleActive = event => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
    for (
      let i = 0;
      i < document.querySelector('.yearsBoxes-content').children.length;
      i++
    ) {
      document.querySelector('.yearsBoxes-content').children[i].className =
        'years-box';
    }
    if (event.target.className === 'years-box') {
      event.target.className = 'years-box border-pink color-pink';
    } else {
      event.target.parentElement.className = 'years-box border-pink color-pink';
    }
  };
<<<<<<< HEAD

  const checkUserNameLength = event => {
=======
  //wszystkie ponizsze funkcje sa letami
  let checkUserNameLength = event => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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

  const setStateOfAll = () => {
    setName(userName);
    setUserStory(userStory);
    setUserSurname(userSurname);
    setUserCity(userCity);
    setUserLinkedin(userLinkedin);
    setUserGithub(userGithub);
  };
  // ??
  const doNothing = () => {};

  return (
    <div className="userLogin-content vw-99">
      <UserPanel active={panelActive} />
      <div className="userLogin-container">
        <div className="userLoginContainer-content">
          <h1>
            My profile <p>Complete your profile & apply with just one click!</p>
          </h1>
          <form className="myProfile-content">
            {/*wrzucasz */}
            <UserDetails
              className={'userDetails-content'}
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
                      className={'cont upi'}
                      type={'text'}
                      name={'userName'}
                      value={userName}
                      checkInputLength={checkUserNameLength}
                      span={'Name'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={'cont upi'}
                      type={'text'}
                      name={'userSurname'}
                      value={userSurname}
                      checkInputLength={checkUserSurnameLength}
                      span={'Surname'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={'cont upi pointerEventsNone'}
                      type={'text'}
                      name={'userEmail'}
                      value={userEmail}
                      checkInputLength={doNothing}
                      span={'Email'}
                    />

                    <AnimatedInput
                      divClass={'display-none'}
                      className={'cont upi'}
                      type={'text'}
                      name={'userCity'}
                      value={userCity}
                      checkInputLength={checkUserCityLength}
                      span={'City'}
                    />

                    <div className="cont upi bigg-input">
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
                className={'uploadCV-content'}
                title={'UPLOAD CV'}
                content={
                  <Fragment>
                    <b>Paste your Linkedin page as CV</b>
                    <AnimatedInput
                      divClass={'margTop20'}
                      inputClass={'fab fa-linkedin media-icon color-blue fs40'}
                      className={'cont margTop20'}
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
                className={'yearsOfExperiance-content'}
                title={'YEARS OF EXPERIANCE'}
                paragraph={'How many years of experience do you have?'}
                content={
                  <Fragment>
                    <div className="yearsBoxes-content">
                      <YearsBox toggleActive={toggleActive} paragraph={'0-1'} />

                      <YearsBox toggleActive={toggleActive} paragraph={'1-2'} />

                      <YearsBox toggleActive={toggleActive} paragraph={'2-4'} />

                      <YearsBox toggleActive={toggleActive} paragraph={'4-6'} />

                      <YearsBox
                        toggleActive={toggleActive}
                        paragraph={'6-10'}
                      />

                      <YearsBox toggleActive={toggleActive} paragraph={'10+'} />
                    </div>
                  </Fragment>
                }
              />

              <UserDetails
                className={'socialLinks-content'}
                title={'SOCIAL LINKS'}
                content={
                  <Fragment>
                    <AnimatedInput
                      inputClass={'fab fa-github media-icon color-black fs40'}
                      className={'cont'}
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
          <SubmitButton
            value={'Update profile'}
            className={'pink-button'}
            submit={setStateOfAll}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
