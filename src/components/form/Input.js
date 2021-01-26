/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { FormContext } from '../../context';

/**
 * This component must be used in conjunction with FormContextProvider
 */
function Input({ type, id, value, onChange, onBlur, required, isInvalid, title }) {
  const { setLastEditedInput } = useContext(FormContext);
  const [currentValue, setCurrentValue] = useState(value);
  let className = 'form-control';
  const wrappedOnChange = (event) => {
    setCurrentValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  const wrappedOnBlur = (currentValue) => {
    setLastEditedInput(id);
    if (typeof onBlur === 'function') {
      onBlur(currentValue);
    }
  };

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
      onBlur={() => wrappedOnBlur(currentValue)}
      required={required} />
  );
}

export default Input;
