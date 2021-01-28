import React, { createContext } from 'react';

const ApiContext = createContext();

function ApiContextProvider({ children, token, isFetching, setIsFetching, setToken }) {
  return (
    <ApiContext.Provider value={{ isFetching, token, setIsFetching, setToken }}>
      {children}
    </ApiContext.Provider>
  );
}

export {
  ApiContext,
  ApiContextProvider,
};
