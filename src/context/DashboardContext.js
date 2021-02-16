import React, { createContext } from 'react';

const DashboardContext = createContext();

function DashboardContextProvider({
  children,
  data,
  colors,
  fetching,
  modalVisible,
  setData,
  setFetching,
  setColors,
  setModalVisible
}) {
  return (
    <DashboardContext.Provider value={{
      data,
      colors,
      fetching,
      modalVisible,
      setData,
      setFetching,
      setColors,
      setModalVisible }}>
      {children}
    </DashboardContext.Provider>
  );
}

export {
  DashboardContext,
  DashboardContextProvider,
};
