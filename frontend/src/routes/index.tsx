import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/"component={Main} exact />
    <Route component={Dashboard} path="/results" />
  </Switch>
);

export default Routes;
