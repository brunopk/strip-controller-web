import React, { useState, createContext } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export {
  UserContext,
  UserContextProvider,
};
