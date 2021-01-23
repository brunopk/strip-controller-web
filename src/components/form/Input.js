import React from 'react';

function Input({ type, onChange, required }) {
  if (typeof required === 'undefined') {
    required = false;
  }

  return (
    <input
      type={type}
      className="form-control"
      onChange={() => onChange()}
      required={required} />
  );
}

export default Input;
