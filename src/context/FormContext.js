import React, { createContext } from 'react';

const FormContext = createContext();

function FormContextProvider({
  children,
  validationFunction,
  lastEditedInput,
  editedInputs,
  apiError,
  setValidationFunction,
  setLastEditedInput,
  setApiError,
  setEditedInputs }) {
  // TODO: consider removing apiError and setApiError

  if (typeof editedInputs === 'undefined') {
    throw new Error('editedInputs is not defined');
  }

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

  if (typeof setEditedInputs === 'undefined') {
    throw new Error('setEditedInputs is not defined');
  }

  return (
    <FormContext.Provider
      value={{
        validationFunction,
        lastEditedInput,
        editedInputs,
        apiError,
        setValidationFunction,
        setLastEditedInput,
        setApiError,
        setEditedInputs }}>
      {children}
    </FormContext.Provider>
  );
}

export {
  FormContext,
  FormContextProvider,
};
