/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { FormContext } from '../../context';

function Input({ type, id, value, onChange, onBlur, required, isInvalid, title }) {
  const formContext = useContext(FormContext);
  const [currentValue, setCurrentValue] = useState(value);
  let className = 'form-control';
  const wrappedOnChange = (event) => {
    formContext.setLastEditedInput(id);
    setCurrentValue(event.target.value);
    onChange(event.target.value);
  };

  if (typeof formContext === 'undefined') {
    throw new Error('Input component must be placed inside FormContextProvider');
  }

  if (typeof id === 'undefined') {
    throw new Error('Input component must have an id');
  }

  if (typeof currentValue === 'undefined') {
    throw new Error('Input component must define a value');
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
      value={currentValue}
      title={title}
      onChange={(event) => wrappedOnChange(event)}
      onBlur={() => onBlur(currentValue)}
      required={required} />
  );
}

export default Input;
