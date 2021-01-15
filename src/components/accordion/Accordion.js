import React from 'react';
import './Accordion.css';

function Accordion({ children }) {
  return (
    <div id="accordion">
      {children}
    </div>
  );
}

export default Accordion;
