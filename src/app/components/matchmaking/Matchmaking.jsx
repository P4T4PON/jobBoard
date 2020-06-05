import React from 'react';
import './Matchmaking.css';
import LoggingBox from './loggingBox/LoggingBox'
import MatchmakingImage from './image/MatchmakingImage'
import Register from './register/Register'
import ResetPassword from './resetPasswordBox/reset-password/ResetPassword'
import { Route, Switch } from 'react-router-dom'

const Matchmaking = () => {
  return (
    <div className="matchmaking">
      <Switch>
        <Route exact path={'/devs'}>
          <LoggingBox />
        </Route>
        <Route exact path={'/devs/Register'}>
          <Register />
        </Route>
        <Route exact path={'/devs/reset-password'}>
          <ResetPassword />
        </Route>
      </Switch>
      <MatchmakingImage />
    </div>
  );
};

export default Matchmaking;