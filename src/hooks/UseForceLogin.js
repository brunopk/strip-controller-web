import { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context';
import { useLocation, useHistory } from 'react-router-dom';

/**
 * Force to login again and redirects to the current location (before login).
 * @returns {Function} forceLogin
 */
function useForceLogin() {
  const location = useLocation();
  const history = useHistory();
  const [doRedirect, setDoRedirect] = useState(false);
  const { setToken } = useContext(MainContext);

  useEffect(() => {
    if (doRedirect) {
      setToken(null);
      history.replace(location.pathname);
    }
  }, [doRedirect]);

  return () => setDoRedirect(true);
}

export default useForceLogin;
