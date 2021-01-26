import React, { useContext, useState } from 'react';
import { FormContextProvider, FormContext } from '../../context';
import { Danger } from '../alert';
import $ from 'jquery';
import './Modal.css';

function ModalBody({ children, formId }) {
  const { apiError } = useContext(FormContext);
  return (
    <div className="modal-body">
      <div className="container-fluid">
        {apiError ? (
          <div className="row">
            <Danger>
              {apiError}
            </Danger>
          </div>
        ) : (<></>)}
        <div className="row">
          <form id={formId}>
            {children}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

function ModalFooter({ modalId, primaryBtn, secondaryBtn }) {
  const { validationFunction } = useContext(FormContext);
  const validate = validationFunction;

  return (
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
        onClick={() => {
          if (validate()) {
            $(`#${modalId}`).modal('hide');
            primaryBtn.onClick();
          }
        }}>
        {primaryBtn.text}
      </button>
    </div>
  );
}

function ModalContent({ children, modalId, primaryBtn, secondaryBtn }) {
  const [validationFunction, setValidationFunction] = useState(() => () => true);
  const [lastEditedInput, setLastEditedInput] = useState(null);
  const [editedInputs, setEditedInputs] = useState([]);
  const [apiError, setApiError] = useState(false);
  const formId = `form${modalId}`;

  const wrappedSetValidationFunction = (func) => {
    // eslint-disable-next-line no-shadow
    const validationFunction = () => () => {
      const myForm = $(`#form${modalId}`);
      if (!myForm[0].checkValidity()) {
        // If the form is invalid, submit it. The form won't actually submit;
        // this will just cause the browser to display the native HTML5 error messages.
        myForm.find(':submit').trigger('click');
        return false;
      }
      // See https://medium.com/swlh/how-to-store-a-function-with-the-usestate-hook-in-react-8a88dd4eede1
      return func()();
    };
    setValidationFunction(validationFunction);
  };

  return (
    <FormContextProvider
      validationFunction={validationFunction}
      lastEditedInput={lastEditedInput}
      editedInputs={editedInputs}
      apiError={apiError}
      setValidationFunction={wrappedSetValidationFunction}
      setLastEditedInput={setLastEditedInput}
      setApiError={setApiError}
      setEditedInputs={setEditedInputs}>
      <ModalBody formId={formId}>
        {children}
      </ModalBody>
      <ModalFooter modalId={modalId} primaryBtn={primaryBtn} secondaryBtn={secondaryBtn} />
    </FormContextProvider>
  );
}

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
function Modal({ children, id, primaryBtn, secondaryBtn }) {
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
          <ModalContent
            modalId={id}
            primaryBtn={primaryBtn}
            secondaryBtn={secondaryBtn}>
            {children}
          </ModalContent>
        </div>
      </div>
    </div>
  );
}

export default Modal;
