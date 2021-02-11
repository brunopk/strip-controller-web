import React from 'react';
import './Alert.css';

/**
 * Wrapper for Bootstrap alert (see https://getbootstrap.com/docs/4.0/components/alerts/)
 */
function Danger({ children, className }) {
  className = typeof className !== 'undefined' ? className : '';
  return (
    <div className={`alert alert-danger ${className}`} role="alert">
      <div className="btn text-danger">
        {children}
      </div>
    </div>
  );
}

export default Danger;
