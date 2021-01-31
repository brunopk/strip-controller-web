import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import { ApiError, getToken } from '../../api';
import { setBodyClass, setRootClass } from '../../utils/css';
import { Danger } from '../alert';
import useFetchService from '../../hooks';
import Logo from '../logo';
import Loader from '../loader';
import './Login.css';

function Login() {
  // TODO: show error messages not directly from API (map error codes to strings)
  const [isFetching, isError, loginResult, login, loginReset] = useFetchService(getToken);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(ApiContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '' } };

  // eslint-disable-next-line no-shadow
  const onSubmit = (event, username, password) => {
    event.preventDefault();
    login({ username, password });
  };
  // eslint-disable-next-line no-shadow
  const onChangeUsername = (username) => {
    loginReset();
    setUsername(username);
  };
  // eslint-disable-next-line no-shadow
  const onChangePassword = (password) => {
    loginReset();
    setPassword(password);
  };

  useEffect(() => {
    if (!isError && loginResult !== null) {
      setToken(loginResult.token);
      history.replace(from);
    }
  }, [isError, loginResult]);

  setBodyClass('text-center');
  if (isFetching) {
    setRootClass('root-loader');
  } else {
    setRootClass('root-login');
  }

  return isFetching ? (
    <Loader />
  ) : (
    <form id="form-login" onSubmit={(event) => onSubmit(event, username, password)}>
      <div className="form-signin">
        <img className="mb-4" src="/logo72.png" alt="" width="72" height="72" />
        <Logo />
        <Danger className={`${isError ? 'visible' : 'invisible'}`}>
          {loginResult !== null && loginResult instanceof ApiError ? loginResult.httpStatusText : ''}
          {loginResult !== null && !(loginResult instanceof ApiError) ? 'Error, see browser console' : ''}
        </Danger>
        <label htmlFor="inputEmail" className="sr-only">Username</label>
        <input
          id="inputEmail"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(event) => onChangeUsername(event.target.value)}
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input
          id="inputPassword"
          type="password"
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(event) => onChangePassword(event.target.value)}
          required />
        <button type="submit" className="btn btn-lg btn-primary btn-block">Sign in</button>
      </div>
    </form>
  );
}

export default Login;
