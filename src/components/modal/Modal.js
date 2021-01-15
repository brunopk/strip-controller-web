import React from 'react';
import './Modal.css';

/**
 * Show it with $('id').modal() (import jquery as $ )
 *
 * warning: string
 *
 * error: string
 *
 * primaryBtn: object
 *
 * primaryBtn.text: string
 *
 * primaryBtn.dataDissmiss: string
 *
 * primaryBtn.onClick: Function
 *
 * secondaryBtn.text: string
 *
 * secondaryBtn.dataDissmiss: Function
 *
 * secondaryBtn.onClick: Function
 *
 */
function Modal({ children, id, warning, error, primaryBtn, secondaryBtn }) {
  if (typeof error !== 'undefined' && typeof warning !== 'undefined') {
    throw new Error('Cannot show error and warning at the same time');
  }

  if (typeof primaryBtn !== 'object') {
    throw new Error('Primary button not defined for modal');
  }

  if (typeof primaryBtn.text !== 'string') {
    throw new Error('Text not defined for primary button');
  }

  if (typeof primaryBtn.onClick !== 'function') {
    throw new Error('Event not defined for primary button');
  }

  if (typeof primaryBtn.dataDismiss !== 'string') {
    throw new Error('Dismiss not defined for primary button');
  }

  if (typeof secondaryBtn === 'object') {
    if (typeof secondaryBtn.text !== 'string') {
      throw new Error('Text not defined for secondary button');
    }

    if (typeof secondaryBtn.onClick !== 'function') {
      throw new Error('Event not defined for secondary button');
    }
  }

  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container-fluid">
              {typeof warning !== 'undefined' ? (
                <div className="row">
                  <div className="alert alert-warning" role="alert">
                    {warning}
                  </div>
                </div>
              ) : (<></>) }
              {typeof error !== 'undefined' ? (
                <div className="row">
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                </div>
              ) : (<></>)}
              <div className="row">
                {children}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {typeof secondaryBtn !== 'undefined' ? (
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => secondaryBtn.onClick()}>
                {secondaryBtn.text}
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss={primaryBtn.dataDismiss}
              onClick={() => primaryBtn.onClick()}>
              {primaryBtn.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
