import React, { createContext } from 'react';

const DeviceContext = createContext();

function DeviceContextProvider({ children, isError, isOn, setIsOn, setIsError }) {
  return (
    <DeviceContext.Provider value={{ isError, isOn, setIsError, setIsOn }}>
      {children}
    </DeviceContext.Provider>
  );
}

export {
  DeviceContext,
  DeviceContextProvider,
};
