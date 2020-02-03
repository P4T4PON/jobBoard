import React, { useState } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import UserPanel from './userPanel/UserPanel';

const UserProfile = () => {
  const [userName, setUserName] = useState('TestUser');
  const [name, setName] = useState('TestUser');
  const [userSurname, setUserSurname] = useState('Bobicki');
  const [userEmail, setUserEmail] = useState('bobek123@wp.pl');
  const [userCity, setUserCity] = useState('');
  const [userStory, setUserStory] = useState('');
  const [userLinkedin, setUserLinkedin] = useState('');
  const [userGithub, setUserGithub] = useState('');
  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);

  let toggleActive = event => {
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

  let toggleJobStatusGreen = () => {
    setJobStatus('green');
    setShowStatus(!showStatus);
  };

  let toggleJobStatusBlue = () => {
    setJobStatus('blue');
    setShowStatus(!showStatus);
  };

  let toggleJobStatusRed = () => {
    setJobStatus('red');
    setShowStatus(!showStatus);
  };

  let checkUserNameLength = event => {
    setUserName(event.target.value);
  };

  let checkUserSurnameLength = event => {
    setUserSurname(event.target.value);
  };

  let checkUserCityLength = event => {
    setUserCity(event.target.value);
  };

  let checkUserStoryLength = event => {
    setUserStory(event.target.value);
  };

  let checkUserLinkedinLength = event => {
    setUserLinkedin(event.target.value);
  };

  let checkUserGithubLength = event => {
    setUserGithub(event.target.value);
  };

  let setStateOfAll = () => {
    setName(userName);
    setUserStory(userStory);
    setUserSurname(userSurname);
    setUserCity(userCity);
    setUserLinkedin(userLinkedin);
    setUserGithub(userGithub);
  };

  let doNothing = () => {};

  return (
    <div className="userLogin-content">
      <UserPanel />
      <div className="userLogin-container">
        <div className="userLoginContainer-content">
          <h1>
            My profile <p>Complete your profile & apply with just one click!</p>
          </h1>
          <form className="myProfile-content">
            <div className="userDetails">
              <div className="userDetails-content">
                <h3>USER DETAILS</h3>
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
                  <div className="cont upi">
                    <div>
                      <input
                        type="text"
                        name="userName"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userName}
                        onChange={checkUserNameLength}
                      />
                      <label htmlFor="name" className="label-name">
                        <span className="content-name">Name</span>
                      </label>
                    </div>
                  </div>

                  <div className="cont upi">
                    <div>
                      <input
                        type="text"
                        name="userSurname"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userSurname}
                        onChange={checkUserSurnameLength}
                      />
                      <label htmlFor="surname" className="label-name">
                        <span className="content-name">Surname</span>
                      </label>
                    </div>
                  </div>

                  <div className="cont upi pointerEventsNone">
                    <div>
                      <input
                        type="text"
                        name="userEmail"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userEmail}
                        onChange={doNothing}
                      />
                      <label htmlFor="email" className="label-name">
                        <span className="content-name">Email</span>
                      </label>
                    </div>
                  </div>

                  <div className="cont upi">
                    <div>
                      <input
                        type="text"
                        name="userCity"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userCity}
                        onChange={checkUserCityLength}
                      />
                      <label htmlFor="city" className="label-name">
                        <span className="content-name">City</span>
                      </label>
                    </div>
                  </div>

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
                        <span className="content-name">Introduce Yourself</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uploadCV">
              <div className="uploadCV-content">
                <h3>UPLOAD CV</h3>
                <p>Paste your Linkedin page as CV</p>
                <div className="cont upi margin-10 marginBtm-50 width-100">
                  <div className="display-flex marginR-10">
                    <i className="fab fa-linkedin media-icon color-blue"></i>
                    <input
                      type="text"
                      name="Linkedin"
                      autoComplete="off"
                      spellCheck="false"
                      required
                      value={userLinkedin}
                      onChange={checkUserLinkedinLength}
                    />
                    <label htmlFor="city" className="label-name">
                      <span className="content-name">Linkedin</span>
                    </label>
                  </div>
                </div>
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
                      {' '}
                      <p>
                        Drag and Drop or <b>Browse</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yearsOfExperiance">
                <div className="yearsOfExperiance-content">
                  <h3>YEARS OF EXPERIANCE</h3>
                  <p>How many years of experience do you have?</p>
                  <div className="yearsBoxes-content">
                    <div className="years-box" onClick={toggleActive}>
                      <p>0-1</p>
                      <b>YEARS</b>
                    </div>
                    <div className="years-box" onClick={toggleActive}>
                      <p>1-2</p>
                      <b>YEARS</b>
                    </div>
                    <div className="years-box" onClick={toggleActive}>
                      <p>2-4</p>
                      <b>YEARS</b>
                    </div>
                    <div className="years-box" onClick={toggleActive}>
                      <p>4-6</p>
                      <b>YEARS</b>
                    </div>
                    <div className="years-box" onClick={toggleActive}>
                      <p>6-10</p>
                      <b>YEARS</b>
                    </div>
                    <div className="years-box" onClick={toggleActive}>
                      <p>10+</p>
                      <b>YEARS</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socialLinks ">
                <div className="socialLinks-content">
                  <h3 className="margin-0">SOCIAL LINKS</h3>
                  <div className="cont upi margin-0 width-100">
                    <div className="display-flex">
                      <i className="fab fa-github media-icon color-black"></i>
                      <input
                        type="text"
                        name="Github"
                        autoComplete="off"
                        spellCheck="false"
                        required
                        value={userGithub}
                        onChange={checkUserGithubLength}
                      />
                      <label htmlFor="city" className="label-name">
                        <span className="content-name">Github</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div>
            <input
              type="submit"
              value="Update profile"
              className="pink-button"
              onClick={setStateOfAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
