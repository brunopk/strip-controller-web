import React from 'react';

function Form({ id, children }) {
  return (
    <form id={id} className="w-100">
      {children}
    </form>
  );
}

export default Form;
