import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './app/components/navbar/Navbar';
import './App.css';
import BrandStories from './app/components/brandStories/BrandStories';
import JobOffers from './app/components/jobOffers/JobOffers';
import Machmaking from './app/components/matchmaking/Matchmaking';
import AddOffer from './app/components/addOffer/AddOffer';
import UserLogin from './app/components/userSignIn/userLogin/UserLogin';
import UserRegister from './app/components/userSignIn/userRegister/UserRegister';
import TermsAndPolicies from './app/components/termsAndPolicies/TermsAndPolicies';
import UserPanel from './app/components/userPanel/UserPanel';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact path="/brands"
            render={() => <BrandStories />}
          />

          <Route
            path="/devs"
            render={() => <Machmaking />}
          />

          <Route
            exact
            path="/add-offer"
            render={() => <AddOffer />}
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
            path="/panel"
            render={() => <UserPanel />}
          />

          <Route path={'/'}><JobOffers /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
