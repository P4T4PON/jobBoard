import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './app/components/navbar/Navbar';
import './App.css';
import { useSelector } from 'react-redux';
import BrandStories from './app/components/brandStories/BrandStories';
import JobOffers from './app/components/jobOffers/JobOffers';
import Machmaking from './app/components/matchmaking/Matchmaking';
import AddOffer from './app/components/addOffer/AddOffer';
import SideDrawer from './app/components/sideDrawer/SideDrawer';
import BackDrop from './app/components/backdrop/Backdrop';

const App: React.FC = () => {
  const testReducer = useSelector<any | unknown, any | unknown>(
    state => state.test
  );

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

        {testReducer ? (
          <Fragment>
            <SideDrawer />
            <BackDrop />
          </Fragment>
        ) : (
          <SideDrawer />
        )}
      </Router>
    </div>
  );
};

export default App;
