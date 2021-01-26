import React from 'react';

/**
 * Wrapper for Bootstrap alert (see https://getbootstrap.com/docs/4.0/components/alerts/)
 */
function Warning({ children }) {
  return (
    <div className="alert alert-warning" role="alert">
      {children}
    </div>
  );
}

export default Warning;
