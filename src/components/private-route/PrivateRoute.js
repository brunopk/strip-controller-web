import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {fakeAuth} from '../../utils/authentication'

function checkAuthenticationAndRedirect(component, actualLocation){
    // Every request should redirect to login in case of server returns a "Forbidden" error
    return fakeAuth.isAuthenticated ?
        (component) : <Redirect to={{pathname: "/login", state: { from: actualLocation }}}/>
}

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (<Route {...rest} render={({ location }) => checkAuthenticationAndRedirect(children, location)}/>);
}

export default PrivateRoute;
