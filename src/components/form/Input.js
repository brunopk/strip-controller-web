/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { FormContext } from '../../context';

function Input({ type, id, onChange, required, isInvalid, title }) {
  const formContext = useContext(FormContext);
  let className = 'form-control';
  const wrappedOnChange = (event) => {
    formContext.setLastEditedInput(id);
    onChange(event.target.value);
  };

  if (typeof formContext === 'undefined') {
    throw new Error('Input component must be placed inside FormContextProvider');
  }

  if (typeof id === 'undefined') {
    throw new Error('Input component must have an id');
  }

  if (typeof required === 'undefined') {
    required = false;
  }

  if (typeof isInvalid !== 'undefined' && isInvalid) {
    className += ' is-invalid';
  }

  if (typeof title === 'undefined') {
    title = '';
  }

  return (
    <input
      type={type}
      className={className}
      title={title}
      onChange={(value) => wrappedOnChange(value)}
      required={required} />
  );
}

export default Input;
