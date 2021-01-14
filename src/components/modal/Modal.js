import React from 'react';

function Modal({ id }) {
  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
<div class="container-fluid"><div class="row"><div class="alert alert-warning" role="alert" style="
    width: 100%;
">
  This is a warning alert—check it out!
</div></div><div class="row">Text</div></div>

*/
export default Modal;
