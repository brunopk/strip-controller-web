import React, { createContext } from 'react';

const FormContext = createContext();

function FormContextProvider({ children, validationFunction, setValidationFunction }) {
  return (
    <FormContext.Provider value={{ validationFunction, setValidationFunction }}>
      {children}
    </FormContext.Provider>
  );
}

export {
  FormContext,
  FormContextProvider,
};
