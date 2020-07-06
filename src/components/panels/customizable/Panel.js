import React, {useState} from "react";
import {Panel as Colors} from "../colors"
import { Range } from "rc-slider";
import "./Panel.css"
import 'rc-slider/assets/index.css';
import _ from "lodash"
import * as Icon from "react-feather";


class ControlledRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 33, 99],
    };
  }

  handleChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    return <Range value={this.state.value} onChange={this.handleChange} handle={this.handle} allowCross={false} />;
  }
}

function SectionColorConfiguration({title}){
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            {title}
          </button>
          <button className="btn btn-danger section-btn">
            <Icon.X/>
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
        <div className="card-body">
          <Colors editable={true} />
        </div>
      </div>
    </div>
  );
}

function SectionRangeConfiguration({title}){

  return (
    <div className="row row-with-margin-top align-items-center">
      <div className="col col-4">
        <span>{title}</span>
      </div>
      <div className="col col-2 text-right">
        <span>From:</span>
      </div>
      <div className="col col-2">
        <input type="number" className="form-control"/>
      </div>
      <div className="col col-2 text-right">
        <span>To:</span>
      </div>
      <div className="col col-2">
        <input type="number" className="form-control"/>
      </div>
    </div>
  )
}

function Panel() {

    const [numberOfSections, setNumberOfSections] = useState({actual: 1, prev: 1});
    const [numberOfLeds, setNumberOfLeds] = useState({actual: 300, prev: 300});
    const handleChangeNumberOfSections = (prevNumberOfSections) => (event) => {
      setNumberOfSections({
        actual: event.target.value,
        prev: prevNumberOfSections
      })
    }
    const handleChangeNumberOfLeds = (prevNumberOfLeds) => (event) => {
      setNumberOfLeds({
        actual: event.target.value,
        prev: prevNumberOfLeds
      })
    }

    return (
      <div className="container-fluid panel">
        <div className="row">
          <div className="col  col-12">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseShape" aria-expanded="false" aria-controls="collapseShape">
                      <span>
                        <Icon.Codesandbox style={{marginRight: "5px"}}/>Shape 
                      </span>  
                    </button>
                  </h5>
                </div>
                <div id="collapseShape" className="collapse show" aria-labelledby="headingOne">
                  <div className="card-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col col-12">
                          <div className="list-group">
                            <button className="list-group-item list-group-item-action list-group-item-primary">Squares and lines</button>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col col-12">
                          <div className="list-group">
                            <button className="list-group-item list-group-item-action disabled" tabIndex={-1} aria-disabled="true">Cylinder</button>
                          </div>
                        </div>
                      </div>
                      <div className="row row-with-margin-top align-items-center">
                        <div className="col col-4">
                          <span>Number of leds:</span>
                        </div>
                        <div className="col col-8">
                          <input 
                            type="number" 
                            value={numberOfLeds.actual} 
                            className="form-control"
                            onChange={handleChangeNumberOfLeds(numberOfLeds.actual)}
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
                            value={numberOfSections.actual} 
                            onChange={handleChangeNumberOfSections(numberOfSections.actual)}
                          />
                        </div>
                      </div>
                      <div className="row row-with-margin-top align-items-center">
                        <div className="col col-4">
                          <span>Sections:</span>
                        </div>
                        <div className="col col-8">
                          <div className="form-control form-control-slider">
                            <ControlledRange key={1} />
                          </div>
                        </div>
                      </div>
                      {_.times(numberOfSections.actual, (i) => <SectionRangeConfiguration key={i+1} title={`Section ${i+1}`}/>)}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
