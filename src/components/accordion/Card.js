import React from 'react';

function CardHeader({ id, title, dataTarget, ariaExpanded }) {
  ariaExpanded = typeof ariaExpanded === 'boolean' && ariaExpanded;
  return (
    <div className="card-header" id={id}>
      <h5 className="mb-0">
        <button
          className="btn btn-link"
          data-toggle="collapse"
          data-target={dataTarget}
          aria-expanded={ariaExpanded}
          aria-controls={dataTarget.slice(1)}>
          <span>{title}</span>
        </button>
      </h5>
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

function Card({ children, id, title, expanded }) {
  return (
    <div className="card">
      <CardHeader id={`heading${id}`} title={title} dataTarget={`#${id}`} ariaExpanded={expanded} />
      <CardBody id={id} ariaLabelledBy={`heading${id}`} dataParent="#accordion" ariaExpanded={expanded}>
        {children}
      </CardBody>
    </div>
  );
}

export default Card;
