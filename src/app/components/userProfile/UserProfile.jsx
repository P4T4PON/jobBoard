import React, { useState } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';

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
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  let toggleactive1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };

  let toggleactive2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  let toggleactive3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  let toggleactive4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
    setActive6(false);
  };
  let toggleactive5 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
    setActive6(false);
  };
  let toggleactive6 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(true);
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
      <div className="userLogin-sidebar">
        <div className="userLogin-sidebarContent">
          <div className="userLogin-img"></div>
          <div className="userLogin-welcome">
            <p>Welcome</p>
            <span>{name}</span>
          </div>
          <div
            className={
              jobStatus === 'green'
                ? 'userLogin-jobStatus green bg-green'
                : jobStatus === 'blue'
                ? 'userLogin-jobStatus blue bg-blue'
                : jobStatus === 'red'
                ? 'userLogin-jobStatus red bg-red'
                : null
            }
            onClick={() => {
              setShowStatus(!showStatus);
            }}
          >
            {jobStatus === 'green' ? (
              <i className="far fa-check-circle big-circle green"></i>
            ) : jobStatus === 'blue' ? (
              <i className="far fa-envelope big-circle"></i>
            ) : jobStatus === 'red' ? (
              <i className="fas fa-times-circle big-circle"></i>
            ) : null}

            <p>
              {jobStatus === 'green'
                ? 'I’m actively looking for a job'
                : jobStatus === 'blue'
                ? 'Open for proposals'
                : jobStatus === 'red'
                ? 'Not open for proposals'
                : null}
            </p>
            <i
              className={
                jobStatus === 'green'
                  ? 'fas fa-chevron-down small-chew green'
                  : jobStatus === 'blue'
                  ? 'fas fa-chevron-down small-chew blue'
                  : jobStatus === 'red'
                  ? 'fas fa-chevron-down small-chew red'
                  : null
              }
            ></i>
          </div>
          <div
            className={
              showStatus
                ? 'userLogin-jobStatusChanger'
                : 'userLogin-jobStatusChanger display-none'
            }
          >
            <ul>
              <li onClick={toggleJobStatusGreen}>
                I’m actively looking for a job
              </li>
              <li onClick={toggleJobStatusBlue}>Open for proposals</li>
              <li onClick={toggleJobStatusRed}>Not open for proposals</li>
            </ul>
          </div>
          <div className="userLogin-Options">
            <Link to="/devs/panel/profile">
              <div className="userLogin-Optionslist userLogin-active">
                <i className="far fa-user"></i>
                <p>My profile</p>
              </div>
            </Link>
            <Link to="/devs/panel/matchmaking">
              <div className="userLogin-Optionslist">
                <i className="fas fa-inbox"></i>
                <p>Matchmaking</p>
              </div>
            </Link>
            <Link to="/devs/panel/preferences">
              <div className="userLogin-Optionslist">
                <i className="fas fa-pen"></i>
                <p>Preferences</p>
              </div>
            </Link>
            <Link to="/devs/panel/settings">
              <div className="userLogin-Optionslist">
                <i className="fas fa-cog"></i>
                <p>Settings</p>
              </div>
            </Link>
            <Link to="/devs/">
              <div className="userLogin-Optionslist">
                <i className="fas fa-power-off"></i>
                <p>Log out</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
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
                    <div
                      className={
                        active1
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive1}
                    >
                      <p>0-1</p>
                      <b>YEARS</b>
                    </div>
                    <div
                      className={
                        active2
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive2}
                    >
                      <p>1-2</p>
                      <b>YEARS</b>
                    </div>
                    <div
                      className={
                        active3
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive3}
                    >
                      <p>2-4</p>
                      <b>YEARS</b>
                    </div>
                    <div
                      className={
                        active4
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive4}
                    >
                      <p>4-6</p>
                      <b>YEARS</b>
                    </div>
                    <div
                      className={
                        active5
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive5}
                    >
                      <p>6-10</p>
                      <b>YEARS</b>
                    </div>
                    <div
                      className={
                        active6
                          ? 'years-box border-pink color-pink'
                          : 'years-box'
                      }
                      onClick={toggleactive6}
                    >
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
