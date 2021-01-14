import React from 'react';
import { withOrientationChange } from 'react-device-detect';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Panel as PColors } from './components/panels/colors';
import { Panel as PEffects } from './components/panels/effects';
import { Panel as PCustomizable } from './components/panels/customizable';
import { UserContextProvider } from './context/UserContext';
import Login from './components/login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/private-route';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './App.css';

function App() {
  // eslint-disable-next-line no-shadow
  const DashboardWithOrentation = withOrientationChange(Dashboard);
  return (
    <UserContextProvider>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {
          /* Note how these two routes are ordered. The more specific
      path="/contact/:id" comes before path="/contact" so that
      route will render when viewing an individual contact
          <Route path="/contact/:id">
              <Contact />
          </Route>
          <Route path="/contact">
              <AllContacts />
          </Route>  */

          /* If none of the previous routes render anything,
      this route acts as a fallback.

      Important: A route with path="/" will *always* match
      the URL because all URLs begin with a /. So that's
      why we put this one last of all */}
        <PrivateRoute path="/dashboard">
          <DashboardWithOrentation CurrentPanel={PColors} />
        </PrivateRoute>
        <PrivateRoute path="/effects">
          <DashboardWithOrentation CurrentPanel={PEffects} />
        </PrivateRoute>
        <PrivateRoute path="/customizable">
          <DashboardWithOrentation CurrentPanel={PCustomizable} />
        </PrivateRoute>
        <Route path="/">
          <Redirect to={{ pathname: '/dashboard' }} />
        </Route>
      </Switch>
    </UserContextProvider>
  );
}

export default App;
