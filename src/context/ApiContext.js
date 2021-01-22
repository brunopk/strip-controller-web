import React, { createContext } from 'react';

const ApiContext = createContext();

function ApiContextProvider({ children, isFetching, setIsFetching }) {
  return (
    <ApiContext.Provider value={{ isFetching, setIsFetching }}>
      {children}
    </ApiContext.Provider>
  );
}

export {
  ApiContext,
  ApiContextProvider,
};
