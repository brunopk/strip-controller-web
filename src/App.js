import React, { useState } from 'react';
import { withOrientationChange } from 'react-device-detect';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainContextProvider } from './context';
import Customization from './components/dashboard/customization';
import Effects from './components/dashboard/effects';
import Login from './components/login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/private-route';
import menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [deviceError, setDeviceError] = useState(true);
  const [deviceOn, setDeviceOn] = useState(false);
  const [data, setData] = useState({});
  const DashboardWithOrentation = withOrientationChange(Dashboard);

  return (
    <MainContextProvider
      token={token}
      data={data}
      deviceOn={deviceOn}
      deviceError={deviceError}
      setToken={setToken}
      setData={setData}
      setDeviceOn={setDeviceOn}
      setDeviceError={setDeviceError}>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} token={token} />
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
        <PrivateRoute path={menu.effects.path}>
          <DashboardWithOrentation>
            <Effects />
          </DashboardWithOrentation>
        </PrivateRoute>
        <PrivateRoute path={menu.customization.path}>
          <DashboardWithOrentation>
            <Customization />
          </DashboardWithOrentation>
        </PrivateRoute>
        <Route path="/">
          <Redirect to={{ pathname: menu.effects.path }} />
        </Route>
      </Switch>
    </MainContextProvider>
  );
}

export default App;
