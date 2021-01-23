import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { setBodyClass, setRootClass } from '../../utils/css';
import Logo from '../logo';
import Loader from '../loader';
import './Login.css';

function Login() {
  const [isFetching] = useState(false);
  const { setToken } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '' } };
  const login = async () => {
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
    <div className="form-signin">
      <img className="mb-4" src="/logo72.png" alt="" width="72" height="72" />
      <Logo />
      <label htmlFor="inputEmail" className="sr-only">Username</label>
      <input id="inputEmail" className="form-control" placeholder="Username" required />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <button className="btn btn-lg btn-primary btn-block" onClick={login}>Sign in</button>
    </div>
  );
}

export default Login;
