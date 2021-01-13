import React, { createContext } from 'react';

const ButtonMenuContext = createContext();

function ButtonMenuContextProvider({ children, buttonList, setButtonList }) {
  return (
    <ButtonMenuContext.Provider value={{ buttonList, setButtonList }}>
      {children}
    </ButtonMenuContext.Provider>
  );
}

export {
  ButtonMenuContext,
  ButtonMenuContextProvider,
};
