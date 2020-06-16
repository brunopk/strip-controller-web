import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import './App.css';
import Login from "./components/login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from './components/private-route'

function App() {

    return (
        <>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>

                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact
                <Route path="/contact/:id">
                    <Contact />
                </Route>
                <Route path="/contact">
                    <AllContacts />
                </Route>*/

                /* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
                <Route path="/dash">
                <Dashboard/>
            </Route>
            <PrivateRoute path="/dashboard">
                    <Dashboard/>
                </PrivateRoute>
                <Route path="/">
                    <Redirect to={{pathname: "/dashboard"}}/>
                </Route>
            </Switch>
        </>
  );
}

export default App;
