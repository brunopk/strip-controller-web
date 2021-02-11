import React from 'react';

/**
 * Wrapper for Bootstrap alert (see https://getbootstrap.com/docs/4.0/components/alerts/)
 */
function Danger({ children, className }) {
  className = typeof className !== 'undefined' ? className : '';
  return (
    <div className={`alert alert-danger text-danger ${className}`} role="alert">
      {children}
    </div>
  );
}

export default Danger;
