import { useReducer, useEffect } from 'react';

const A_FETCH_SET_PARAM = 'FETCH_SET_PARAM';
const A_FETCH_INIT = 'FETCH_INIT';
const A_FETCH_SUCCESS = 'FETCH_SUCCESS';
const A_FETCH_FAILURE = 'FETCH_FAILURE';
const A_FETCH_FAILURE_RESET = 'FETCH_FAILURE_RESET';
const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  param: null,
  result: null,
};

/**
 * Query an endpoint asynchronously
 * @param {Function} endpoint the endpoint that will be requested
 * @returns {Array} Returns an array with [isLoading, isError, result, fetch, reset]
 *
 *  - Initial values: [null, false, false, Function, Function]
 *  - fetch: (params) -> {} function to trigger the hook
 *  - reset: () -> null function to reset the hook in case of error (isError == true)
 *  - result: query result (in case of error, it will be the captured exception)
 */
function useFetchService(endpoint) {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case A_FETCH_SUCCESS:
        return {
          ...prevState,
          isLoading: false,
          result: action.data,
        };
      case A_FETCH_FAILURE:
        return {
          ...prevState,
          isError: true,
          isLoading: false,
          result: action.error,
        };
      case A_FETCH_INIT:
        return {
          ...prevState,
          isLoading: true,
          isError: false,
        };
      case A_FETCH_SET_PARAM:
        return {
          ...prevState,
          param: action.param,
        };
      default:
      case A_FETCH_FAILURE_RESET:
        return INITIAL_STATE;
    }
  }, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: A_FETCH_INIT });
        const res = await endpoint(state.param);
        dispatch({ type: A_FETCH_SUCCESS, data: res });
      } catch (error) {
        console.error(error);
        dispatch({ type: A_FETCH_FAILURE, error });
      }
    };
    if (state.param !== null) {
      fetchData();
    }
  }, [state.param, endpoint]);

  return [
    state.isLoading,
    state.isError,
    state.result,
    (param) => dispatch({ type: A_FETCH_SET_PARAM, param }),
    () => dispatch({ type: A_FETCH_FAILURE_RESET }),
  ];
}

export default useFetchService;
