import React from 'react';

/**
 * Wrapper for Bootstrap alert (see https://getbootstrap.com/docs/4.0/components/alerts/)
 */
function Danger({ children }) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

export default Danger;
