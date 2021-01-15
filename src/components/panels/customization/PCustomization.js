import React, { useState, useEffect, useContext } from 'react';
import './PCustomization.css';
import * as Icon from 'react-feather';
import $ from 'jquery';
import Modal from '../../modal';
import { Accordion, Card } from '../../accordion';
import { ButtonMenuContext } from '../../../context/ButtonMenuContext';

/* function SectionColorConfiguration({ title }) {
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
         <button
          className="btn btn-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo">
            {title}
          </button>
          <button type="button" className="btn btn-danger section-btn">
            <Icon.X />
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
        <div className="card-body">
          <Colors editable />
        </div>
      </div>
    </div>
  );
} */

function SectionRangeConfiguration({ title, from, to }) {
  // TODO sacar readOnly={true} y hacer onChange

  return (
    <div className="row row-with-margin-top align-items-center">
      <div className="col col-4">
        <span>{title}</span>
      </div>
      <div className="col col-2 text-right">
        <span>From:</span>
      </div>
      <div className="col col-2">
        <input type="number" value={from} className="form-control" readOnly />
      </div>
      <div className="col col-2 text-right">
        <span>To:</span>
      </div>
      <div className="col col-2">
        <input type="number" value={to} className="form-control" readOnly />
      </div>
    </div>
  );
}

function CardBody() {
  // const { setButtonList } = useContext(ButtonMenuContext);
  const [numberOfLeds, setNumberOfLeds] = useState(5);
  const [sections] = useState([{ from: 0, to: numberOfLeds - 1 }]);

  return (
    <div className="container-fluid">
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>Number of leds:</span>
        </div>
        <div className="col col-8">
          <input
            type="number"
            value={numberOfLeds}
            className="form-control"
            onChange={(event) => setNumberOfLeds(event.target.value)}
          />
        </div>
      </div>
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>Number of sections:</span>
        </div>
        <div className="col col-8">
          <input
            type="number"
            className="form-control"
            value={sections.length}
            onChange={() => null}
          />
        </div>
      </div>
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>Sections:</span>
        </div>
        <div className="col col-8">
          <div className="form-control form-control-slider" />
        </div>
      </div>
      {sections.map((s, i) => <SectionRangeConfiguration key={i + 1} from={s.from} to={s.to} title={`Section ${i + 1}`} />)}
    </div>
  );
}

function Panel() {
  const { setButtonList } = useContext(ButtonMenuContext);
  const array = [1, 2, 3];

  useEffect(() => {
    setButtonList([{
      Icon: Icon.Plus,
      title: 'New section',
      onClick: () => $('#newSection').modal(),
    }]);
  }, []);

  return (
    <>
      <Modal id="newSection" />
      <div className="container-fluid panel">
        <div className="row">
          <div className="col  col-12">
            <Accordion>
              {array.map((id) => (
                <Card id={`card${id}`} title={`Section ${id}`} key={id}>
                  <CardBody />
                </Card>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;
