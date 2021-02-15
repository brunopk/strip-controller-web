import { useEffect, useState, useContext } from 'react';
import { ApiError } from '../api';
import { MainContext } from '../context';
import useForceLogin from './UseForceLogin';

/**
 * Query an endpoint periodically
 * @param {Function} endpoint the endpoint that will be queried (it can't receive any params)
 * @param {Number} minutes defines the time between each query
 * @returns {Object} Returns an object with this structure { error, data }
 *
 * Where :
 *
 * - The first key is a boolean indicating if the endpoint threw an exception
 * - The second key is the result of the query (if error == true, it will be the exception)
 *
 * The initial value is : {error: false, data: null}
 *
 */
function useScheduledFetch(endpoint, minutes) {
  const forceLogin = useForceLogin();
  const { token } = useContext(MainContext);
  const [result, setResult] = useState({ error: false, data: null });

  useEffect(() => {
    /**
     * Dashboard component won't be re-rendered when going to a different location
     * in the side menu so this hook won't set more than one time interval
     * (see how Dashboard is declared in App.js).
     */
    const asyncQuery = async () => {
      try {
        // eslint-disable-next-line no-shadow
        const data = await endpoint({ token });
        setResult({ error: false, data });
      } catch (ex) {
        if (ex instanceof ApiError && ex.httpStatus === 401) {
          forceLogin();
        } else {
          setResult({ error: true, data: ex });
        }
      }
    };
    const interval = setInterval(asyncQuery, minutes * 60 * 1000);
    asyncQuery();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return result;
}

export default useScheduledFetch;
