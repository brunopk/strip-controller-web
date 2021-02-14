import React, { createContext } from 'react';

const DashboardContext = createContext();

function DashboardContextProvider({
  children,
  data,
  colors,
  fetching,
  setData,
  setFetching,
  setColors
}) {
  return (
    <DashboardContext.Provider value={{ data, colors, fetching, setData, setFetching, setColors }}>
      {children}
    </DashboardContext.Provider>
  );
}

export {
  DashboardContext,
  DashboardContextProvider,
};
