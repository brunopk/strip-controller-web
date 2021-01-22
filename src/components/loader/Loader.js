import React from 'react';
import './Loader.css';

function Loader({ size }) {
  size = typeof size === 'undefined' ? 18 : size;
  return (
    <div className="loader" style={{ width: size, height: size }} />
  );
}

export default Loader;
