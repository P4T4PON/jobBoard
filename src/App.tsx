import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './app/components/navbar/Navbar';
import './App.css';
import { useSelector } from 'react-redux';
import BrandStories from './app/components/brandStories/BrandStories';
import JobOffers from './app/components/jobOffers/JobOffers';
import Machmaking from './app/components/matchmaking/Matchmaking';
import AddOffer from './app/components/addOffer/AddOffer';
import Register from './app/components/matchmaking/register/Register';
import ResetPassword from './app/components/matchmaking/reset-password/ResetPassword';
import UserLogin from './app/components/userLogin/UserLogin';
import UserRegister from './app/components/userLogin/userRegister/UserRegister';
import TermsAndPolicies from './app/components/termsAndPolicies/TermsAndPolicies';
import UserProfile from './app/components/userProfile/userProfile/UserProfile';
import UserPanel from './app/components/userProfile/UserPanel';
import UserMachmaking from './app/components/userProfile/userMachmaking/UserMachmaking';
import UserPreferences from './app/components/userProfile/userPreferences/UserPreferences';
import UserSettings from './app/components/userProfile/userSettings/UserSettings';
import Sidebar from './app/components/jobOffers/sidebar/Sidebar'
import CompanyProfile from './app/components/jobOffers/companyProfile/CompanyProfile'
import Map from './app/components/map/MapBox';


const App = () => {
  const isDay = useSelector<any, any>(state => state.isDay);

  const [profile, setProfile] = useState({
    link: '',
    title: '',
    min: '',
    max: '',
    img: '',
    companyName: '',
    companyAddress: '',
    bgColor: '',
    name: '',
    companyLink: '',
    companySize: '',
    companyType: '',
    exp: '',
    age: '',
    offerDetail: '',
    companyDescription: '',
    remote: ''
  })

  const [linkTo, setLinkTo] = useState(true)
  const [value, setValue] = useState([0, 50])
  const [path, setPath] = useState('/');
  const [city, setCity] = useState('');
  const [technology, setTechnology] = useState('');
  const [expLevel, setExpLevel] = useState('');

  const toggleValue = (newValue: any) => {
    setValue(newValue);
  }

  const toggleProfile = (
    newProfile: any
  ) => {
    setProfile(newProfile)
  };


  const toggleAllCities = (newCity: any, newPath: any) => {
    setCity(newCity);
    setPath(newPath);
  };

  const toggleAllTechnologies = (newTechnology: any) => {
    setTechnology(newTechnology);
  };

  const toggleExpLevel = (newExpLevel: any) => {
    setExpLevel(newExpLevel);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <Fragment> <JobOffers linkTo={linkTo} toggleValue={toggleValue} toggleAllCities={toggleAllCities} toggleAllTechnologies={toggleAllTechnologies} toggleExpLevel={toggleExpLevel} />
              <Sidebar
                toggleProfile={toggleProfile}
                city={city}
                toggleAllCities={toggleAllCities}
                newTechnology={technology}
                expLevel={expLevel}
                isDay={isDay}
                value={value}
              /> </Fragment>}
          />

          <Route
            exact path={'/Offer/:id'}
            render={() => (
              <Fragment> <JobOffers linkTo={linkTo} toggleValue={toggleValue} toggleAllCities={toggleAllCities} toggleAllTechnologies={toggleAllTechnologies} toggleExpLevel={toggleExpLevel} />
                <CompanyProfile
                  profile={profile}
                /> </Fragment>
            )}
          />

          <Route
            exact path="/brands"
            render={() => <BrandStories toggleAllCities={toggleAllCities} />}
          />

          <Route
            exact
            path="/devs/"
            render={() => <Machmaking />}
          />

          <Route
            exact
            path="/add-offer"
            render={() => <AddOffer />}
          />

          <Route
            exact
            path="/devs/Register"
            render={() => <Register />}
          />

          <Route
            exact
            path="/devs/reset-password"
            render={() => <ResetPassword />}
          />

          <Route
            exact
            path="/users/sign_in"
            render={() => <UserLogin />}
          />

          <Route
            exact
            path="/users/password/new"
            render={() => <UserRegister />}
          />

          <Route
            exact
            path="/terms-and-privacy-policies"
            render={() => <TermsAndPolicies />}
          />

          <Route
            exact
            path="/devs/panel"
            render={() => <UserPanel />}
          />

          <Route
            exact
            path="/devs/panel/profile"
            render={() => <UserProfile />}
          />

          <Route
            exact
            path="/devs/panel/matchmaking"
            render={() => <UserMachmaking />}
          />

          <Route
            exact
            path="/devs/panel/preferences"
            render={() => <UserPreferences />}
          />

          <Route
            exact
            path="/devs/panel/settings"
            render={() => <UserSettings />}
          />

        </Switch>
      </Router>
    </div>
  );
};

export default App;
