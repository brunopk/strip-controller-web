import React, { createContext } from 'react';

const FormContext = createContext();

function FormContextProvider({
  children,
  validationFunction,
  lastEditedInput,
  setValidationFunction,
  setLastEditedInput }) {
  if (typeof lastEditedInput === 'undefined') {
    throw new Error('lastEditedInput is not defined');
  }

  if (typeof setLastEditedInput === 'undefined') {
    throw new Error('setLastEditedInput is not defined');
  }

  if (typeof validationFunction === 'undefined') {
    throw new Error('validationFunction is not defined');
  }

  if (typeof setValidationFunction === 'undefined') {
    throw new Error('setValidationFunction is not defined');
  }

  return (
    <FormContext.Provider
      value={{ validationFunction, lastEditedInput, setValidationFunction, setLastEditedInput }}>
      {children}
    </FormContext.Provider>
  );
}

export {
  FormContext,
  FormContextProvider,
};
