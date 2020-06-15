import React from "react";
import Color from "./Color";
import * as Icon from "react-feather"
import "../Panel.css"
import "./Panel.css"


function Panel() {

    let colors = [[123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54]];

    return (
      <div className="container-fluid panel">
          <div className="row">
              {colors.map(rgbValue => <Color rgbValue={rgbValue}/>)}
              <div className="col-sm-12 col-md-2 col-lg-2">
                  <button className="btn btn-outline-primary"><Icon.PlusCircle/></button>
              </div>
          </div>
      </div>
    );
}

export default Panel;
