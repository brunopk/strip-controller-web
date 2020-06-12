import React from "react";
import './Login.css'

function Login() {

    document.body.classList.add('text-center');

    return (
        <form className="form-signin">
            <img className="mb-4" src="/logo72.png" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Username</label>
            <input type="email" id="inputEmail"
                   className="form-control"
                   placeholder="Username"
                   required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

export default Login;
