import React from 'react';
import './Alert.css';

/**
 * Wrapper for Bootstrap alert (see https://getbootstrap.com/docs/4.0/components/alerts/)
 */
function Warning({ children, className }) {
  className = typeof className !== 'undefined' ? className : '';
  return (
    <div className={`alert alert-warning ${className}`} role="alert">
      <div className="btn text-warning">
        {children}
      </div>
    </div>
  );
}

export default Warning;
