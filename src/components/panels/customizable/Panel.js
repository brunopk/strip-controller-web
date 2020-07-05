import React from "react";
import {Panel as Colors} from "../colors"
import "./Panel.css"
import * as Icon from 'react-feather';
import { Range, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';

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

function Section({title}){

  return (
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            {title}
          </button>
          <button class="btn btn-danger section-btn">
            <Icon.X/>
          </button>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
        <div class="card-body">
          <Colors editable={true} />
        </div>
      </div>
    </div>
  );
}

function RangeConfig(){

  return (
    <div className="row row-with-margin-top align-items-center">
      <div className="col col-3">
        <span>Section 1</span>
      </div>
      <div className="col col-2">
        <span>From:</span>
      </div>
      <div className="col col-2">
        <input type="number" class="form-control"/>
      </div>
      <div className="col col-2">
        <span>To:</span>
      </div>
      <div className="col col-2">
        <input type="number" class="form-control"/>
      </div>
    </div>
  )
}

function Panel({values, onChose, editable }) {

    return (
      <div className="container-fluid panel">
        <div className="row">
          <div className="col  col-12">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseShape" aria-expanded="false" aria-controls="collapseShape">
                      <span>
                        <Icon.Codesandbox style={{marginRight: "5px"}}/>Shape 
                      </span>  
                    </button>
                </h5>
              </div>
              <div id="collapseShape" class="collapse show" aria-labelledby="headingOne">
                <div class="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col col-12">
                        <div class="list-group">
                          <button class="list-group-item list-group-item-action list-group-item-primary">Squares and lines</button>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-12">
                        <div class="list-group">
                          <button class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Cylinder</button>
                        </div>
                      </div>
                    </div>
                    <div className="row row-with-margin-top align-items-center">
                      <div className="col col-3">
                        <span>Number of leds:</span>
                      </div>
                      <div className="col col-8">
                        <input type="number" class="form-control"/>
                      </div>
                      <div className="col col-1">
                        <button class="btn btn-primary section-btn">
                          <Icon.RefreshCw/>
                        </button>
                      </div>
                    </div>
                    <div className="row row-with-margin-top align-items-center">
                      <div className="col col-3">
                        <span>Number of sections:</span>
                      </div>
                      <div className="col col-8">
                        <input type="number" class="form-control"/>
                      </div>
                      <div className="col col-1">
                        <button class="btn btn-primary section-btn">
                          <Icon.RefreshCw/>
                        </button>
                      </div>
                    </div>
                    <div className="row row-with-margin-top align-items-center">
                      <div className="col col-3">
                        <span>Sections:</span>
                      </div>
                      <div className="col col-9">
                        <div className="form-control form-control-slider">
                          <ControlledRange />
                        </div>
                      </div>
                    </div>
                    <RangeConfig/>
                  </div>
                </div>
              </div>
            </div>
            <Section title="Section #1"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
