/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { FormContext } from '../../context';

/**
 * This component must be used in conjunction with FormContextProvider
 */
function Input({ type, id, value, onChange, onBlur, required, isInvalid, title }) {
  const { editedInputs, setLastEditedInput, setEditedInputs } = useContext(FormContext);
  const [currentValue, setCurrentValue] = useState(value);
  let className = 'form-control';
  const wrappedOnChange = (event) => {
    setCurrentValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  const wrappedOnBlur = (currentValue, editedInputs) => {
    editedInputs = editedInputs.slice();
    setLastEditedInput(id);
    if (editedInputs.filter((x) => x === id).length === 0) {
      editedInputs.push(id);
      setEditedInputs(editedInputs);
    }
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
      onBlur={() => wrappedOnBlur(currentValue, editedInputs)}
      required={required} />
  );
}

export default Input;
