import React, { createContext } from 'react';

const MainContext = createContext();

function MainContextProvider({
  children,
  token,
  data,
  deviceOn,
  deviceError,
  setToken,
  setData,
  setDeviceOn,
  setDeviceError }) {
  return (
    <MainContext.Provider value={{
      token,
      data,
      deviceOn,
      deviceError,
      setToken,
      setData,
      setDeviceOn,
      setDeviceError }}>
      {children}
    </MainContext.Provider>
  );
}

export {
  MainContext,
  MainContextProvider,
};
