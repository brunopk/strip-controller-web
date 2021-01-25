import React from 'react';

function Form({ id, children }) {
  // TODO: add <input type="submit" /> (and replace <form> by <Form> in Modal component)
  return (
    <form id={id} className="w-100">
      {children}
    </form>
  );
}

export default Form;
