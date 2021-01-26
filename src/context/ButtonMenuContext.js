import React, { createContext } from 'react';

const ButtonMenuContext = createContext();

function ButtonMenuContextProvider({ children, contextualButtonMenu, setContextualButtonMenu }) {
  return (
    <ButtonMenuContext.Provider value={{ contextualButtonMenu, setContextualButtonMenu }}>
      {children}
    </ButtonMenuContext.Provider>
  );
}

export {
  ButtonMenuContext,
  ButtonMenuContextProvider,
};
