import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import { setBodyClass, setRootClass } from '../../utils/css';
import Logo from '../logo';
import Loader from '../loader';
import $ from 'jquery';
import './Login.css';

function Login() {
  const [isFetching] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setToken } = useContext(ApiContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '' } };
  const login = async () => {
    const form = $('#form-login');
    if (!form[0].checkValidity()) {
      // If the form is invalid, submit it. The form won't actually submit;
      // this will just cause the browser to display the native HTML5 error messages.
      form.find(':submit').trigger('click');
    } else {
      try {
        // const resp = await getToken();
        // if (resp.ok) {
        // const body = await resp.json()
        setToken('asds');
        // Redirect
        history.replace(from);
        // } else {
        // TODO
        // }
      } catch (error) {
        // TODO
        console.log(error);
      }
    }
  };

  setBodyClass('text-center');
  if (isFetching) {
    setRootClass('root-loader');
  } else {
    setRootClass('root-login');
  }

  return isFetching ? (
    <Loader />
  ) : (
    <form id="form-login">
      <div className="form-signin">
        <img className="mb-4" src="/logo72.png" alt="" width="72" height="72" />
        <Logo />
        <label htmlFor="inputEmail" className="sr-only">Username</label>
        <input
          id="inputEmail"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input
          id="inputPassword"
          type="password"
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          required />
        <button className="btn btn-lg btn-primary btn-block" onClick={login}>Sign in</button>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Login;
