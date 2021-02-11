import React, { useState } from 'react';
import Switch from 'react-switch';

function CardHeader({ id, title, isError, dataTarget, ariaExpanded, onToggle }) {
  ariaExpanded = typeof ariaExpanded === 'boolean' && ariaExpanded;
  const [toggleValue, setToggleValue] = useState(false);
  const onToggleWrapper = (value) => {
    const newValue = !value;
    setToggleValue(newValue);
    onToggle(newValue);
  };

  return (
    <div className={`card-header ${isError ? 'alert-danger' : ''}`} id={id}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 text-left">
            <h5 className="mb-0">
              <button
                className={`btn ${isError ? 'text-danger' : 'btn-link'}`}
                data-toggle="collapse"
                data-target={dataTarget}
                aria-expanded={ariaExpanded}
                aria-controls={dataTarget.slice(1)}>
                <span>{title}</span>
              </button>
            </h5>
          </div>
          <div className="col-6 justify-content-end align-items-center d-flex card-header-buttons">
            {onToggle !== null ? (
              <label>
                <Switch
                  className="align-middle"
                  height={24}
                  onChange={() => onToggleWrapper(toggleValue)}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  offColor="#6c757d"
                  onColor="#007bff"
                  checked={toggleValue} />
              </label>
            ) : (<></>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBody({ children, id, dataParent, ariaLabelledBy, ariaExpanded }) {
  const className = typeof ariaExpanded === 'boolean' && ariaExpanded ? 'collapse show' : 'collapse';
  return (
    <div id={id} className={className} data-parent={dataParent} aria-labelledby={ariaLabelledBy}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

function Card({ children, id, isError, title, expanded, onToggle }) {
  onToggle = typeof onToggle === 'undefined' ? null : onToggle;
  isError = typeof isError === 'undefined' ? false : isError;

  return (
    <div className="card">
      <CardHeader
        id={`heading${id}`}
        title={title}
        isError={isError}
        dataTarget={`#${id}`}
        ariaExpanded={expanded}
        onToggle={onToggle} />
      <CardBody id={id} ariaLabelledBy={`heading${id}`} dataParent="#accordion" ariaExpanded={expanded}>
        {children}
      </CardBody>
    </div>
  );
}

export default Card;
