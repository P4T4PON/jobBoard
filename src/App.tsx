import React, { Fragment, Component } from 'react';
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
import UserProfile from './app/components/userProfile/UserProfile';
import UserMachmaking from './app/components/userProfile/userMachmaking/UserMachmaking';
import UserPreferences from './app/components/userProfile/userPreferences/UserPreferences';
import UserSettings from './app/components/userProfile/userSettings/UserSettings';
import UserPanel from './app/components/userProfile/userPanel/UserPanel';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <JobOffers />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/Brands"
            render={props => (
              <Fragment>
                <BrandStories />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/"
            render={props => (
              <Fragment>
                <Machmaking />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/add-offer"
            render={props => (
              <Fragment>
                <AddOffer />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/devs/Register"
            render={props => (
              <Fragment>
                <Register />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/devs/reset-password"
            render={props => (
              <Fragment>
                <ResetPassword />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/users/sign_in"
            render={props => (
              <Fragment>
                <UserLogin />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/users/password/new"
            render={props => (
              <Fragment>
                <UserRegister />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/terms-and-privacy-policies"
            render={props => (
              <Fragment>
                <TermsAndPolicies />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel"
            render={props => (
              <Fragment>
                <UserPanel />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/profile"
            render={props => (
              <Fragment>
                <UserProfile />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/matchmaking"
            render={props => (
              <Fragment>
                <UserMachmaking />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/preferences"
            render={props => (
              <Fragment>
                <UserPreferences />
              </Fragment>
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/settings"
            render={props => (
              <Fragment>
                <UserSettings />
              </Fragment>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
