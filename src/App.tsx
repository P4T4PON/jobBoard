import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './app/components/navbar/Navbar';
import './App.css';
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
// https://reacttraining.com/react-router/web/guides/quick-start <- zobacz jak powinien byc zbudowany poprawnie router
// niepotrzbnie az tyle switchy uzywasz, w renderze masz nieuzywane propsy i przekazujesz komponentu w react fragmencie, jest
// to zla praktyka i niepotrzebny element.
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <JobOffers />} />
        </Switch>

        <Switch>
          <Route exact path="/Brands" render={() => <BrandStories />} />
        </Switch>

        <Switch>
          <Route exact path="/devs/" render={() => <Machmaking />} />
        </Switch>

        <Switch>
          <Route exact path="/add-offer" render={() => <AddOffer />} />
        </Switch>
        <Switch>
          <Route exact path="/devs/Register" render={() => <Register />} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/devs/reset-password"
            render={() => <ResetPassword />}
          />
        </Switch>
        <Switch>
          <Route exact path="/users/sign_in" render={() => <UserLogin />} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/users/password/new"
            render={() => <UserRegister />}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/terms-and-privacy-policies"
            render={() => <TermsAndPolicies />}
          />
        </Switch>

        <Switch>
          <Route exact path="/devs/panel" render={() => <UserPanel />} />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/profile"
            render={() => <UserProfile />}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/matchmaking"
            render={() => <UserMachmaking />}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/devs/panel/preferences"
            render={() => <UserPreferences />}
          />
        </Switch>

        <Switch>
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
