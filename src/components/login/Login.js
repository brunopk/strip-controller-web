import React from "react";
import {useHistory, useLocation} from 'react-router-dom'
import {setBodyClass, setRootClass} from "../../utils/css"
import Logo from "../logo";
import {fakeAuth} from "../../utils/authentication";
import './Login.css'

function Login() {

    setBodyClass("text-center");
    setRootClass("root-login");

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            fakeAuth.isAuthenticated = true;
            alert('Welcome');
            // Redirect
            history.replace(from);
        });
    };

    return (
        <div className="form-signin">
            <img className="mb-4" src="/logo72.png" alt="" width="72" height="72"/>
            <Logo className={"logo"} />
            <label htmlFor="inputEmail" className="sr-only">Username</label>
            <input id="inputEmail" className="form-control" placeholder="Username" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <button className="btn btn-lg btn-primary btn-block" onClick={login}>Sign in</button>
        </div>
    );
}

export default Login;
