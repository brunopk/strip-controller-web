import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom"
import {UserContext} from "../../context/UserContext"

/**
 * Check authentication and redirect
 * @param {*} token token
 * @param {*} location the component the user wants to go 
 * @param {*} locationData information about the component the user wants to go (see Redirect component on react-router-dom)
 */
function checkAuthenticationAndRedirect(token, location, locationData){
    console.log(token);
    // Every request should redirect to login in case of server returns a "Forbidden" error
    return token != null ?
        (location) : <Redirect to={{pathname: "/login", state: { from: locationData }}}/>
}

/**
 * A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
 * children: is the component to be redirected (if user is already loged in)
 * location: contains data of the component where the user comes from
 * @param {*} param0 
 */
function PrivateRoute({ children, ...rest }) {
    const {token} = useContext(UserContext);
    return (<Route {...rest} render={({ location }) => checkAuthenticationAndRedirect(token, children, location)}/>);
}

export default PrivateRoute;
