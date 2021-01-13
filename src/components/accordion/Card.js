import React from 'react';

function CardHeader({ id, title, dataTarget }) {
  return (
    <div className="card-header" id={id}>
      <h5 className="mb-0">
        <button
          className="btn btn-link"
          data-toggle="collapse"
          data-target={dataTarget}
          aria-expanded="false"
          aria-controls={dataTarget.slice(1)}>
          <span>{title}</span>
        </button>
      </h5>
    </div>
  );
}

function CardBody({
  children, id, dataParent, ariaLabelledBy,
}) {
  return (
    <div id={id} className="collapse" data-parent={dataParent} aria-labelledby={ariaLabelledBy}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

function Card({ children, id, title }) {
  return (
    <div className="card">
      <CardHeader id={`heading${id}`} title={title} dataTarget={`#${id}`} />
      <CardBody id={id} ariaLabelledBy={`heading${id}`} dataParent="#accordion">
        {children}
      </CardBody>
    </div>
  );
}

export default Card;
